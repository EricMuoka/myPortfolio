import React, {useState} from "react";
import {View, Image, Text, TouchableOpacity, FlatList} from "react-native";
import { connect } from "react-redux";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from "./style";
  

const cartItems = [
    {
        id: '1',
        name: 'Macbook"',
        price: '$900.00',
        color: 'silver',
        imgSrc: require('../../assets/macbook.jpeg'),
        plusIconBorderColor: '#f0f0f0',
        minusIconBorderColor: '#f0f0f0',

    },
    {
        id: '2',
        name: 'Clothing',
        color: 'brown',
        price: '$90.00',
        imgSrc: require('../../assets/cloth.jpeg'),
        plusIconBorderColor: '#f0f0f0',
        minusIconBorderColor: '#f0f0f0',
    },
    {
        id: '3',
        name: 'Ram',
        color: 'green',
        price: '$70.00',
        imgSrc: require('../../assets/ram.jpeg'),
        plusIconBorderColor: '#f0f0f0',
        minusIconBorderColor: '#f0f0f0',
    },
];

const RenderItem = ({item, id, name, color, price, imgSrc, onPress, borderColor, iconColor, plusIconBorderColor, minusIconBorderColor}) => (
    <View style={styles.cart} key={id}>
        <View style={styles.cartList}>
            <Image
                source={imgSrc}
                style={styles.itemImage} 
            />
            <View style={styles.desc}>
                <View>
                    <Text style={styles.cartListText}> {name}</Text>
                    <Text style={styles.itemColor}>{color}</Text>
                </View>
                <Text style={styles.priceText}>{price}</Text>
            </View>
            <View style={styles.viewi}>
                <TouchableOpacity onPress={() => handleRemoveItem(id)} style={styles.close}>
                    <EvilIcons name="close" size={25} color="grey" />
                </TouchableOpacity>
                <View style={styles.iconCont}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={[styles.iconView, { minusIconBorderColor, borderColor}]}>
                            <Entypo name="minus" size={12} color={iconColor} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>1</Text>
                    <TouchableOpacity onPress={onPress}>
                        <View style={[styles.iconView, { plusIconBorderColor, borderColor}]}>
                            <Entypo name="plus" size={12} color={iconColor} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.line}></View>
    </View>
);

const CartItem = ({ cart }) => {
    const [data, setData] = useState(cartItems);
    const [selectedId, setSelectedId] = useState();

   {/* const changePlusIconBorderColor = (id) => {
        setData(prevData => prevData.map(item => ({
          ...item,
          plusIconBorderColor: item.id === id ? (item.plusIconBorderColor === '#f0f0f0' ? 'green' : '#f0f0f0') : '#f0f0f0',
          minusIconBorderColor: '#f0f0f0',
        })));
    }; */}

   {/* const changeMinusIconBorderColor = (id) => {
        setData(prevData => prevData.map(item => ({
          ...item,
          minusIconBorderColor: item.id === id ? (item.minusIconBorderColor === '#f0f0f0' ? 'green' : '#f0f0f0') : '#f0f0f0',
          plusIconBorderColor: '#f0f0f0',
        })));
    }; */}

    const renderItem = ({item}) => {
        const borderColor = item.plusIconBorderColor = item.id === selectedId ? 'green' : '#f0f0f0';
        const iconColor = item.id === selectedId ? 'green' : 'black';

        return (
            <RenderItem
                item={item}
                onPress={() => setSelectedId(item.id)}
                borderColor={borderColor}
                iconColor={iconColor}
                name={item.name} 
                color={item.color}
                price={item.price}
                imgSrc={item.imgSrc}
                id={item.id}
            />
        );
    }
    const handleRemoveItem = (id) => {
        const updatedData = data = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    return(
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </View>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart, // Assuming 'cart' is the reducer name
});

export default connect(mapStateToProps)(CartItem);