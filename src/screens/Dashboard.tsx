import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = ({ navigation, setIsUserLoggedIn}: any) => {

const handleLogout = async () => {
      setIsUserLoggedIn(false);
      navigation.navigate('OnBoarding');
  };
  return (
    <SafeAreaView>
      <Text>Welcome to the Dashboard Screen!</Text>
      <Button title="Compass" onPress={() => navigation.navigate('Compass')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="View Activity Log" onPress={() => navigation.navigate('ActivityLog')} />
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
});
