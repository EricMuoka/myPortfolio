import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import {Button, Textt, TextInput} from '../../components/index';
import Strings from '../../services/localization';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterPress = (text) => {
    navigation.navigate('Signup', {name: 'Signup'})
  }
 
  const login = () => {
    navigation.navigate('Home', {name: 'Home'})
  }

  const handleForgotPassword = () => {
    navigation.navigate('Passwordrecovery', {name: 'Passwordrecovery'})
  }

  const handleGoogleLogin = () => {
    // Implement Google login functionality here
  };
  
  const handleFacebookLogin = () => {
  // Implement Facebook login functionality here
  };
  

  return (
    <LinearGradient 
      colors={['#000033', '#000080']} // Start from very dark blue (#000033) to dark blue (#000080)
      style={styles.container}
    >
      <StatusBar backgroundColor="#568746" barStyle="light-content" />
      <View style={styles.viewi}>
        <Textt texttStyle={styles.textHeader} message={Strings.login} />
         <Textt texttStyle={styles.textHeaderSmall} message={Strings.login} />
      </View>
      <View style={styles.viewii}>
        <TextInput
          style={styles.inputField}
          label="Email"
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          required
        />
        <TextInput
          style={styles.inputField}
          label="Password"
          defaultValue={password}
          placeholder="Enter your password"
          required
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.forgotPasswordLink} onPress={handleForgotPassword}>
          <Textt texttStyle={styles.forgotPasswordText} message={'Forgot Password?'}/>
        </TouchableOpacity>
        <Button 
          buttonStyle={styles.button} 
          title={Strings.sign_in}
          onPress={login}
        />
        <View style={styles.textContainer}>
          <View style={styles.greyLine} />
          <Textt message={'Or Login with'}/>
          <View style={styles.greyLine} />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.iconLinki} onPress={handleGoogleLogin}>
            <Icon name="google" size={20} color="#fff" style={styles.icon} />
            <Textt texttStyle={styles.buttonText} message={'Google'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconLinkii} onPress={handleFacebookLogin}>
            <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
            <Textt texttStyle={styles.buttonText} message={'Facebook'} />
          </TouchableOpacity>
        </View>
        <View style={styles.reg}>
          <Textt message={'Don"t have an account?'}/>
          <TouchableOpacity onPress={handleRegisterPress}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
        {/**<Textt>
          Don't have an account?{' '}
          <TouchableOpacity onPress={() => console.log('Register clicked')}>
            <Textt style={{ color: 'blue' }}>Register</Textt>
          </TouchableOpacity>
        </Textt>**/}
      </View>
    </LinearGradient>
  );
}