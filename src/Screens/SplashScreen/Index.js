import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../Theme/Color';
import Fonts from '../../Theme/Fonts';

const SplashScreen = () => {
  const navigation = useNavigation();

  // Use useEffect to navigate to the login screen after a delay (e.g., 3 seconds)
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // 3000 milliseconds (3 seconds)
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../Assets/Logo/Logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 400, // Adjust the size as needed
    height: 400, // Adjust the size as needed
    resizeMode: 'contain',
  },
});

export default SplashScreen;
