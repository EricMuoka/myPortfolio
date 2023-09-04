import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, TextInput as RNTextInput} from 'react-native';
import {Button, Textt} from '../../components/index';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

export default function Editprofile ({navigation}) {
    const [userDetails, setUserDetails] = useState({
        name: 'Eric Muoka',
        email: 'ericmuoka1@gmail.com',
        phone: '+234 708 6148 560',
        address: 'Newyork',
        dob: new Date(),
        showDatePicker: false, // to toggle the date picker visibility
        profileImage: null,
    });

    const openImagePicker = () => {
        const options = {
            title: 'Select image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = response.uri;
            }
        });
    };

    const uploadImage = async source => {
        // Implement image upload logic here
        // For simplicity, you can use a placeholder image initially
        const formData = new FormData();
        formData.append('image', {
            uri: source,
            type: 'image/jpeg',
            name: 'image.jpg',
        });
        
        try {
            const response = await axios.post('Your_Upload_URL', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Image uploaded successfully', response.data);
        } catch (error) {
            console.log('Image upload error', error);
        }

        setUserDetails({
            ...userDetails,
            // Replace with the actual image path
        });
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Textt texttStyle={styles.textHeader} message={'Edit Profile'}/>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/eric.jpg')}
                    style={styles.profileImage}
                />
                <TouchableOpacity onPress={openImagePicker}>
                    <Text style={styles.uploadButtonText}>Upload photo +</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}> 
                <Textt texttStyle={styles.label} message={'Name'}/>   
                <View style={styles.inputCont} >
                    <RNTextInput
                        style={styles.input}
                        defaultValue={userDetails.username}
                        onChangeText={(text) => setUserDetails({ ...userDetails, username: text })}
                        placeholder={userDetails.name}
                        placeholderTextColor={'#000'}
                        required
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Textt texttStyle={styles.label} message={'Email ID'}/>
                <View style={styles.inputCont}>
                    <RNTextInput
                        style={styles.input}
                        defaultValue={userDetails.useremail}
                        onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                        placeholder={userDetails.email}
                        placeholderTextColor={'#000'}
                        required
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Textt texttStyle={styles.label} message={'Phone'}/>
                <View style={styles.inputCont}>
                    <RNTextInput
                        style={styles.input}
                        defaultValue={userDetails.userphone}
                        onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                        placeholder={userDetails.phone}
                        placeholderTextColor={'#000'}
                        required
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Textt texttStyle={styles.label} message={'Address'}/>
                <View style={styles.inputCont}>
                    <RNTextInput
                        style={styles.input}
                        value={userDetails.useraddress}
                        onChangeText={(text) => setUserDetails({ ...userDetails, username: text })}
                        placeholder={userDetails.address}
                        placeholderTextColor={'#000'}
                        required
                    />
                </View> 
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title={'Save'}
                    buttonStyle={styles.saveButton}
                    onPress={() =>  navigation.navigate('Profile')}
                />
            </View>
        </View>
    );
};