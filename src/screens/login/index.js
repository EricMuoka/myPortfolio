import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Button from '../../components/button/index';
import Textt from '../../components/text/index';
import styles from './style';
import TextInput from '../../components/textInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

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
      <Textt style={styles.textHeader} message={'Sign in to your Account'} />
      <Textt style={styles.textHeaderSmall} message={'Sign in to your Account'} />
      <View style={styles.viewii}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Enter your email"
          required
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
        <TouchableOpacity style={styles.item} onPress={handleForgotPassword}>
          <Textt style={styles.forgotPasswordLink} message={'Forgot Password?'}/>
        </TouchableOpacity>
        <Button 
          buttonStyle={styles.button} 
          title="Login" 
          onPress={login}
        />
        <Textt style={styles.title} message={'Or login with'}/>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.iconLinki} onPress={handleGoogleLogin}>
            <Icon name="google" size={20} color="#fff" style={styles.icon} />
            <Textt style={styles.buttonText} message={'Google'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconLinkii} onPress={handleFacebookLogin}>
            <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
            <Textt style={styles.buttonText} message={'Facebook'} />
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