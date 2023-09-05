import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home'
import Profile from "../screens/profile";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Myprofile } from "../screens";

const Tab = createBottomTabNavigator();

export default function HomeRoute(){
  return(
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: {
            backgroundColor: "#568746"
        },
        activeTintColor: '#fff',
    }}>
        <Tab.Screen 
          name={"Discover"} 
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => (
                <Fontisto name={'home'} size={24} color={'#fff'}/>
            ),
            tabBarLabelStyle: {
              color: '#fff',
            } 
          }}
        />
        <Tab.Screen 
          name={"Wallet"} 
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => (
                <AntDesign name={'wallet'} size={24} color={'#fff'}/>
            ),
            tabBarLabelStyle: {
              color: '#fff',
            }
          }}
        />
        <Tab.Screen 
          name={"Cart"} 
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => (
                <Entypo name={'shopping-cart'} size={24} color={'#fff'}/>
            ),
            tabBarLabelStyle: {
              color: '#fff',
            }
          }}
        />
        <Tab.Screen 
          name={"Profile"} 
          component={Myprofile}
          options={{
            headerShown: false,
            tabBarIcon: () => (
                <Ionicons name={'person-outline'} size={24} color={'#fff'}/>
            ),
            tabBarLabelStyle: {
              color: '#fff',
            }
          }}
        />
    </Tab.Navigator>
  );
}; 