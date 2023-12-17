import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Myprofile,
  Editprofile,
  Home,
  Signup,
  Passwordrecovery,
  Appinfo,
  ItemDetails,
  Checkout,
  Rough,
  Weather,
  Timers,
  Portfolio,
  ImageFeed, 
  MessagingApp,
  Contacts,
} from '../screens/index';

import HomeRoute from './home.route';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Portfolio">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeRoute} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Passwordrecovery" component={Passwordrecovery} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Appinfo" component={Appinfo} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Rough" component={Rough} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Timers" component={Timers} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="ImageFeed" component={ImageFeed} />
        <Stack.Screen name="MessagingApp" component={MessagingApp} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
