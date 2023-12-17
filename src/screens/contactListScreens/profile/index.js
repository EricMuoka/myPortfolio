import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import styles from './style';
//import { ContactThumbnail, DetailListItem } from '../../../components/index';
//import { fetchRandomContact } from '../../../utils';

export default class Profile extends React.Component {
    state = {
        contact: {},
    };

    async componentDidMount() {
        const contact = await fetchRandomContact();

        this.setState({
            contact,
        });
    }
    
    render() {
        const { avatar, name, email, phone, cell } = this.state.contact;
        
        return(
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <ContactThumbnail avatar={avatar} name={name} phone={phone} />
                </View>
                <View style={styles.detailsSection}>
                    <DetailListItem icon='mail' title='Email' subtitle={email} />
                    <DetailListItem icon='phone' title='Work' subtitle={phone} />
                    <DetailListItem icon='smartphone' title='Personal' subtitle={cell} />
                </View>
            </View>
        );
    }
};