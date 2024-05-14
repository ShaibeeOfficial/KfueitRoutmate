import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Style from '../Update-Tracking-KPR/Style';

const UpdateTrackingKPR = ({ navigation }) => {
  const data = [
    { id: '4', busNumber: 'Bus No 1' },
    { id: '5', busNumber: 'Bus No 2' },
    { id: '6', busNumber: 'Bus No 3' },
    // Add more bus items as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={Style.busItem}
      onPress={() => {
        navigation.navigate('KPRDetails',{item})
        // Handle bus item press, you can navigate to another screen or perform an action
        console.log(`Bus ${item.busNumber} pressed`);
      }}
    >
      <Text style={Style.busText}>{item.busNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={Style.container}>
      {/* Header with Back Button */}
      <View style={Style.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ChooseCities')}>
          <Image source={require('../../Assets/Icons/Back.png')} style={Style.backButton} />
        </TouchableOpacity>
        <View style={{ width: '30%' }} />
        <Text style={Style.headerText}>KPR-Route</Text>
      </View>

      {/* Bus List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default UpdateTrackingKPR;
