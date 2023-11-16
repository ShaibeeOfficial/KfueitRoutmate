// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image,ToastAndroid } from 'react-native';
import { color } from '../../Theme/Color';
import { Style } from './Style';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message'; 

const Login = () => {
  const Navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the email is not null or undefined
    if (email && email.toLowerCase().endsWith('@kfueit.edu.pk')) {
      // If yes, navigate to 'Home4Students'
      Navigation.navigate('Home4Students');
    } else {
      // If no or email is null/undefined, show a toast message
  
      ToastAndroid.show('Only KFUEIT students can login here',ToastAndroid.SHORT)
    }
  };

  
    return (
      <View style={Style.container}>
        <View style={Style.header}>
          <Image source={require('../../Assets/Logo/Logo.png')} style={Style.logo} />
        </View>
        <View style={Style.formContainer}>
          <TextInput
            style={Style.input}
            placeholder="Email"
            placeholderTextColor='black'
            onChangeText={(text)=>setEmail(text)}
          />
          <TextInput
            style={Style.input}
            placeholder="Password"
            placeholderTextColor='black'
            secureTextEntry={true}
            onChangeText={this.handlePasswordChange}
          />
          <TouchableOpacity onPress={handleLogin} style={Style.loginButton} >
            <Text style={Style.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default Login;
