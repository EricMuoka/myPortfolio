import React from 'react';
import {Button, Text, View} from 'react-native';

const Payment = ({setShowPayment, setShowReview}) => {
  const showReview = () => {
    setShowPayment(false);
    setShowReview(true);
  };
  return (
    <View>
      <Text>Payment</Text>
      <Button title="Continue to Review" onPress={() => showReview()} />
    </View>
  );
};

export default Payment;
