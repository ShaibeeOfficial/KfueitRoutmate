// styles.js
import { StyleSheet } from 'react-native';
import { color } from '../../Theme/Color';
import Fonts from '../../Theme/Fonts';

export const Style = StyleSheet.create({
  Parent:{
    backgroundColor: 'whitesmoke',
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    alignItems:'center',
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
  card: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: color.Grey,
    width: '60%',
    height: '40%',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '10%',
  },
  cardContent: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
  },
  cardImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
  },
  cardText: {
    color: color.Black,
    fontFamily: Fonts.GillroySemiBold,
    fontSize: 30,
  },
});
