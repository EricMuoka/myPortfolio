import React, {useState} from 'react';
import {View,} from 'react-native';
import {Button, Textt} from '../../components/index';
import styles from './style';

export default function Appinfo() {
    return(
        <View>
            <Textt message={'Vendor is an app for online vendors to connect with customers within their local Vicinity like local goverment area. Customers are not allowed to buy from a vendor outside their local government, and vendors are not allowed to sell to customers outside their local goverment area'} />
        </View>
    );
}