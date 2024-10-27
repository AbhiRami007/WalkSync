import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Success = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Text>Welcome to the Success Screen!</Text>
			<Button title="Start Your Journey" onPress={() => navigation.navigate('Dashboard')} />
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({
});
