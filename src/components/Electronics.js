import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const electronics = [
  {
    imgSrc: require('../../public/ram.jpeg'),
    itemName: 'Ram 16GB',
    cost: '$75.00',
    description:
      "Upgrade your computer's memory with this high-speed 16GB RAM module.",
  },
  {
    imgSrc: require('../../public/ram.jpeg'),
    itemName: 'Mechanical Keyboard',
    cost: '$120.00',
    description:
      'Experience tactile typing with this premium mechanical keyboard.',
  },
  {
    imgSrc: require('../../public/ram.jpeg'),
    itemName: 'Wireless Headphones',
    cost: '$99.00',
    description:
      'Enjoy wireless freedom and high-quality sound with these headphones.',
  },
  {
    imgSrc: require('../../public/ram.jpeg'),
    itemName: 'Laptop 15"',
    cost: '$900.00',
    description:
      'Powerful 15-inch laptop for work and entertainment on the go.',
  },
  {
    imgSrc: require('../../public/ram.jpeg'),
    itemName: '27" Monitor',
    cost: '$250.00',
    description:
      'Immerse yourself in stunning visuals with this 27-inch monitor.',
  },
  {
    imgSrc: require('../../public/ram.jpeg'),
    itemName: 'Gaming Mouse',
    cost: '$50.00',
    description:
      'Enhance your gaming experience with this responsive gaming mouse.',
  },
];

const dimension = Dimensions.get('screen');
const Electronics = ({navigation}) => {
  //const electronics = [1, 2, 3, 4, 5, 6];

  const navigateToDetails = item => {
    navigation.navigate('ItemDetails', {data: item});
  };
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
            <TouchableOpacity
              key={item.itemName}
              onPress={() => navigateToDetails(item)}>
              <View
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
                    source={item.imgSrc}
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
                      style={{
                        fontWeight: '500',
                        fontSize: 15,
                        color: '#333333',
                      }}>
                      {item.itemName}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#333333',
                      }}>
                      {item.cost}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
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
