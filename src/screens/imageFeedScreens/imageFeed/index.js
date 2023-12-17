import React from 'react';
import { Text, SafeAreaView, ActivityIndicator, Modal, AsyncStorage } from 'react-native';

import styles from './style';
import {CardList} from '../../../components/';
import { fetchImages } from '../../../utils/imageFeedUtils/api';
import Comments from '../comments';

const items = [
    { id: 0, author: 'Bob Ross' },
    { id: 1, author: 'Chuck Norris' },
];

export default class ImageFeed extends React.Component {
    static defaultProps = {
        style: null,
    }

    state = {
        loading: true,
        error: false,
        items: [],
        commentsForItem: {},
        showModal: false,
        selectedItemId: null,
    }

    openCommentScreen = id => {
        this.setState({
            showModal: true,
            selectedItemId: id,
        });
    };

    closeCommentScreen = () => {
        this.setState({
            showModal: false,
            selectedItemId: null,
        });
    };

    onSubmitComment = (text) => {
        const { selectedItemId, commentsForItem } = this.state;
        const comments = commentsForItem[selectedItemId] || [];

        const updated = {
            ...commentsForItem,
            [selectedItemId] : [...comments, text],
        }

        this.setState({
            commentsForItem: updated
        });

        try {
            AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
        } catch (error) {
            console.log('Failed to save comment', text, 'for', selectedItemId)
        }
    }

    async componentDidMount() {
        try {
            const items = await fetchImages();

            this.setState({
                loading: false,
                items,
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: true,
            });
        };

        const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';
        try {
            const commentsForItem = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY,);

            this.setState({
                commentsForItem: commentsForItem ? JSON.parse(commentsForItem) : {}
            });
        } catch (error) {
            console.log('Failed to load comments')
        };
    }

    render() {
        const { style } = this.props;
        const {  loading, error, items, showModal, commentsForItem, selectedItemId  } = this.state;

        if (loading) {
            return <ActivityIndicator color={'yellow'} size={'large'}/>
        }

        if (error) {
            return <Text style={styles.smallText}>Error... Check your internet connection and try again</Text>
        }

        return(
            <SafeAreaView style={style}>
                <CardList 
                    items={items}
                    commentsForItem={commentsForItem}
                    onPressComments={this.openCommentScreen}
                />
                <Modal 
                    visible={showModal}
                    animationType='slide'
                    onRequestClose={this.closeCommentScreen}
                >
                    <Comments 
                        style={styles.comments}
                        comments={commentsForItem[selectedItemId] || []}
                        onClose={this.closeCommentScreen}
                        onSubmitComment={this.onSubmitComment}
                    />
                </Modal>
            </SafeAreaView>
        )
    }
}