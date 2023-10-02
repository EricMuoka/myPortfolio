import React, {useState} from "react";
import {View, StatusBar, Button, Text, ScrollView, TouchableOpacity} from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CartItem from "../../components/cartItem";
import styles from "./style";

export default function Cart({navigation}) {

    const checkout = () => {
        navigation.navigate('Checkout', {name: 'Checkout'}) 
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#568746" barStyle="light-content" />
            <View style={styles.header}>
                <View style={styles.chevron}>
                    <EvilIcons name="chevron-left" size={35} color="#000"/>
                </View>
                <Text style={styles.text}>My Cart </Text>
                <View style={styles.dots}>
                    <Entypo name="dots-three-horizontal" size={20} color="#000"/>
                </View>
            </View>
            <View>
                <CartItem /> 
            </View>
            <View style={styles.subTotalView}>
                <Text style={styles.text1}>Subtotal:</Text>
                <Text style={styles.text2}>$1060.00</Text>
            </View>
            <View style={styles.subTotalView}>
                <Text style={styles.text1}>Delivery fee:</Text>
                <Text style={styles.text2}>$5.00</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.checkoutButton} onPress={checkout}>
                    <Text style={styles.buttonText}>Proceed to checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}