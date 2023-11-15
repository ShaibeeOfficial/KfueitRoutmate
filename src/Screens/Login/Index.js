// LoginScreen.js
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { color } from '../../Theme/Color';
import { Style } from './Style';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const Navigation = useNavigation();
  
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
            onChangeText={this.handleUsernameChange}
          />
          <TextInput
            style={Style.input}
            placeholder="Password"
            placeholderTextColor='black'
            secureTextEntry={true}
            onChangeText={this.handlePasswordChange}
          />
          <TouchableOpacity style={Style.loginButton} onPress={() => Navigation.navigate('Home4Students')}>
            <Text style={Style.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default Login;
