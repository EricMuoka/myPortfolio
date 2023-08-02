import React from 'react';
import {View}  from 'react-native';
import Textt from '../../components/text';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const Signup = () => {
  return (
    <LinearGradient
      colors={['#000033', '#000080']} // Start from very dark blue (#000033) to dark blue (#000080)
      style={styles.container}
    >
    <View>
        <Textt message={'Sign up'}/>
      </View>
  </LinearGradient>
  );
};

export default Signup;
