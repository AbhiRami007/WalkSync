import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import ActivityLog from '../screens/ActivityLog';
import Compass from '../screens/Compass';
import Profile from '../screens/Profile';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Dashboard">
      <MainStack.Screen name="Dashboard" component={Dashboard} />
      <MainStack.Screen name="ActivityLog" component={ActivityLog} />
      <MainStack.Screen name="Compass" component={Compass} />
      <MainStack.Screen name="Profile" component={Profile} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
