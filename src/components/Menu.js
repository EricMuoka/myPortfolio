import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Clothing from './Clothing';
import Electronics from './Electronics';
import Household from './Household';

const Menu = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
      <Electronics navigation={navigation} />
      <Clothing navigation={navigation} />
      <Household navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Menu;
