import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import CitiesComponent from '../../reusableComponent/CitiesComponent';
import { Style } from '../Tracking/Style'; // Import your styles from Style.js
import { useNavigation } from '@react-navigation/native';

const Tracking = () => {
    const navigation = useNavigation();
  const citiesData = [
    { id: '1', name: 'RYK', imageSource: require('../../Assets/Images/CitiesPics/RahimYarKhan.jpg') },
    { id: '2', name: 'KhanPur', imageSource: require('../../Assets/Images/CitiesPics/Khanpur.jpg') },
    { id: '3', name: 'Sadiqbad', imageSource: require('../../Assets/Images/CitiesPics/Sadiqabad.jpg') },
    { id: '4', name: 'LiaqatPur', imageSource: require('../../Assets/Images/CitiesPics/LiaqatPur.jpg') },
    // Add more cities data as needed
  ];

  return (
    <View style={Style.container}>
      {/* Header */}
      <View style={Style.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home4Students')}>
        <Image source={require('../../Assets/Icons/Back.png')} style={Style.Back}/>
        </TouchableOpacity>
        <View style={{width:'30%'}}/>
        <Text style={Style.headerText}>Tracking</Text>
      </View>

      {/* City List */}
      <FlatList
        data={citiesData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={Style.cityList}
        renderItem={({ item }) => {
            return(
               <View style={{marginTop:20}}> 
          <TouchableOpacity style={Style.cityContainer}>
            <CitiesComponent source={item.imageSource} title={item.name} />
          </TouchableOpacity>
        </View>
        )}}
      />
    </View>
  );
};

export default Tracking;
