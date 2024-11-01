import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function OnboardingScreen({navigation}: any) {
  return (
    <ImageBackground
      source={require('../assets/walkSyncCover.jpeg')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to WalkSync</Text>
        <Text style={styles.subtitle}>
          Your ultimate companion for tracking steps, speed, and direction.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Image
            source={require('../assets/footPrintIcon.png')}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adds a dark overlay for text readability
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FC6A2B',
    marginTop: '95%',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    margin: 30,
  },
  button: {
    borderRadius: 25,
    backgroundColor: '#ffffff',
    padding: 10,
    width: '80%',
    margin: 5,
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  buttonText: {
    color: '#343434',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
