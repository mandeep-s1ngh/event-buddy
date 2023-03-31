import { Button } from "@rneui/base";
import { Text, TextInput, View, TouchableHighlight } from "react-native";
import styles from "../styles";

import { useNavigation } from '@react-navigation/native';

const LocationRequest = (props) => {
  const { userLocation, setUserLocation } = props;

  const navigation = useNavigation();

  function navigateToEventsList() {
    navigation.navigate('EventsList');
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
