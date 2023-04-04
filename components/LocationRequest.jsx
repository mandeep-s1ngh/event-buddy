import { Button } from "@rneui/base";
import { Text, TextInput, View, TouchableHighlight } from "react-native";
import styles from "../styles";
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { getGeolocationFromAddress } from "../api/getGeolocationFromAddress";
import {getAddressFromGeolocation} from '../api/getAddressFromGeolocation'

const LocationRequest = (props) => {
  const { setUserLocation } = props;
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationInput, setLocationInput] = useState('');

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') {
      //   setErrorMsg('Permission to access location was denied');
      //   return;
      // }

      let location = await Location.getCurrentPositionAsync({});
      //console.log(location);

      const latitude = location["coords"]["latitude"]
      const longitude = location["coords"]["longitude"]
        console.log('before async: ', {'geolocation': {latitude, longitude}, 'address': address} );
      const address = await getAddressFromGeolocation(latitude, longitude)
        console.log('after async: ', {'geolocation': {latitude, longitude}, 'address': address} );
      setUserLocation({'geolocation': {latitude, longitude}, 'address': address});
    })();
  }, [
   locationInput
  ]);

  // ----------------------------------------------------------------------------
  const navigation = useNavigation();

  async function navigateToEventsList()  {
    let geolocationFromLocationInput = await getGeolocationFromAddress(locationInput)
    setUserLocation({geolocation: geolocationFromLocationInput, address: locationInput})
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
      <TextInput value={locationInput} onChangeText={(locationInput) => {setLocationInput(locationInput);}} style={styles.Location_TextInput}
        placeholder="Venue, city, zip code"
      />

      <View style={{paddingTop: 10, paddingBottom: 10} }>
        <TouchableHighlight  style={styles.Location_Buttons} onPress={navigateToEventsList} >
          <Text style={styles.Location_Buttons_Text}>Submit</Text>
        </TouchableHighlight>
      </View>

    </View>
  );
};

export default LocationRequest;
