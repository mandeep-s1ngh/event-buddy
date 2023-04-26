import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon, ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import theme from './utils/theme.js';

import Main from './components/Main.jsx';
import { CurrentUserProvider } from './context/CurrentUserContext.js';
import { MenuShownProvider } from './context/MenuShownContext.js';

export default function App() {
  return (
    <SafeAreaProvider>
      <CurrentUserProvider>
        <MenuShownProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <StatusBar />
              <Main />
            </NavigationContainer>
          </ThemeProvider>
        </MenuShownProvider>
      </CurrentUserProvider>
    </SafeAreaProvider>
  );
}
