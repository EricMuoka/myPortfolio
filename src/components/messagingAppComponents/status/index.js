import React from 'react';
import { FlatList, View, Text, StatusBar, } from 'react-native';

import NetInfo from "@react-native-community/netinfo";

import styles from './style';

export default class Status extends React.Component {
    state = {
        info: null,
    }
    render() {
        const { info } = this.state;

        const isConnected = info !== 'none';
        const backgroundColor = isConnected ? 'white' : 'red';

        {/*const StatusBa = (
            <StatusBar 
                backgroundColor={backgroundColor}
                barStyle={isConnected ? 'dark-content' : 'light-content'}
            />
        )*/}

        return(
            <View style={styles.container}>
                <StatusBar 
                    backgroundColor={backgroundColor}
                    barStyle={isConnected ? 'dark-content' : 'light-content'}
                />
                
            </View>
        );
    }
};