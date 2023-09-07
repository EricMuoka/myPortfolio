import React, {useState} from "react";
import {View, StatusBar, Image, Text, ScrollView, TouchableOpacity} from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from "./style";

export default function CartItem() {
    const [minusIconBorderColor, setMinusIconBorderColor] = useState('#f0f0f0');
    const [plusIconBorderColor, setPlusIconBorderColor] = useState('#f0f0f0');

    const changePlusIconBorderColor = () => {
        const newColor = plusIconBorderColor === '#f0f0f0' ? 'green' : '#f0f0f0'; // Toggle color
        setPlusIconBorderColor(newColor);
        setMinusIconBorderColor('#f0f0f0');
    };
    const changeMinusIconBorderColor = () => {
        const newColor = minusIconBorderColor === '#f0f0f0' ? 'green' : '#f0f0f0'; // Toggle color
        setMinusIconBorderColor(newColor);
        setPlusIconBorderColor('#f0f0f0');
    };

    const categories = [
        {
            name: 'Macbook"',
            price: '$900.00',
            color: 'silver',
            imgSrc: require('../../assets/macbook.jpeg'),

        },
        {
            name: 'Clothing',
            color: 'brown',
            price: '$90.00',
            imgSrc: require('../../assets/cloth.jpeg'),
        },
        {
            name: 'Ram',
            color: 'green',
            price: '$70.00',
            imgSrc: require('../../assets/ram.jpeg'),
        },
    ];

    return(
        <View style={styles.container}>
                {categories.map(item => (
                <View style={styles.cart} key={item.name}>
                    <View style={styles.cartList}>
                        <Image
                            source={item.imgSrc}
                            style={styles.itemImage} 
                        />
                        <View style={styles.desc}>
                            <View>
                                <Text style={styles.cartListText}> {item.name}</Text>
                                <Text style={styles.itemColor}>{item.color}</Text>
                            </View>
                            <Text style={styles.priceText}>{item.price}</Text>
                        </View>
                        <View style={styles.viewi}>
                            <TouchableOpacity style={styles.close}>
                                <EvilIcons name="close" size={25} color="grey" />
                            </TouchableOpacity>
                            <View style={styles.iconCont}>
                                <TouchableOpacity onPress={changeMinusIconBorderColor}>
                                    <View style={[styles.iconView, {borderColor: minusIconBorderColor}]}>
                                        <Entypo name="minus" size={12} color="#000" />
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>1</Text>
                                <TouchableOpacity onPress={changePlusIconBorderColor}>
                                    <View style={[styles.iconView, {borderColor: plusIconBorderColor}]}>
                                        <Entypo name="plus" size={12} color="#000" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                </View>
            ))}
        </View>
    );
}