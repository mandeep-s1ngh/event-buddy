import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavBar from './components/NavBar';
import theme from './theme.js';

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <NavBar />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

// testing testing 123 - Farishta
