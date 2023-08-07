import React from 'react';
import { Text as RNText} from 'react-native';
import styles from './style'

export default function Textt ({ message, texttStyle }) {
  return <RNText style={[styles.defaultText, texttStyle]}>{message}</RNText>;
};

 