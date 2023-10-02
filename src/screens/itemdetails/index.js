import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { AddToCart } from '../../redux/cart/actions';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemDetails = ({navigation, route, addToCart}) => {

  const {data} = route.params;

  const handleAddToCart = () => {
    console.log(data);
    addToCart(data); // Dispatch the AddToCart action with the selected data
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{padding: 10, backgroundColor: 'white', borderRadius: 100}}
            onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 10, backgroundColor: 'white', borderRadius: 100}}>
            <Ionicons name="heart" size={25} color="red" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //backgroundColor: 'red',
            marginVertical: 30,
          }}>
          <Image source={require('../../../public/bed.jpeg')} style={{}} />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
          {data.itemName}
        </Text>
        <Text style={{fontSize: 17, color: 'black', paddingVertical: 10}}>
          {data.description}
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          borderTopWidth: 2,
          borderTopColor: '#dcdcdc',
        }}>
        <View style={styles.buttons}>
          <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
            {data.cost}
          </Text>
          <TouchableOpacity onPress={handleAddToCart}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#568746',
                paddingVertical: 20,
                paddingHorizontal: 50,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                Add to Cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(AddToCart(item)),
});

export default connect(null, mapDispatchToProps)(ItemDetails);
