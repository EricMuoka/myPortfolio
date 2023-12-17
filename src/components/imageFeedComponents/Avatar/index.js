import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styles from "./style";

export default function Avatar({ size, backgroundColor, initials}) {

    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{initials}</Text>
        </View> 
    );
}