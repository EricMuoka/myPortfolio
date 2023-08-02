import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const dimension = Dimensions.get('screen');
const Electronics = () => {
  const electronics = [1, 2, 3, 4, 5, 6];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            //backgroundColor: 'lightgreen',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {electronics.map(item => (
            <View
              key={item}
              style={{
                backgroundColor: '#e9f1f5',
                borderRadius: 25,
                marginHorizontal: 5,
                marginVertical: 10,
              }}>
              <View
                style={{
                  width: dimension.width / 2.5,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/ram.jpeg')}
                  style={{
                    //width: 'auto',
                    maxWidth: 100,
                    maxHeight: 100,
                    overflow: 'hidden',
                    resizeMode: 'cover',
                  }}
                />
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontWeight: '500', fontSize: 15, color: '#333333'}}>
                    Ram 16GB
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#333333',
                    }}>
                    $75
                  </Text>
                </View>
              </View>
            </View>
          ))}
          {/** */}

          {/** */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#FFFFFF'},
});

export default Electronics;
