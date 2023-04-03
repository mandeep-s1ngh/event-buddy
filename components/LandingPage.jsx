import { Button } from "@rneui/themed";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles.js";

const LandingPage = (props) => {
  const { eventName, setEventName} = props;
  const [userInput, setUserInput] = useState("");

  const navigation = useNavigation();

  const searchEventByName = () => {
    setEventName(userInput);
    navigation.navigate("Events");
  };

  function navigateToLocation() {
    navigation.navigate("Location");
  }

  return (
    <View style={styles.LandingPage_View}>
      <TextInput
        style={styles.LandingPage_Input}
        placeholder="Enter event name, music genre etc...."
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
        // style={styles.Profile_Tag_TextInput}
      />
      <Button
        style={styles.LandingPage_Button}
        title={"Search for events"}
        onPress={searchEventByName}
      />
      <Button
        style={styles.LandingPage_Button}
        title={"...or see events near you"}
        buttonStyle={{ marginTop: 50 }}
        onPress={navigateToLocation}
      />
    </View>
  );
};

export default LandingPage;
