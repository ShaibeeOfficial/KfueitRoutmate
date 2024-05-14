import { View, Image, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../../Theme/Color'
import Fonts from '../../Theme/Fonts'
import { useNavigation } from '@react-navigation/native'
import Pinchable from 'react-native-pinchable';

const SadiqabadTime = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
          <Image source={require('../../Assets/Icons/Back.png')} style={styles.backButton} />
        </TouchableOpacity>
        <View style={{ width: '30%' }} />
        <Text style={styles.headerText}>SDQTimeTable</Text>
      </View>
      <View>
      <Pinchable>
        <Image source={require('../../Assets/Images/TIme-Table-Pics/RYK.jpeg')} style={{ alignSelf:'center',height: '80%', width: '80%', resizeMode: 'contain' }} />
      </Pinchable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: color.Primary,
    // marginBottom:10,
  },
  backButton: {
    width: 35,
    height: 35,
  },
  headerText: {
    fontSize: 20,
    color: color.White,
  },
});

export default SadiqabadTime