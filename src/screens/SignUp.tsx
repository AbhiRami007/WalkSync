import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';

const SignUp = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Text>Welcome to the Signup Screen!</Text>
			<Button title="Register Now" onPress={() => navigation.navigate('Success')} />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
});
