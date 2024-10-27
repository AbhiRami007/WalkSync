import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Compass = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Text>Welcome to the Compass Screen!</Text>
    </SafeAreaView>
  );
};

export default Compass;

const styles = StyleSheet.create({
});
