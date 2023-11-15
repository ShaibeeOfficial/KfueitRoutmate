import { View,Image,Text } from 'react-native'
import React from 'react'
import { color } from '../../Theme/Color'
import Fonts from '../../Theme/Fonts'

const RYKTime = () => {
  return (
    <View style={{flex:1,backgroundColor:color.Black, alignItems:'center'}}>
      <Text style={{marginTop:20,color: color.White,marginBottom:20,fontFamily: Fonts.GillroySemiBold, fontSize: 20,}}>RYK-TimeTable</Text>
      <Image source={require('../../Assets/Images/TIme-Table-Pics/RYK.jpeg')} style={{height:'80%',width:'80%',resizeMode:'contain'}} />
    </View>
  )
}

export default RYKTime