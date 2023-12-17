import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './style';
import { TextInput, Buton } from '../../index';

export default class TimerForm extends React.Component {
    static defaultProps = {
        id: null, 
        title: '',
        project: '',
    };

    constructor(props) {
        super(props);

        const { id, title, project } = props;

        this.state = {
            title: id ? title : '',
            project: id ? project : '',
        };
    }
 
    handleTitleChange = title => {
        this.setState({ title });
    };

    handleProjectChange = project => {
        this.setState({ project });
    }

    handleSubmit = () => {
        const { onFormSubmit, id } = this.props;
        const { title, project } = this.state;

        onFormSubmit({
            id,
            title, 
            project,
        });
    };

    render() {
        const { id, onFormClose } = this.props;
        const { title, project } = this.state;

        const submitText = id ? 'Update' : 'Create';

        return(
            <View style={styles.formContainer}>
                <View style={styles.attributeContainer}> 
                    <Text style={styles.textInputTitle}>Title</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput 
                            style={styles.textInput}
                            onChangeText={this.handleTitleChange}
                            value={title}
                        />
                    </View>
                </View>
                <View style={styles.attributeContainer}> 
                    <Text style={styles.textInputTitle}>Project</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput 
                            style={styles.textInput}
                            onChangeText={this.handleProjectChange}
                            value={project}
                        />
                    </View>
                </View>
                <View style={styles.buttonGroup}>
                    <Buton small color='#21BA45' title={submitText} onPress={this.handleSubmit}/>
                    <Buton small color='#DB2828' title='cancel' onPress={onFormClose} />
                </View>
             </View>
        )
    };
}