import React from 'react';
import { TouchableOpacity } from 'react-native';
import Textt from '../text';
import styles from "./style";


/**
 * Button
 * @description Configurable dynamic button 
 * @param title
 * @param style
 * @param disabled
 * @param isLoading
 * @param textStyle
 * @param buttonStyle
 * @param onPress
 * @returns {JSX.Element}
 * @constructor 
 */
export default function Button({ title, buttonStyle, textStyle, onPress, disabled }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.defaultButton, buttonStyle,]} 
          disabled={disabled}
        >
            <Textt 
              message={title}
              style={[textStyle, styles.buttonText, disabled && styles.disabled]}
              onPress={onPress}
            />
        </TouchableOpacity>
    )
}