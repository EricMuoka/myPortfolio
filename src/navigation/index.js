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
} from '../screens/index';

import HomeRoute from './home.route';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Signup">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeRoute} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Passwordrecovery" component={Passwordrecovery} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Appinfo" component={Appinfo} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
