// styles.js
import { StyleSheet } from 'react-native';
import { color } from '../../Theme/Color';
import Fonts from '../../Theme/Fonts';

export const Style = StyleSheet.create({
  container: {

  },
  header: {
    backgroundColor: color.Primary, // Customize the header background color
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontFamily:Fonts.GillroySemiBold,
    alignSelf:'center',
    justifyContent:'center',
  },
  Back:{
    height:25,
    width:25,
  },
  cityContainer: {
    margin: 20,
  },
});
