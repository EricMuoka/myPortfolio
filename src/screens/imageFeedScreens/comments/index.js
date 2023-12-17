import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Text } from 'react-native';

import styles from './style';
import { CommentList, NavBar, SearchInput } from '../../../components';

export default function Comments({ style, onClose, onSubmitComment, comments }) {
    Comments.defaultProps = {
        style: null,
    }
    return(
        <SafeAreaView style={style}>
            <NavBar 
                title={'Comments'}
                leftText={'Close'}
                onPressLeftText={onClose}
            />
            <View style={styles.inputContainer}>
                <SearchInput 
                    style={styles.input}
                    placeholder={'Leave a comment'}
                    placeholderTextColor={'grey'}
                    onSubmit={onSubmitComment}
                />
            </View>
            <CommentList items={comments}/>
        </SafeAreaView>
    );
};