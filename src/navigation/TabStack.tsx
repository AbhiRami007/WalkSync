import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screens/Dashboard';
import ActivityLog from '../screens/ActivityLog';
import Compass from '../screens/Compass';
import Profile from '../screens/Profile';
//import Logout from '../screens/Logout';
import EditProfile from '../screens/EditProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';

const profileStack = createNativeStackNavigator();
const ProfileStackNavigator = () => {
  return (
    <profileStack.Navigator initialRouteName='UserProfile' screenOptions={{ headerShown: false }}>
      <profileStack.Screen name='UserProfile' component={Profile}/>
      <profileStack.Screen name='EditProfile' component={EditProfile} />
    </profileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Compass') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF7E36',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard}  options={{ headerTitle: "", headerShown: false }}/>
      <Tab.Screen name="Compass" component={Compass}  options={{ headerTitle: "", headerShown: false }}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{ headerTitle: "", headerShown: false }}/>
      <Tab.Screen name="Settings" component={Settings}  options={{ headerTitle: "", headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default TabStack;