import { Button } from "@rneui/base";
import { Text, TextInput, View, TouchableHighlight } from "react-native";
import styles from "../styles";

import { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';

const LocationRequest = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  console.log(text)
  

  // ----------------------------------------------------------------------------
  const { userLocation, setUserLocation } = props;

  const navigation = useNavigation();

  function navigateToEventsList() {
    navigation.navigate('Events');
  }

  return (
    <View style={styles.Location_Request}>

      <Text style={styles.Location_TextInfo}>We use your location to find events near you.</Text>

      <View style={{paddingTop: 1, paddingBottom: 60} }>
        <TouchableHighlight  style={styles.Location_Buttons} onPress={navigateToEventsList}>
          <Text style={styles.Location_Buttons_Text}>Use my location 📍</Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.Location_TextInfo}>Alternatively, enter your location below:</Text>
      <TextInput value={userLocation} onChangeText={(userLocation) => {setUserLocation(userLocation);}} style={styles.Location_TextInput}
        placeholder="Venue, city, zip code"
      />

      <View style={{paddingTop: 10, paddingBottom: 10} }>
        <TouchableHighlight  style={styles.Location_Buttons} onPress={navigateToEventsList}>
          <Text style={styles.Location_Buttons_Text}>Submit</Text>
        </TouchableHighlight>
      </View>

    </View>
  );
};

export default LocationRequest;
