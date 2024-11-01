// Compass.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Compass: React.FC = () => {
  // Hardcoded values for a static display
  const heading = '459° W';
  const latitude = '0° 54\' 22.8024" S';
  const longitude = '0° 54\' 22.8024" S';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Compass</Text>
      <Text style={styles.direction}>{heading}</Text>
      <Text style={styles.coordinates}>Latitude {latitude}</Text>
      <Text style={styles.coordinates}>Longitude {longitude}</Text>
    </View>
  );
};

export default Compass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  direction: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#333333',
  },
  coordinates: {
    fontSize: 16,
    color: '#555555',
    marginTop: 5,
  },
});
