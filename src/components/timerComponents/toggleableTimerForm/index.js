import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './style';
import { TimerForm, Buton, } from '../../index';

export default class ToggleableTimerForm extends React.Component  {
    state = {
        isOpen: false,
    }

    handleFormSubmit = (timer) => {
        const { onFormSubmit } = this.props;

        onFormSubmit(timer),
        this.setState({isOpen: false});
    };
 
    handleFormOpen = () => {
        this.setState({
            isOpen: true,
        });
    };

    handleFormClose = () => {
        this.setState({
            isOpen: false,
        });
    };
    render() {
        const { isOpen } = this.state;
    
        return(
            <View style={[styles.container, !isOpen && styles.buttonPadding]}>
                {isOpen ? 
                    (<TimerForm 
                        onFormSubmit={this.handleFormSubmit}
                        onFormClose={this.handleFormClose}
                    />) : (
                    <Buton 
                        title='+' 
                        color='#000' 
                        onPress={this.handleFormOpen}
                    />)
                }
            </View>
        );
    };
};