import React, {useState} from 'react';
import {View, TouchableOpacity, StatusBar,}  from 'react-native';
import Textt from '../../components/text';
import styles from './style';
import Button from '../../components/button/index';
import TextInput from '../../components/textInput';
import Strings from '../../services/localization';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterPress = (text) => {
    navigation.navigate('Signup', {name: 'Signup'})
  }

  const signup = () => {
    navigation.navigate('Login', {name: 'Login'}) 
  }
  
  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    navigation.navigate('Myprofile', {name: 'Myprofile'})
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
        <Textt texttStyle={styles.textHeader} message={Strings.register} />
        <Textt texttStyle={styles.textHeaderSmall} message={Strings.register} />
      </View>
      <View style={styles.viewii}>
        <TextInput
          style={styles.inputField}
          label="name"
          defaultValue={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
          required
        />  
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
        <Button 
          buttonStyle={styles.button} 
          title={Strings.sign_up} 
          onPress={signup}
        />
        <View style={styles.textContainer}>
          <View style={styles.greyLine} />
          <Textt texttStyle={styles.title} message={'Or Register with'}/>
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
        <View style={styles.log}>
          <Textt message={'Already have an account?'}/>
          <TouchableOpacity onPress={signup}>
            <Textt texttStyle={styles.logLink} message={'Login'} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Signup;