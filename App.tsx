// src/App.tsx

import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingStackNavigator from './src/navigation/OnBoardingStack';
import MainStackNavigator from './src/navigation/MainStack';

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isUserLoggedIn ? <MainStackNavigator  setIsUserLoggedIn={setIsUserLoggedIn}/> : <OnboardingStackNavigator setIsUserLoggedIn={setIsUserLoggedIn}/>}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
