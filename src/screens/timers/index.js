import React from "react";
import {
    View, 
    Text,
    ScrollView
} from "react-native";
import { v4 as uuidv4 } from 'uuid';

import styles from "./style";
import { ToggleableTimerForm, EditableTimer } from "../../components";
import { newTimer } from "../../utils/timerUtils";

export default class Timers extends React.Component {
    state = {
        timers: [
            {
                title: 'Wash my hair',
                project: 'House chores',
                id: uuidv4(),
                elasped: 5456099,
                isRunning: true,
            },
            {
                title: 'Read the React Native docs',
                project: 'Work chores',
                id: uuidv4(),
                id: 2, 
                elasped: 1273998,
                isRunning: false,
            },
        ] 
    }

    handleCreateFormSubmit = (timer) => {
        const { timers } = this.state;

        this.setState({
            timers: [newTimer(timer), ...timers]
        });
    };

    render() {
        const { timers } = this.state;
        return(
            <View style={styles.appContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.smallText}>Timers</Text>
                </View>
                <ScrollView style={styles.timerList}>
                    <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} isOpen={false}/>
                    {timers.map(({ title, project, id, elasped, isRunning }) => (
                        <EditableTimer 
                            key={id}
                            id={id}
                            title={title}
                            project={project}
                            elapsed={elasped}
                            isRunning={isRunning}
                        />
                    ))}
                </ScrollView>
            </View>
        );
    }
}