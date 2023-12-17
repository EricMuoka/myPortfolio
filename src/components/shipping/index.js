import React, {useMemo, useState} from 'react';
import styles from './styles';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
const Shipping = ({setShowShipping, setShowPayment}) => {
  const showPayment = () => {
    setShowShipping(false);
    setShowPayment(true);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          paddingVertical: 10,
          color: 'black',
        }}>
        Enter your shipping address
      </Text>
      <View style={{paddingVertical: 10}}>
        <Text style={styles.label}>Country</Text>
        <TextInput
          //underlineColorAndroid="transparent"
          placeholder="country name"
          style={styles.inputField}
        />
      </View>
      <View style={{paddingVertical: 10}}>
        <Text style={styles.label}>Full name</Text>
        <TextInput
          //underlineColorAndroid="transparent"
          placeholder="full name"
          style={styles.inputField}
        />
      </View>
      <View style={{paddingVertical: 10}}>
        <Text style={styles.label}>Street address</Text>
        <TextInput
          //underlineColorAndroid="transparent"
          placeholder="street name"
          style={styles.inputField}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => showPayment()}>
        <Text style={styles.buttonText}>Continue to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Shipping;
