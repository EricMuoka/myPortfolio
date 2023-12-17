import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from './style';

export default class CommentList extends React.Component {
    renderItem = ( item, index ) => {
        <View key={index} style={styles.comment}>
            <Text>{item}</Text>
        </View>
    }

    render() {
        const { items } = this.props;
        return(
            <ScrollView>
                {items.map(this.renderItem)}
            </ScrollView>
        );
    }
};