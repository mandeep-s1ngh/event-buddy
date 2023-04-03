import { Button } from "@rneui/themed";
import { useState } from "react";
import { TextInput, View, TouchableHighlight, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles.js";

const LandingPage = (props) => {
  const { eventName, setEventName } = props;
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
     
     <View style={{paddingBottom: 30}}>
     <Image
        source={require('./Landing_Page_Concert.jpeg')}
        style={styles.LandingPage_Image}
      />
     </View>
     
     <Text style={styles.Location_TextInfo}>Welcome to Event Buddy! For all your festival needs, concert needs and everything in between. Let's start with a search for events to start finding buddies</Text>

     <Text style={styles.Location_TextInfo}>Search events by name:</Text>

      <TextInput value={userInput} onChangeText={(text) => setUserInput(text)} style={styles.LandingPage_TextInput}
        placeholder="Coachella, Leeds, Evolution ..."
      />
      

    <View style={{paddingTop: 10}}>
        <TouchableHighlight  style={styles.LandingPage_Buttons} onPress={searchEventByName} >
          <Text style={styles.Landing_Page_Buttons_Text}>Search for events</Text>
        </TouchableHighlight>
    </View>

    <View style={{paddingTop: 50}}>
        <TouchableHighlight  style={styles.LandingPage_Buttons} onPress={navigateToLocation} >
          <Text style={styles.Landing_Page_Buttons_Text}>...or see events near you</Text>
        </TouchableHighlight>
    </View>

    </View>
  );
};

export default LandingPage;

/*

<View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 20}}>
        <TouchableHighlight  style={styles.LandingPage_Buttons} onPress={searchEventByName} >
          <Text style={styles.Landing_Page_Buttons_Text}>Search for events</Text>
        </TouchableHighlight>
    </View>


*/
