import React, {useState} from "react";
import {View, StatusBar, Button, Text, ScrollView, TouchableOpacity, FlatList} from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CartItem from "../../components/cartItem";
import styles from "./style";

export default function Cart({navigation}) {
    const [data, setData] = useState(cartItems);

    const checkout = () => {
        navigation.navigate('Checkout', {name: 'Checkout'}) 
    }

   // const renderItem = ({ item }) => (
   //     <CartItem />
   // );
   const Item = ({name}) => (
        <CartItem />
    );

    const cartItems = [
        {
            id: '1',
            name: 'Macbook"',
            price: '$900.00',
            color: 'silver',
            imgSrc: require('../../assets/macbook.jpeg'),

        },
        {
            id: '2',
            name: 'Clothing',
            color: 'brown',
            price: '$90.00',
            imgSrc: require('../../assets/cloth.jpeg'),
        },
        {
            id: '3',
            name: 'Ram',
            color: 'green',
            price: '$70.00',
            imgSrc: require('../../assets/ram.jpeg'),
        },
    ];

    const handleRemoveItem = (itemId) => {
        // Filter out the item with the specified itemId
        const updatedData = data.filter(item => item.id !== itemId);
        setData(updatedData);
    };

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
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
                <ScrollView>
                    <CartItem />
                </ScrollView>
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