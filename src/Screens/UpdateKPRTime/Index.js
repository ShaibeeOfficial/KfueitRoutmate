import React, { useState } from 'react';
import { View, Button, Text,Image, Alert,StyleSheet,TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import { color } from '../../Theme/Color';
import { useNavigation } from '@react-navigation/native';

const UpdateKPRTime = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      if (result.path) {
        setImageUri(result.path);
        console.log('result')
      } else {
        Alert.alert('Error', 'Invalid image selected.');
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const uploadImage = async () => {
    if (imageUri) {
      const imageName = `image_${Date.now()}.jpg`;
      const reference = storage().ref(`KPRTimeTable/${imageName}`);
      const imageRef = reference.child(imageName);

      try {
        const response = await fetch(imageUri);
        const blob = await response.blob();

        await imageRef.put(blob);

        const downloadUrl = await imageRef.getDownloadURL();
        Alert.alert('Success', 'Image uploaded successfully!');
        console.log('Download URL:', downloadUrl);
        setImageUri(null);
      } catch (error) {
        console.error('Error uploading image:', error);
        Alert.alert('Error', 'Failed to upload image.');
      }
    } else {
      Alert.alert('Error', 'Please select an image first.');
    }
  };

  return (
    <View>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('AdminCities')}>
          <Image source={require('../../Assets/Icons/Back.png')} style={styles.backButton} />
        </TouchableOpacity>
        <View style={{ width: '30%' }} />
        <Text style={styles.headerText}>KPRTimeTable</Text>
      </View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
      <Button title="Pick Image" onPress={pickImage} />
      <Button title="Upload Image" onPress={uploadImage} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default UpdateKPRTime;