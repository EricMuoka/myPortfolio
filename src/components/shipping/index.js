import React from 'react';
import {Button, Text, View} from 'react-native';

const Shipping = ({setShowShipping, setShowPayment}) => {
  const showPayment = () => {
    setShowShipping(false);
    setShowPayment(true);
  };
  return (
    <View>
      <Text>Shipping</Text>
      <Button title="Continue to Payment" onPress={() => showPayment()} />
    </View>
  );
};

export default Shipping;
