// Reusable TextInput component
import React from 'react';
import { View, TextInput as RNTextInput, Text, } from 'react-native';
import styles from './style';
import Textt from '../text';

const TextInput = ({
  label,
  value,
  style,
  onChangeText,
  placeholder,
  secureTextEntry,
  disabled,
  required,
  placeholderTextColor
}) => {
  return (
    <View style={styles.container}>
      {label && <Textt style={styles.label} message={label}/>}
      <RNTextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        editable={!disabled}
        placeholderTextColor='#000'
        required={required}
      />
    </View>
  );
};

export default TextInput;
