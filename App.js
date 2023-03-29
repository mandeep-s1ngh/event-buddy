// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@rneui/themed";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import theme from "./theme.js";
import styles from "./styles.js";
import LocationRequest from "./components/LocationRequest";

export default function App() {
  const [page, setPage] = useState(1);
  const [userLocation, setUserLocation] = useState("");
  const [eventName, setEventName] = useState("");

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <View style={styles.AppView}>
          <StatusBar />
          {page === 1 ? (
            <LandingPage setEventName={setEventName} eventName={eventName} />
          ) : null}
          {page === 2 ? (
            <LocationRequest
              setUserLocation={setUserLocation}
              userLocation={userLocation}
            />
          ) : null}
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// N.B to set style add this attribute: style={styles.xxxx}

// Set StatusBar colour - done through a direct prop, not style: <StatusBar backgroundColor="#2403fc" />
