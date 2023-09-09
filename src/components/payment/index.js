import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';

const Payment = ({setShowPayment, setShowReview}) => {
  const showReview = () => {
    setShowPayment(false);
    setShowReview(true);
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
        Choose a payment method
      </Text>
      <Text style={{fontSize: 17, fontWeight: 700, paddingBottom: 30}}>
        You will not be charged until you review this order on the next phase
      </Text>
      <View></View>

      <Button title="Continue to Review" onPress={() => showReview()} />
    </View>
  );
};

export default Payment;
