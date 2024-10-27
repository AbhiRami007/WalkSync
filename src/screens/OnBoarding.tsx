import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnBoarding = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Text>Welcome to the OnBoarding Screen!</Text>
			<Button title="Get Started" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
});
