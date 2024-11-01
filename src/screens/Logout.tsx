import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Logout = ({ setIsUserLoggedIn }: any) => {
  const handleLogout = async () => {
    setIsUserLoggedIn(false);
};
  return (
    <SafeAreaView>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default Logout;

const styles = StyleSheet.create({
});
