import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {useColorScheme} from 'react-native';
import {createTheme, ThemeProvider} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {themeMode} from './src/styles/globalStyle';

const App = () => {
  const deviceColorScheme = useColorScheme();
  const theme = createTheme({
    ...themeMode,
    mode: deviceColorScheme === 'dark' ? 'dark' : 'light',
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
