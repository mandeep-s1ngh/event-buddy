import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableHighlight, View, Image } from "react-native";
import styles from "../styles";

function NavBar({ menuShown, setMenuShown }) {
  const navigation = useNavigation();
  function toggleMenu() {
    setMenuShown(!menuShown);
  }

  function closeMenu() {
    setMenuShown(false);
  }

  function navigateToHome() {
    navigation.navigate("Home");
  }

  function navigateToProfile() {
    navigation.navigate("Profile");
  }

  return (
    <View style={styles.NavBar_View}>
      <Image
        source={require("../images/two_white_icons.png")}
        style={{ width: 30, height: 30, marginLeft: "20%" }}
      />
      <TouchableHighlight onPress={navigateToHome}>
        <Text style={styles.NavBar_Text}>Event Buddy</Text>
      </TouchableHighlight>

      <View style={styles.NavBar_RightButtons}>
        <TouchableHighlight onPress={navigateToProfile}>
          <Icon name="account-circle" color="#fff" />
        </TouchableHighlight>
        <TouchableHighlight onPress={toggleMenu}>
          <Icon name="menu" color="#fff" />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default NavBar;
