import React, {useState} from "react";
import {View, StatusBar, Button, Image, Text, FlatList, TouchableOpacity} from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from "./style";

const favourites = [
    {
        id: 1,
        imgSrc: require('../../assets/macbook.jpeg'),
        itemName: 'Macbook Pro',
        cost: '$900.00',
        description:
        'Powerful 15-inch laptop for work and entertainment on the go.',
    },
    {
        id: 2,
        imgSrc: require('../../assets/cloth.jpeg'),
        itemName: 'Leather Shirt',
        cost: '$15.00',
        description:
        'Very comfy leather shirt.',
    },
]

const handleRemoveItem = (id) => {
    const updatedData = data = data.filter(item => item.id !== id);
    setData(updatedData);
};

const RenderItem = ({item, onPress, name, desc, cost, imgSrc, id}) => (

    <View>
        <TouchableOpacity onPress={() => handleRemoveItem(id)} style={styles.close}>
            <EvilIcons name="close" size={25} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity key={item.id}>
            <View style={styles.item}>
                <View style={styles.items}>
                    <Image 
                    style={styles.img}
                    source={item.imgSrc}
                    />
                    <View style={styles.itemText}>
                        <Text style={styles.desc}> {item.itemName}</Text>
                        <Text style={styles.cost}>{item.cost}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </View>
);

export default function Favourites({navigation}) {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        return (
            <RenderItem
                item={item}
                onPress={() => setSelectedId(item.id)}
                name={item.name} 
                cost={item.cost}
                imgSrc={item.imgSrc}
                id={item.id}
            />
        );
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#568746" barStyle="light-content" />
            <View style={styles.header}>
                <View style={styles.chevron}>
                    <EvilIcons name="chevron-left" size={35} color="#000"/>
                </View>
                <Text style={styles.text}>Favourites </Text>
                <View style={styles.dots}>
                    <Entypo name="dots-three-horizontal" size={20} color="#000"/>
                </View>
            </View>
            <FlatList
                data={favourites}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </View>
    );
}