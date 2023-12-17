import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./style";

export default function Buton({ color, title, small, onPress, numberOfLines, textStyle }) {
    return(
        <TouchableOpacity style={[styles.button, { borderColor: color}]} onPress={onPress} >
            <Text numberOfLines={numberOfLines} style={[styles.buttonText, textStyle, small ? styles.small : styles.large, { color },]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}