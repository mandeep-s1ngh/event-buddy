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
        // placeholder text
        placeholder="enter text here"
        // reads the user input
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
      />
      <Button title={"See events near you"} buttonStyle={{ marginTop: 50 }} />
    </View>
  );
};

// function LandingPage() {
//   return (
//     <>
//       <View style={styles.LandingPageButtons}>
//         <Button title={"Enter event name"} />
//         <Button title={"See events near you"} buttonStyle={{ marginTop: 50 }} />
//       </View>
//     </>
//   );
// }

export default LandingPage;
