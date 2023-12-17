import React from 'react';
import { 
    StatusBar, 
    Text, 
    ImageBackground,
    View,
    ActivityIndicator,
} from 'react-native';

import styles from './style';
import { SearchInput } from '../../components';
import getImageForWeather from '../../utils/weatherUtils/getImageForWeather.js.js';
import { fetchLocationId, fetchWeather } from '../../utils/weatherUtils/api';


export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            loading: false,
            error: false,
            temperature: 0,
            weather: '',
        };
    };

    componentDidMount() {
        this.handleUpdateLocation('Enugu');
    }

    handleUpdateLocation = async city => {
        this.setState({
            location: city,
        });

        if (!city) return

        this.setState({ loading: true }, async () => {
            try {
                const locationId = await fetchLocationId(city);
                const { location, weather, temperature } = await fetchWeather(locationId,);

                this.setState({
                    loading: false,
                    error: false,
                    location,
                    weather,
                    temperature,
                })
            }   catch (e) {
                this.setState({
                    loading: false,
                    error: true,
                })
            }
        })
    }

    render(){
        const { location, loading, error, weather, temperature } = this.state;

        return(
            <View style={styles.container} behavior='padding'>
                <StatusBar barStyle='light-content' />
                <ImageBackground
                  source={getImageForWeather(weather)}
                  style={styles.imageContainer}
                  imageStyle={styles.image}
                >
                    <View style={styles.detailsContainer}>
                        <ActivityIndicator animating={loading} size="large" color="#fff" />
                        { !loading && (
                            <View>
                                {error && (
                                    <Text style={[styles.smallText, styles.text]}>
                                        {'could not load weather, please try a different city'}
                                    </Text>
                                )}

                                {!error && (
                                    <View>
                                        <Text style={[styles.largeText, styles.text]}>{location}</Text>
                                        <Text style={[styles.smallText, styles.text]}>{weather}</Text>
                                        <Text style={[styles.largeText, styles.text]}>{temperature}</Text>
                                    </View>
                                )}

                                <View style={styles.inputContainer}>
                                    <SearchInput 
                                        style={styles.input}
                                        placeholder={'Search any city '}
                                        placeholderTextColor={'#fff'}
                                        onSubmit={this.handleUpdateLocation}
                                    />
                                </View>
                            </View>
                        )}
                    </View>
                </ImageBackground>
            </View>
        )
    }
}