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
    marginBottom:40,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontFamily:Fonts.GillroySemiBold,
  },
  Back:{
    height:25,
    width:25,
  },
  cityContainer: {
    margin: 20,
    marginLeft:30,
    marginBottom:50,
    height: 200, 
    width: '35%', 
    justifyContent: "center", 
    borderRadius: 10,
    alignItems:'center',
  },
  cityImage:{
    height: 200, 
    width: 150, 
    borderRadius:20,
    marginBottom:10,
  },
  cityText:{
    marginLeft: "5%", 
    color: color.Black, 
    fontFamily: Fonts.GillroySemiBold, 
    fontSize: 18,
  },
});
