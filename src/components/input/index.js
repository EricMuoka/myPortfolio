import React from "react";
import {View, TextInput} from "react-native";
 
import styles from "./style";

export default class SearchInput extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
    };

    handleChangeText = (text) => {
        this.setState({ text: text });
    };

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if (!text) return;

        onSubmit(text);
        this.setState({ text: '' });
    }


    render(){
        const { placeholder, style, placeholderTextColor} = this.props;
        const { text } = this.state;
        return(
            <View style={styles.container}>
                <TextInput 
                    style={[style, styles.input]}
                    value={text}
                    autoCorrect={false} 
                    autoCapitalize="none"
                    placeholder={placeholder} 
                    placeholderTextColor={placeholderTextColor} 
                    clearButtonMode='always'
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        )
    }
}