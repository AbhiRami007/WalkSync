import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import OnBoarding from './src/screens/OnBoarding';
import Login from './src/screens/Login';
import ActivityLog from './src/screens/ActivityLog';
import Compass from './src/screens/Compass';
import Profile from './src/screens/Profile';
import SignUp from './src/screens/SignUp';
import Success from './src/screens/Success';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ActivityLog" component={ActivityLog} />
          <Stack.Screen name="Compass" component={Compass} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
