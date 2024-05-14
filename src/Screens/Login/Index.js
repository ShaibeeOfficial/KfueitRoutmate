import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ToastAndroid, Alert } from 'react-native';
import { Style } from './Style';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging'; // Import the messaging module
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const Navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check for FCM token on initial load (optional)
    const checkInitialFCMToken = async () => {
      const initialFCMToken = await messaging().getToken();
      console.log('Initial FCM Token:', initialFCMToken);
    };

    checkInitialFCMToken();
  }, []);

  const handleLogin = async () => {
    try {
      // Authenticate user with Firebase
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      // Check if the entered credentials are for the admin
      const isAdminEmail = email.toLowerCase() === 'admin@yahoo.com';
      console.log('isAdminEmail:', isAdminEmail);

      if (isAdminEmail) {
        Alert.alert('Successfully Login as Admin');
        ToastAndroid.show('Welcome Admin to the KFUEIT RouteMate', ToastAndroid.SHORT);
        Navigation.navigate('Home4Admin');
      } else {
        // Check the email domain
        const isStudentEmail = email.toLowerCase().endsWith('@kfueit.edu.pk');
        console.log('isStudentEmail:', isStudentEmail);

        // If authentication is successful and email is a student email, navigate to 'Home4Students'
        if (isStudentEmail) {
          Alert.alert('Successfully Login');
          ToastAndroid.show('Welcome to the KFUEIT RouteMate', ToastAndroid.SHORT);
          Navigation.navigate('Home4Students');
        } else {
          // Otherwise, navigate to 'Home4Driver'
          Alert.alert('Successfully Login');
          ToastAndroid.show('Welcome to the KFUEIT RouteMate', ToastAndroid.SHORT);
          Navigation.navigate('Home4Driver');
        }

        // Get FCM token and store it in Firestore
        const fcmToken = await messaging().getToken();
        const user = auth().currentUser;

        if (user) {
          await firestore().collection('users').doc(user.uid).set({
            email: user.email,
            fcmToken: fcmToken,
            // Add other user data as needed
          });
        }
      }
    } catch (error) {
      // Handle authentication errors
      Alert.alert('Invalid Credentials');
      console.error('Authentication failed', error);
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
          placeholderTextColor="black"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={Style.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={handleLogin} style={Style.loginButton}>
          <Text style={Style.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
