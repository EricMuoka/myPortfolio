import React from 'react';
import { ActivityIndicator, View , Image, StyleSheet } from 'react-native';

import styles from './style';
import AuthorRow from '../authorRow';

export default class Card extends React.Component {

    static defaultProps = {
        linkText: '',
        onPressLinkText: () => {},
    };

    state = {
        loading: true,
    };

    handleLoad = () => {
        this.setState({ loading: false })
    }

    shouldComponentUpdate(nextProps) {
        return this.props.linkText !== nextProps.linkText
    }

    render() {
        const { fullName, image, linkText, onPressLinkText } = this.props;
        const {loading} = this.state;

        return(
            <View style={styles.container}>
                <AuthorRow 
                    fullName={fullName} 
                    linkText={linkText} 
                    onPressLinkText={onPressLinkText} 
                />
                <View style={styles.image}>
                    {loading && (
                        <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'}/>
                    )}
                    <Image 
                        style={StyleSheet.absoluteFill}
                        source={image}
                        onLoad={this.handleLoad}
                    />
                </View>
            </View>
        )
    }
}