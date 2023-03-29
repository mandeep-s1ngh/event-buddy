import { Button } from "@rneui/base";
import { Text, TextInput, View } from "react-native";
import styles from "../styles";

const LocationRequest = (props) => {
  const { userLocation, setUserLocation } = props;

  return (
    <View style={styles.Location_Request}>
      <Text style={styles.Location_TextInfo}>
        We use your location to find events near you. Alternatively, enter your
        location below:
      </Text>
      <TextInput
        value={userLocation}
        onChangeText={(userLocation) => {
          setUserLocation(userLocation);
        }}
        style={styles.Location_TextInput}
        placeholder="Venue, city, zip code"
      />

      <Button style={styles.Location_SubmitButton}>Submit</Button>

      <Text>You entered this text: {userLocation}</Text>
    </View>
  );
};

export default LocationRequest;
