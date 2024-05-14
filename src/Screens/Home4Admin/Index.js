// Home4Students.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Style } from '../Home4Admin/Style';

const Home4Admin = () => {
  const navigation = useNavigation();

  return (
    <View style={Style.Parent}>
      <View style={Style.header}>
      <View style={{width:'35%'}}/>
        <Text style={Style.headerText}>Home</Text>
      </View>
    <View style={Style.container}>
      <View style={Style.card}>
        <TouchableOpacity style={Style.cardContent} onPress={()=>navigation.navigate('AdminCities')}>
          <Image
            style={Style.cardImage}
            source={require('../../Assets/Images/Home4Students/Schedule1.jpg')}
          />
          <Text style={Style.cardText}>Update TimeTable</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default Home4Admin;
