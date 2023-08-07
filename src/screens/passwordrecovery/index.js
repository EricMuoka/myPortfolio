import React, {useState} from 'react';
import {View}  from 'react-native';
import Strings from '../../services/localization';
import Textt from '../../components/text';
import styles from './style';
import Button from '../../components/button/index';
import TextInput from '../../components/textInput';
import LinearGradient from 'react-native-linear-gradient';

export default function Passwordrecovery () {
  const [email, setEmail] = useState('');
  return (
    <View
      colors={['#000033', '#000080']} // Start from very dark blue (#000033) to dark blue (#000080)
      style={styles.container}
    >
      <View style={styles.viewi}>
        <Textt texttStyle={styles.textHeader} message={Strings.forgot_password} />
        <Textt texttStyle={styles.textHeaderSmall} message={'Enter your email account to reset password'} />
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
        <Button 
          buttonStyle={styles.button} 
          title="Continue" 
          onPress={() => {console.log('A reset link has been sent to your email address')}}
        />
      </View>
    </View>
  );
};