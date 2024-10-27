// src/App.tsx

import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingStackNavigator from './src/navigation/OnBoardingStack';
import MainStackNavigator from './src/navigation/MainStack';

const App = () => {
  // Replace with your authentication logic
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isUserLoggedIn ? <MainStackNavigator /> : <OnboardingStackNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
