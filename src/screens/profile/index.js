import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Button, Textt, TextInput} from '../../components/index';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function Myprofile ({navigation}){
    const [userDetails, setUserDetails] = useState({
        name: 'Eric Muoka',
        email: 'johndoe@example.com',
        phone: '+234 708 6148 560',
        profileImage: null,
    });

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#568746" barStyle="light-content" />
            <View style={styles.text}>
                <Textt texttStyle={styles.textHeader} message={'My Profile'}/>
            </View>
            <View style={styles.containerii}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/eric.jpg')}
                        style={styles.profileImage}
                    />
                    <Textt texttStyle={styles.nameText} message={userDetails.name} />
                    <Textt texttStyle={styles.phoneText} message={userDetails.phone}/>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Editprofile', {name: 'Editprofile'})}>
                    <View style={styles.iconView}>
                        <EvilIcons name="pencil" size={35} color="#568746"/>
                        <Textt texttStyle={styles.iconText} message={'Edit Profile'}/>
                        <EvilIcons name="chevron-right" size={35} color="#568746"/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.iconView}>
                        <EvilIcons name="lock" size={35} color="#568746"/>
                        <Textt texttStyle={styles.iconText} message={'Change password'}/>
                        <EvilIcons name="chevron-right" size={35} color="#568746"/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.iconView}>
                        <EvilIcons name="location" size={35} color="#568746"/> 
                        <Textt texttStyle={styles.iconText} message={'Change location'}/>
                        <EvilIcons name="chevron-right" size={35} color="#568746"/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Appinfo', {name: 'Appinfo'})}>
                    <View style={styles.iconView}>
                        <Feather name="smartphone" size={20} color="#568746" />
                        <Textt texttStyle={styles.iconText} message={'App Information'}/>
                        <EvilIcons name="chevron-right" size={35} color="#568746"/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.iconView}>
                        <Feather name="log-out" size={20} color="#568746" />
                        <Textt texttStyle={styles.iconText} message={'Log out'}/>
                        <EvilIcons name="chevron-right" size={35} color="#568746"/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}