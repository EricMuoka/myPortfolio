import React from 'react';
import { Text as RNText} from 'react-native';
import styles from './style'

export default function Textt ({ message, style }) {
  return <RNText style={[styles.defaultText, style]}>{message}</RNText>;
};

 