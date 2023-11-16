import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Style from '../Update-Tracking-RYK/Style';

const UpdateTrackingRYK = ({ navigation }) => {
  const data = [
    { id: '1', busNumber: 'Bus No 1' },
    { id: '2', busNumber: 'Bus No 2' },
    { id: '3', busNumber: 'Bus No 3' },
    // Add more bus items as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={Style.busItem}
      onPress={() => {
        navigation.navigate('Details',{item})
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
        <Text style={Style.headerText}>RYK-Route</Text>
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

export default UpdateTrackingRYK;
