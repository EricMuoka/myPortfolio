import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Clothing from './Clothing';
import Electronics from './Electronics';
import Household from './Household';

const Menu = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
      <Electronics />
      <Clothing />
      <Household />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Menu;
