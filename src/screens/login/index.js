import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import {Button, Textt, TextInput, SearchInput} from '../../components/index';
import Strings from '../../services/localization';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleRegisterPress = () => {
    this.props.navigation.navigate('Signup')
  }

  handleFacebookLogin = () => {
    // Implement Facebook login functionality here
  };

  handleGoogleLogin = () => {
    // Implement Google login functionality here
  };

  _login = async () => {
    try {
      const success = await login(this.state.email, this.state.password);
      this.props.navigation.navigate('Home');
    } catch (error) {
      const errMessage = err.message;
      this.setState({ err: errMessage})
    }
  }

  handleUpdateEmail = async (userEmail) => {
    this.setState({
      email: userEmail,
    });
    console.log(userEmail);
  } 

  handleUpdatePassword = async (userPassword) => {
    this.setState({
      password: userPassword,
    });
    console.log(userPassword);
  }

  login = async (userEmail, userPassword) => {
    this.handleUpdateEmail(userEmail);
    this.handleUpdatePassword(userPassword);
    this.props.navigation.navigate('Home')
  }

  handleForgotPassword = () => {
    this.props.navigation.navigate('Passwordrecovery')
  }

  render() {
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
          <SearchInput
            style={styles.inputField}
            label="Email"
            onSubmit={this.handleUpdateEmail}
            placeholder="Enter your email"
            required
          />

          <SearchInput
            style={styles.inputField}
            label="Password"
            placeholder="Enter your password"
            required
            onSubmit={this.handleUpdatePassword}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.forgotPasswordLink} onPress={this.handleForgotPassword}>
            <Textt texttStyle={styles.forgotPasswordText} message={'Forgot Password?'}/>
          </TouchableOpacity>
          <Button 
            buttonStyle={styles.button} 
            title={Strings.sign_in}
            onPress={this.login}
          />
          <View style={styles.textContainer}>
            <View style={styles.greyLine} />
            <Textt message={'Or Login with'}/>
            <View style={styles.greyLine} />
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.iconLinki} onPress={this.handleGoogleLogin}>
              <Icon name="google" size={20} color="#fff" style={styles.icon} />
              <Textt texttStyle={styles.buttonText} message={'Google'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconLinkii} onPress={this.handleFacebookLogin}>
              <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
              <Textt texttStyle={styles.buttonText} message={'Facebook'} />
            </TouchableOpacity>
          </View>
          <View style={styles.reg}>
            <Textt message={'Don"t have an account?'}/>
            <TouchableOpacity onPress={this.handleRegisterPress}>
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
}