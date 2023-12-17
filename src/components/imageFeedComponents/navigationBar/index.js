import React from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';

import styles from './style';

export default function NavBar({ title, leftText, onPressLeftText }) {

    NavBar.defaultProps = {
        title: '',
        leftText: '',
        onPressLeftText: () => {},
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
                <Text style={styles.leftText}>{leftText}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};