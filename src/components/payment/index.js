import React, {useState} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {RadioButton} from 'react-native-radio-buttons-group';
import styles from './styles';
import MasterCard from '../../assets/masterCard.png';
import GooglePay from '../../assets/googlePay.png';
import ApplePay from '../../assets/applePay.png';

const Payment = ({setShowPayment, setShowReview}) => {
  const [selectedId, setSelectedId] = useState();

  const handleOptionSelect = id => {
    setSelectedId(id);
  };

  const showReview = () => {
    setShowPayment(false);
    setShowReview(true);
  };

  const paymentOptions = [
    {id: 'creditCard', name: 'Credit Card', logo: MasterCard},
    {id: 'googlePay', name: 'Google Pay', logo: GooglePay},
    {id: 'applePay', name: 'Apple Pay', logo: ApplePay},
  ];

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
      {paymentOptions.map(item => (
        <TouchableOpacity key={item.id} style={styles.option()}>
          <RadioButton
            onPress={() => handleOptionSelect(item.id)}
            selected={item.id === selectedId ? selectedId : false}
            id={item.id}
            label={item.name}
            labelStyle={{fontSize: 18, fontWeight: '500', color: 'black'}}
          />
          <Image source={item.logo} resizeMode="cover" style={styles.image} />
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={() => showReview()}>
        <Text style={styles.buttonText}>Continue to Review</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
