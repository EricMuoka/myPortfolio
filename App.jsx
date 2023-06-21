import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {Navigator, Screen} = createNativeStackNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen
            options={{
              headerShown: false,
              title: '',
              statusBarColor: 'black',
            }}
            name="home"
            component={Home}
          />
        </Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 15, backgroundColor: '#FFFFFF'},
});

export default App;
