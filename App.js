// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@rneui/themed";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import theme from "./theme";
import styles from "./styles";

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <View style={styles.AppView}>
          {/* <StatusBar style="auto" /> */}
          <LandingPage />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({});
