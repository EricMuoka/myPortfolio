import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const categories = [
  {name: 'Electronics'},
  {name: 'Clothing'},
  {name: 'Household items'},
  {name: 'food & drinks'},
  {name: 'services'},
];
const Categories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categories.map(item => (
          <TouchableOpacity key={item.name}>
            <View
              style={{
                //backgroundColor: '#568746',
                padding: 15,
                borderWidth: 0.5,
                borderRadius: 13,
                borderColor: 'gray',
                marginHorizontal: 5,
              }}>
              <Text style={{fontWeight: '500', fontSize: 15, color: 'gray'}}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Categories;
