import React from 'react';
import {Button, Text, View} from 'react-native';

const Review = ({setShowSuccess, setShowReview}) => {
  const showSuccess = () => {
    setShowReview(false);
    setShowSuccess(true);
  };
  return (
    <View>
      <Text>Review</Text>
      <Button title="Submit" onPress={() => showSuccess()} />
    </View>
  );
};

export default Review;
