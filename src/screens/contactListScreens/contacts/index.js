import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import styles from './style';
//import ContactListItem from '../../../components/index';
//import { fetchContacts } from '../../../utils';

const keyExtractor = ({ phone }) => phone;

export default class Contacts extends React.Component {
    state = {
        contacts: [],
        loadimg: true,
        error: false,
    };

    async componentDidMount() {
        try {
            const contacts = await fetchContacts();

            this.setState({
                contacts,
                loadimg: false,
                error: false,
            });
        } catch (error) {
            this.setState({
                loadimg: false,
                error: true,
            });
        }
    }

    renderContact = ({ item }) => {
        const { name, avatar, phone } = item;
        return(
            <View style={styles.toolBar}>
                <Text style={styles.smallText}>ContactListItem</Text>
                <ContactListItem name={name} avatar={avatar} phone={phone}/>
            </View>
        );
    }
    
    render() {
        const { loadimg, contacts, error } = this.state;

        const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
        return(
            <View style={styles.container}>
                {loadimg && <ActivityIndicator size={'large'}/>}
                {error && <Text style={styles.smallText}>Error... Failed to fetch contacts</Text>}
                {!loadimg &&
                    !error && (
                    <FlatList 
                        data={contactsSorted}
                        keyExtractor={keyExtractor}
                        renderItem={this.renderContact}
                    />
                )}
            </View>
        );
    }
};