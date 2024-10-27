import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Text>Welcome to the Profile Screen!</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
});
