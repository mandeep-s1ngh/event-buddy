// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import NavBar from './components/NavBar';
import theme from './theme.js';
import styles from './styles.js';

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <View style={styles.AppView}>
          <StatusBar />
          <NavBar />
          {/* conditionally render other pages here*/}
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// N.B to set style add this attribute: style={styles.xxxx}

// Set StatusBar colour - done through a direct prop, not style: <StatusBar backgroundColor="#2403fc" />
