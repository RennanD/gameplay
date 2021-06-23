import React from 'react';
import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

import { SignIn } from './src/screens/SignIn';

import { theme } from './src/global/styles/theme';
import { Background } from './src/components/Background';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <SignIn />
      </Background>
    </ThemeProvider>
  );
}
