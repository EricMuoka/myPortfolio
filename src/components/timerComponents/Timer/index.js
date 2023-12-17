import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './style';
import { millisecondsToHuman } from '../../../utils/timerUtils';
import Buton from '../../buton';

export default class Timer extends React.Component {

    handleStartPress = () => {
        const { id, onStartPress } = this.props;

        onStartPress(id);
    };

    handleStopPress = () => {
        const { id, onStartPress } = this.props;

        onStopPress(id);
    };

    handleRemovePress = () => {
        const { id, onRemovePress } = this.props;

        onRemovePress(id);
    };

    renderActionButton() {
        const { isRunning } = this.props;

        if (isRunning) {
            return (
                <Buton 
                    color="#DB2828"
                    title="Stop"
                    onPress={this.handleStopPress}
                />
            );
        }

        return (
            <Buton 
                color="#DB2828"
                title="Start"
                onPress={this.handleStartPress}
            />
        );
    }

    render() {
        const { elasped, title, project, onEditPress } = this.props;
        const elapsedString = millisecondsToHuman(elasped);
        return( 
            <View style={styles.timerContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.project}>{project}</Text>
                <Text style={styles.elaspedTime}>{elapsedString}</Text>
                <View style={styles.buttonGroup}>
                    <Buton color={'blue'} small title={'Edit'} onPress={onEditPress}/>
                    <Buton color={'blue'} small title={'Remove'} onPress={this.handleRemovePress}/>
                </View>
                {this.renderActionButton()}
            </View> 
        );
    }
}