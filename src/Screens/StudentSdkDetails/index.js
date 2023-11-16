import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity,ActivityIndicator } from 'react-native';
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

const StudentSdkDetails = ({ route }) => {
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


 

  const getLocationFromFirebase = () => {
    // Retrieve data from Firebase based on busNumber
    database()
      .ref(`busLocations/Sdk/${item.busNumber}`)
      .once('value')
      .then(snapshot => {
        const locationData = snapshot.val();
        if (locationData) {
          console.log('Location data retrieved:', locationData);
setLat(locationData?.latitude)
setLong(locationData?.longitude)
          // Do something with the retrieved location data
        } else {
          console.log('No location data found for busNumber:', item.busNumber);
        }
      })
      .catch(error => {
        console.log('Error retrieving data from Firebase:', error);
      });
  };

  useEffect(()=>(
    getLocationFromFirebase()
  ))
  return (
    <View style={styles.container}>
      <Text>{item.busNumber}</Text>
     {
      lat && long ?(
        <MapView showsUserLocation style={styles.map} region={{ latitude: lat, longitude: long, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
        <Marker coordinate={{ latitude: lat, longitude: long }} title="You are here" />
      </MapView>
      ):(
        <ActivityIndicator color={'red'}/>
      )
     }
   
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

export default StudentSdkDetails;

