import { Button } from "@rneui/themed";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "../styles.js";

const LandingPage = (props) => {
  const { eventName, setEventName } = props;
  const [userInput, setUserInput] = useState("");

  const handleButtonClick = () => {
    setEventName(userInput);
  };
  const navigation = useNavigation();
   function navigateToLocation() {
     navigation.navigate('Location');
   }

  return (
    <View style={styles.LandingPageButtons}>
      <Button title={"Search for festival events"} onPress={handleButtonClick} />
      <TextInput
        placeholder="enter city, music genre, event's name "
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
      />
      <Button title={"or see events near you"} buttonStyle={{ marginTop: 50 }} onPress={navigateToLocation}/>
    </View>
  );
};

export default LandingPage;
