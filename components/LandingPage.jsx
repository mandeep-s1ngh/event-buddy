import { Button } from "@rneui/themed";
import { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "../styles.js";

const LandingPage = (props) => {
  const { eventName, setEventName } = props;
  const [userInput, setUserInput] = useState("");

  const handleButtonClick = () => {
    setEventName(userInput);
  };

  return (
    <View style={styles.LandingPageButtons}>
      <Button title={"Enter event name"} onPress={handleButtonClick} />
      <TextInput
        placeholder="enter text here"
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
      />
      <Button title={"See events near you"} buttonStyle={{ marginTop: 50 }} onPress={() => {console.log('aye')}}/>
    </View>
  );
};

export default LandingPage;
