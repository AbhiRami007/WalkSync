import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
const Success = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Success</Text>
        <Text style={styles.subtitle}>
          You have successfully registered with Walk Sync.
        </Text>
      </View>
      <View>
        <Image source={require('../assets/Sport.png')} style={styles.image} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Start your Journey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    marginTop: 10,
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: '100%',
    backgroundColor: '#FC6A2B',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 70,
  },
});
