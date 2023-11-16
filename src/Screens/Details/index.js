import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { initializeApp } from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA1WNC9uBFb8uCqgz8DgYfl3dwpozEg-7Q",
  projectId: "kfueitroutemate",
  storageBucket: "kfueitroutemate.appspot.com",
  appId: "1:834683075362:android:b338f4152c187f11dd037b",
};

initializeApp(firebaseConfig);

const MapScreen = ({ route }) => {
  const { item } = route.params;
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    // Request location permission
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Get current location
          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              setRegion({
                ...region,
                latitude,
                longitude,
              });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }

    // Call the function to request location permission
    requestLocationPermission();

    // Cleanup function to clear the watch when the component is unmounted
    return () => Geolocation.clearWatch();
  }, []); // Empty dependency array to run this effect only once when the component mounts

  useEffect(() => {
    console.log(region, '------');
    setLat(region.latitude);
    setLong(region.longitude);
  }, [region]);

  const saveLocation = () => {
    // Save data to Firebase
    database()
    .ref(`busLocations/Ryk/${item.busNumber}`)
      .set({
        latitude: lat,
        longitude: long,
      })
      .then(() => {
        console.log('Data saved to Firebase');
      })
      .catch(error => {
        console.log('Error saving data to Firebase: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>{item.busNumber}</Text>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="You are here" />
      </MapView>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          height: 50,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10%',
        }}
        onPress={saveLocation}
      >
        <Text>Save current Location</Text>
      </TouchableOpacity>
      <Text>{lat}</Text>
      <Text>{long}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: 500,
    marginTop: 40,
  },
});

export default MapScreen;
