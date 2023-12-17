import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import styles from "./style";
import Avatar from "../Avatar";
import getAvatarColor from '../../../utils/imageFeedUtils/getAvatarColor';
import getInitials from '../../../utils/imageFeedUtils/getInitials';


export default function AuthorRow({ fullName, linkText, onPressLinkText}) {

    return (
        <View style={styles.container}>
            <Avatar 
                size={35}
                initials={getInitials(fullName)}  
                backgroundColor={getAvatarColor(fullName)} 
            />
            <Text style={styles.text} numberOfLines={1}>{fullName}</Text>
            {!! linkText && (
                <TouchableOpacity 
                    style={styles.buton} 
                    onPress={onPressLinkText}
                >
                    <Text style={styles.butonText} numberOfLines={1}>{linkText}</Text>
                </TouchableOpacity>
            )}
        </View> 
    );
}