import React, { useState, useEffect } from 'react';
import { View, Text, Image,StyleSheet, PermissionsAndroid, TouchableOpacity,ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { initializeApp } from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../Theme/Color';

const firebaseConfig = {
  apiKey: "AIzaSyA1WNC9uBFb8uCqgz8DgYfl3dwpozEg-7Q",
  projectId: "kfueitroutemate",
  storageBucket: "kfueitroutemate.appspot.com",
  appId: "1:834683075362:android:b338f4152c187f11dd037b",
};

initializeApp(firebaseConfig);

const StudentKPRDetails = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
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
      .ref(`busLocations/KPR/${item.busNumber}`)
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
      <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.navigate('KhanPurTracking')}>
      <Image source={require('../../Assets/Icons/Back.png')} style={styles.backButton} />
    </TouchableOpacity>
    <View style={{ width: '30%' }} />
    <Text style={styles.headerText}>{item.busNumber}</Text>
  </View>
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
    marginBottom:20
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

export default StudentKPRDetails;

