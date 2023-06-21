import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Categories from '../components/Categories';
import Menu from '../components/Menu';

const dimension = Dimensions.get('screen');

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <View>
          <Text style={{color: '#333333', fontSize: 25, fontWeight: '500'}}>
            Discover
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderWidth: 0.5,
              borderColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <Ionicons
              name="ios-notifications-outline"
              size={25}
              color="#333333"
            />
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              borderWidth: 0.5,
              borderColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <Ionicons name="options-outline" size={25} color="#333333" />
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <View style={{width: dimension.width * (75 / 100)}}>
          <TextInput
            placeholder="search..."
            style={{
              borderRadius: 17,
              fontSize: 20,
              backgroundColor: '#e1e5e6',
            }}
          />
        </View>
        <TouchableOpacity>
          <View
            style={{
              padding: 13,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 17,
              backgroundColor: '#568746',
            }}>
            <EvilIcons name="search" size={30} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Categories />
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
