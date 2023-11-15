// styles.js
import { StyleSheet } from 'react-native';
import { color } from '../../Theme/Color';
import Fonts from '../../Theme/Fonts';

export const Style = StyleSheet.create({
  container: {
    backgroundColor: color.Primary,
    flex: 1,
  },
  header: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.White,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  formContainer: {
    height: '50%',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode:'contain',
    width: '100%',
    height: '100%',
  },
  input: {
    width: '90%',
    height: 40,
    borderRadius: 12,
    marginBottom: 10,
    paddingLeft: 20,
    backgroundColor: color.White,
    color: 'black',
    fontFamily:Fonts.GilroyRegular,
  },
  loginButton: {
    backgroundColor: color.Black,
    width: '90%',
    height: 40,
    marginTop:20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily:Fonts.GillroySemiBold,
    color: 'white',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'white',
  },
});
