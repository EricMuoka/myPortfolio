import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider> 
  );
};

export default App;
