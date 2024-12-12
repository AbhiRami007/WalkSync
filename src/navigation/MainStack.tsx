// MainStackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStack from './TabStack';
import ActivityLog from '../screens/ActivityLog';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={TabStack}/>
      <MainStack.Screen name="ActivityLog" component={ActivityLog} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
