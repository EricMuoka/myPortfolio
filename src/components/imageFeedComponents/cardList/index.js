import React from 'react';
import { FlatList, View, Text } from 'react-native';

import styles from './style';
import Card from '../card';
import { getImageFromId } from '../../../utils/imageFeedUtils/api';

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends React.Component {

    renderItem = ({ item: { id, author} }) => {
        const { commentsForItem, onPressComments } = this.props;
        const comments = commentsForItem[id];
        return(
            <Card 
                fullName={author}
                image={{ uri: getImageFromId(id), }}
                linkText={`${comments ? comments.length : 0} Comments`}
                onPressLinkText={() => {onPressComments(id)}}
            />
        );
    }

    render() {
        const { items, commentsForItem } = this.props;
        return(
            <View>
                <FlatList 
                    data={items}
                    renderItem={this.renderItem}
                    keyExtractor={keyExtractor}
                    extraData={commentsForItem}
                />
            </View>
        );
    }
};