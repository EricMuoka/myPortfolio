import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Shipping from '../../components/shipping/Shipping';
import Payment from '../../components/payment/Payment';
import Review from '../../components/review/Review';
import Success from '../../components/success/Success';

const Checkout = () => {
  const [showShipping, setShowShipping] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity style={{padding: 5}}>
          <Ionicons name="arrow-back" size={24} color={'black'} />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          Checkout
        </Text>
        <View></View>
      </View>
      <View style={styles.workflow}>
        <View style={styles.workflowItem}>
          <View
            style={{
              backgroundColor:
                (showShipping && 'black') || (showPayment && 'green'),
              ...styles.circle,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>1</Text>
          </View>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 15,
              color:
                showShipping || showPayment || showReview || showSuccess
                  ? 'black'
                  : 'grey',
            }}>
            Shipping
          </Text>
        </View>
        <View style={{backgroundColor: 'gray', width: 15, height: 2}}></View>
        <View style={styles.workflowItem}>
          <View
            style={{
              backgroundColor:
                (showPayment && 'black') ||
                (showReview && 'green') ||
                (showSuccess && 'green') ||
                'grey',
              ...styles.circle,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>2</Text>
          </View>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 15,
              color:
                showPayment || showReview || showSuccess ? 'black' : 'grey',
            }}>
            Payment
          </Text>
        </View>
        <View style={{backgroundColor: 'gray', width: 15, height: 2}}></View>
        <View style={styles.workflowItem}>
          <View
            style={{
              backgroundColor:
                (showReview && 'black') || (showSuccess && 'green') || 'grey',
              ...styles.circle,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>3</Text>
          </View>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 15,
              color: showReview || showSuccess ? 'black' : 'grey',
            }}>
            Review
          </Text>
        </View>
      </View>
      {showShipping && (
        <Shipping
          setShowShipping={setShowShipping}
          setShowPayment={setShowPayment}
        />
      )}
      {showPayment && (
        <Payment
          setShowReview={setShowReview}
          setShowPayment={setShowPayment}
        />
      )}
      {showReview && (
        <Review setShowSuccess={setShowSuccess} setShowReview={setShowReview} />
      )}
      {showSuccess && <Success />}
    </View>
  );
};

export default Checkout;
