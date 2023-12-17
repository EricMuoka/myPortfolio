import React, {useState} from 'react';
import { 
    View, 
    Text,
    Image, 
    ImageBackground,
    TouchableOpacity, 
    StatusBar, 
    ScrollView,
} from 'react-native';

import {Button, Textt, TextInput} from '../../components/index';
import styles from './style';

export default function Portfolio ({navigation, id, name}){
    const [userDetails, setUserDetails] = useState({
        name: 'Eric Muoka',
        email: 'ericmuoka1@gmail.com',
        ocupation: 'Fullstack React Native Developer',
        profileImage: null,
    });

    const projects = [
        {
            id:   1,
            name: 'Weather App',
            route: () => {navigation.navigate('Weather', {name: 'Weather'})},
           
        },
        {
            id:   2,
            name: 'Timers',
            route: () => {navigation.navigate('Timers', {name: 'Timers'})},
        },
        {
            id:   3,
            name: 'Image feed',
            route: () => {navigation.navigate('ImageFeed', {name: 'ImageFeed'})},
        },
        {
            id:   4,
            name: 'Messaging App',
            route: () => {navigation.navigate('MessagingApp', {name: 'MessagingApp'})},
        },
        {
            id:   5,
            name: 'Contacts',
            route: () => {navigation.navigate('Contacts', {name: 'Contacts'})},
        },
        {
            id:   6,
            name: 'Puzzle game',
            route: () => {navigation.navigate('Weather', {name: 'Weather'})},
        },
        {
            id:   7,
            name: 'Native Module Pie Chart',
            route: () => {navigation.navigate('Weather', {name: 'Weather'})},
        }
    ]

    route = () => {
        navigation.navigate('Weather', {name: 'Weather'})
    }

    const RenderItem = ({ id,  }) => (
        <View style={styles.containerii} key={id}>
            {projects.map(({ name, Id }) => (
                <TouchableOpacity onPress={() => navigation.navigate({port}, {name: {port}})}>
                <View style={styles.iconView}>
                    <Text style={styles.smallText}>{name}</Text>
                </View>
            </TouchableOpacity>
            ))}
        </View>
    )

    const renderItem = ({item}) => {

        return (
            <RenderItem
                item={item}
                onPress={() => setSelectedId(item.id)}
                name={item.name} 
                id={item.id}
            />
        );
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <ImageBackground
                source={require('../../assets/ericupdate.jpg')}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
            <View style={styles.containerii}>
                <Image
                    source={require('../../assets/eric.jpg')}
                    style={styles.profileImage}
                />
                <Textt texttStyle={styles.nameText} message={userDetails.name} />
                <Textt texttStyle={styles.detailsText} message={userDetails.ocupation}/>                
                <View style={styles.containerii}>
                    <View style={styles.text}>
                        <Text style={styles.textHeader}>My Personal Projects</Text>
                    </View>
                    {projects.map(({ id, name, route }) => (
                        <TouchableOpacity key={id} onPress={route}>
                            <View style={styles.iconView}>
                                <Text style={styles.smallText}>{name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            </ImageBackground>
        </View>
    );
}