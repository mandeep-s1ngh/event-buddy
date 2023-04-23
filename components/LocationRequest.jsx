import { Icon } from '@rneui/themed';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from '../utils/styles';
import { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { getGeolocationFromAddress } from '../api/getGeolocationFromAddress';
import { getAddressFromGeolocation } from '../api/getAddressFromGeolocation';
import { MenuShownContext } from '../context/MenuShownContext';

const LocationRequest = (props) => {
  const { setUserLocation } = props;
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationInput, setLocationInput] = useState('');
  const { menuShown, setMenuShown } = useContext(MenuShownContext);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const latitude = location['coords']['latitude'];
      const longitude = location['coords']['longitude'];

      const address = await getAddressFromGeolocation(latitude, longitude);
      setUserLocation({
        geolocation: { latitude, longitude },
        address: address,
      });
    })();
  }, []);

  const navigation = useNavigation();

  async function showEventsByLocationInput() {
    const geolocationFromLocationInput = await getGeolocationFromAddress(
      locationInput
    );
    setUserLocation({
      geolocation: geolocationFromLocationInput,
      address: locationInput,
    });
    navigation.navigate('Events', { screen: 'EventsList' });
  }

  function showEventsByLocationPermission() {
    navigation.navigate('Events', { screen: 'EventsList' });
  }

  const clearTextInput = () => {
    setLocationInput('');
  };

  return (
    <View style={styles.LocationRequest}>
      <Text style={styles.LocationRequest__Text}>
        We use your location to find events near you.
      </Text>

      <View style={{ paddingTop: 1, paddingBottom: 60 }}>
        <TouchableHighlight
          style={styles.LocationRequest__Button}
          onPress={showEventsByLocationPermission}
        >
          <Text style={styles.LocationRequest__ButtonText}>
            Use my location 📍
          </Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.LocationRequest__Text}>
        Alternatively, enter your location below:
      </Text>

      <View>
        <TextInput
          value={locationInput}
          onChangeText={(locationInput) => {
            setLocationInput(locationInput);
          }}
          style={styles.LocationRequest__TextInput}
          placeholder="Venue, city, zip code"
          onFocus={() => setMenuShown(false)}
        />
        {locationInput.length > 0 && (
          <TouchableOpacity
            style={styles.LocationRequest__closeInputButton}
            onPress={clearTextInput}
          >
            <Icon name="close" size={20} />
          </TouchableOpacity>
        )}
      </View>

      <View style={{ paddingTop: 10, paddingBottom: 10 }}>
        <TouchableHighlight
          style={styles.LocationRequest__Button}
          onPress={showEventsByLocationInput}
        >
          <Text style={styles.LocationRequest__ButtonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LocationRequest;
