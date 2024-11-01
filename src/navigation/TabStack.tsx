import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screens/Dashboard';
import ActivityLog from '../screens/ActivityLog';
import Compass from '../screens/Compass';
import Profile from '../screens/Profile';
import Logout from '../screens/Logout';
import EditProfile from '../screens/EditProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const profileStack = createNativeStackNavigator();
const ProfileStackNavigator = ({ setIsUserLoggedIn }: any) => {
  return (
    <profileStack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
      <profileStack.Screen name='Profile'>
        {props => <Profile {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
      </profileStack.Screen>
      <profileStack.Screen name='EditProfile' component={EditProfile} />
    </profileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabStack = ({setIsUserLoggedIn}: any) => {
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
          }else if (route.name === 'Logout') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF7E36',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard}  options={{ headerTitle: "", headerShown: false }}/>
      <Tab.Screen name="Compass" component={Compass}  options={{ headerTitle: "", headerShown: false }}/>
      <Tab.Screen name="Profile" options={{ headerTitle: "", headerShown: false }}>
        {props => <ProfileStackNavigator {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
      </Tab.Screen>
      <Tab.Screen name="Logout" options={{ headerTitle: "", headerShown: false }}>
        {props => <Logout {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabStack;