import React from 'react';
import {
    View, 
    Text, 
    ActivityIndicator,
    FlatList,
} from 'react-native';

import styles from './style';
import { fetchMovies } from '../../utils/weatherUtils/api';

class CountEvenNumbers extends React.Component {

    shouldComponentUpdate(nextProps){
        return !(nextProps.count % 2);
    }   

    render() {
        return(
            <View>
                <Text style={styles.count}>{this.props.count}</Text>
            </View>
        )
    }
};

export default class Rough extends React.Component {

    constructor(){
        super()
        this.state = {
            loading: false,
            error: false,
            count: 0,
            data: [],
        }
    }

    componentDidMount() {
        setInterval(this.inc, 1000);
        
        this.setState({ loading: true }, async () => {
            try {
                const movie = await fetchMovies();


                this.setState({
                    loading: false,
                    error: false,
                    data: movie,
                })
            }   catch (e) {
                this.setState({
                    loading: false,
                    error: true,
                })
            }
        })
    }

    inc = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
        }))
    };

    
    
 
    render() {
        const { data, loading, error } = this.state;
        return(
            <View style={styles.container}>
                    <ActivityIndicator animating={loading} size="large" color="#000" />
                    { !loading && (
                        <View>
                            {error && (
                                <Text style={[styles.smallText, styles.text]}>
                                    {'Could not load movies, please debug your code asap'}
                                </Text>
                            )}

                            {!error && (
                                <View>
                                    <CountEvenNumbers count={this.state.count}/>
                                    <Text style={styles.smallText}>{'Movies'}</Text>

                                    <FlatList 
                                        data={data}
                                        keyExtractor={({id}) => id}
                                        renderItem={({item}) => (
                                            <Text style={[styles.smallText, styles.text]}>{item.title}, {item.releaseYear}</Text>
                                        )} 
                                    /> 
                                </View>
                            )}
                        </View>     
                    )}            
            </View>
        )
    };
}
