import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/index';
import Signup from '../screens/signup';
import Login from '../screens/login/index.js';
import Passwordrecovery from '../screens/passwordrecovery';

const Stack = createNativeStackNavigator();

export default function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Passwordrecovery' component={Passwordrecovery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};