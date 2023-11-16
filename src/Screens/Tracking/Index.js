import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Style } from '../Schedule/Style'; // Import your styles from Style.js
import { useNavigation } from '@react-navigation/native';

const Schedule = () => {
  const navigation = useNavigation();
  const citiesData = [
    { id: '1', name: 'RYK', imageSource: require('../../Assets/Images/CitiesPics/RahimYarKhan.jpg') },
    { id: '2', name: 'KhanPur', imageSource: require('../../Assets/Images/CitiesPics/Khanpur.jpg') },
    { id: '3', name: 'Sadiqabad', imageSource: require('../../Assets/Images/CitiesPics/Sadiqabad.jpg') },
    { id: '4', name: 'ZahirPeer', imageSource: require('../../Assets/Images/CitiesPics/ZahirPeer.jpg') },
    // Add more cities data as needed
  ];

  const navigateToCity = (cityName) => {
    // Log city name to check if the touch event is captured correctly
    console.log('City Tapped:', cityName);

    // Define the screens for each city
    const cityScreens = {
      RYK: 'RYKTracking',
      KhanPur: 'KhanPurTracking',
      Sadiqabad: 'SadiqabadTracking',
      ZahirPeer: 'ZahirPeerTracking',
    };

    if (cityScreens[cityName]) {
      navigation.navigate(cityScreens[cityName]);
    }
  };

  return (
    <View style={Style.container}>
      {/* Header */}
      <View style={Style.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home4Students')}>
          <Image source={require('../../Assets/Icons/Back.png')} style={Style.Back} />
        </TouchableOpacity>
        <View style={{ width: '30%' }} />
        <Text style={Style.headerText}>Tracking</Text>
      </View>

      {/* City List */}
      <FlatList
        data={citiesData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={Style.cityList}
        renderItem={({ item }) => (
          <TouchableOpacity style={Style.cityContainer} onPress={() => navigateToCity(item.name)}>
            <Image source={item.imageSource} style={Style.cityImage} />
            <Text style={Style.cityText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Schedule;
