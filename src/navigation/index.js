import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, Signup, Passwordrecovery} from '../screens/index';

const Stack = createNativeStackNavigator();

export default function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName="Signup">
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Passwordrecovery' component={Passwordrecovery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};