import { Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
  } from "react-native";
  import styles from "../styles";
  import { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import * as Location from "expo-location";
  import { getGeolocationFromAddress } from "../api/getGeolocationFromAddress";
  import { getAddressFromGeolocation } from "../api/getAddressFromGeolocation";

  const LocationRequest = (props) => {
  const { setUserLocation } = props;
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationInput, setLocationInput] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const latitude = location["coords"]["latitude"];
      const longitude = location["coords"]["longitude"];

      const address = await getAddressFromGeolocation(latitude, longitude);
      setUserLocation({
        geolocation: { latitude, longitude },
        address: address,
      });
    })();
  }, []);

  // ----------------------------------------------------------------------------
  const navigation = useNavigation();

  async function showEventsByLocationInput() {
    const geolocationFromLocationInput = await getGeolocationFromAddress(
      locationInput
    );
    setUserLocation({
      geolocation: geolocationFromLocationInput,
      address: locationInput,
    });
    navigation.navigate("Events");
  }

  function showEventsByLocationPermission() {
    navigation.navigate("Events");
  }

  const clearTextInput = () => {
    setLocationInput("");
  };

  return (
    <View style={styles.Location_Request}>
      <Text style={styles.Location_TextInfo}>
        We use your location to find events near you.
      </Text>

      <View style={{ paddingTop: 1, paddingBottom: 60 }}>
        <TouchableHighlight
          style={styles.Location_Buttons}
          onPress={showEventsByLocationPermission}
        >
          <Text style={styles.Location_Buttons_Text}>Use my location 📍</Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.Location_TextInfo}>
        Alternatively, enter your location below:
      </Text>

      <View>
        <TextInput
          value={locationInput}
          onChangeText={(locationInput) => {
            setLocationInput(locationInput);
          }}
          style={styles.Location_TextInput}
          placeholder="Venue, city, zip code"
        />
        {locationInput.length > 0 && (
          <TouchableOpacity
            style={styles.Location_CloseButton}
            onPress={clearTextInput}
          >
            <Icon name="close" size={20} />
          </TouchableOpacity>
        )}
      </View>

      <View style={{ paddingTop: 10, paddingBottom: 10 }}>
        <TouchableHighlight
          style={styles.Location_Buttons}
          onPress={showEventsByLocationInput}
        >
          <Text style={styles.Location_Buttons_Text}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LocationRequest;
