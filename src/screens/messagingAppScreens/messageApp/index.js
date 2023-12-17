import React from 'react';
import { View, Text, } from 'react-native';

import styles from './style';
import Status from '../../../components/messagingAppComponents/status';

export default class MessagingApp extends React.Component {
    renderMessageList() {
        return(
            <View style={styles.content}>
                <Text style={styles.smallText}>Message List</Text>
            </View>
        );
    }

    renderToolBar() {
        return(
            <View style={styles.toolBar}>
                <Text style={styles.smallText}>Tool Bar</Text>
            </View>
        );
    }

    renderInputMethodEditor() {
        return(
            <View style={styles.inputMethodEditor}>
                <Text style={styles.smallText}>Input Method Editor</Text>
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <Status />
                {this.renderMessageList()}
                {this.renderToolBar()}
                {this.renderInputMethodEditor()}
            </View>
        );
    }
};