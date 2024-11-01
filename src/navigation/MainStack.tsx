// MainStackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStack from './TabStack';
import ActivityLog from '../screens/ActivityLog';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = ({ setIsUserLoggedIn }: any) => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home">
        {props => <TabStack {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
      </MainStack.Screen>
      <MainStack.Screen name="ActivityLog" component={ActivityLog} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
