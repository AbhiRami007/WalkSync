import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Success from '../screens/Success';

const OnboardingStack = createNativeStackNavigator();

const OnboardingStackNavigator = ({setIsUserLoggedIn}) => {
  return (
    <OnboardingStack.Navigator initialRouteName="OnBoarding">
      <OnboardingStack.Screen name="OnBoarding" component={OnBoarding} />
      <OnboardingStack.Screen name="Login">
        {props => <Login {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
      </OnboardingStack.Screen>
      <OnboardingStack.Screen name="SignUp" component={SignUp} />
      <OnboardingStack.Screen name="Success" component={Success} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackNavigator;