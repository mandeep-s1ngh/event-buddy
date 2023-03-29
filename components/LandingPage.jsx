import { Button, Text } from "@rneui/themed";
import { View } from "react-native";
import styles from "../styles.js";

function LandingPage() {
  return (
    <>
      <View style={styles.LandingPageButtons}>
        <Button title={"Enter event name"} />
        <Button title={"See events near you"} buttonStyle={{ marginTop: 50 }} />
      </View>
    </>
  );
}

export default LandingPage;
