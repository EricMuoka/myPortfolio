import React from "react";
import {View, StatusBar, Text, TouchableOpacity, TextInput as RNTextInput} from "react-native";
import styles from "./style";

export default function Cart({navigation}) {
    const signup = () => {
        navigation.navigate('Signup2', {name: 'Signup2'}) 
    }
    return(
        <View>
            <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
            <Text style={styles.text}>Cart Screen</Text>
        </View>
    );
}