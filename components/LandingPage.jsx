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
  function navigateToEventsList() {
    navigation.navigate('EventsList');
  }

  return (
    <View style={styles.LandingPageButtons}>
      <Button title={"Enter event name"} onPress={handleButtonClick} />
      <TextInput
        placeholder="enter text here"
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
      />
      <Button title={"See events near you"} buttonStyle={{ marginTop: 50 }} onPress={navigateToEventsList}/>
    </View>
  );
};

export default LandingPage;
