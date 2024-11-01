import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }: any) => {
  const [isTracking, setIsTracking] = useState(false);
  const [steps, setSteps] = useState(1000);

  useEffect(() => {
    let stepInterval: any;
    if (isTracking) {
      // Start incrementing steps every second
      stepInterval = setInterval(() => {
        setSteps((prevSteps) => prevSteps + 1);
      }, 1000);
    } else if (!isTracking && stepInterval) {
      clearInterval(stepInterval); // Clear interval when tracking stops
    }
    return () => clearInterval(stepInterval); // Clean up interval on unmount
  }, [isTracking]);

  const handleStartStopTracking = () => {
    setIsTracking((prevTracking) => !prevTracking);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Dashboard</Text>
      <Text style={styles.subHeader}>Your activity..</Text>

      {/* Activity Cards */}
      <View style={styles.cardsContainer}>
        <View style={styles.cardtwo}>
          <Text style={styles.cardValue}>{steps}</Text>
          <Text style={styles.cardLabel}>Steps</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardValue}>5 km</Text>
          <Text style={styles.cardLabel}>Walking</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardValue}>8 Hr</Text>
          <Text style={styles.cardLabel}>Standing</Text>
        </View>
        <View style={styles.cardtwo}>
          <Text style={styles.cardValue}>0 km/hr</Text>
          <Text style={styles.cardLabel}>Speed</Text>
        </View>
      </View>

      {/* Start/Stop Tracking Button */}
      <TouchableOpacity
        style={isTracking?styles.stopTrackingButton:styles.startTrackingButton}
        onPress={handleStartStopTracking}
      >
        <Text style={isTracking?styles.buttonText:styles.buttonTextWhite}>
          {isTracking ? 'Stop Tracking' : 'Start Tracking'}
        </Text>
      </TouchableOpacity>

      {/* View Activity Log Button */}
      <TouchableOpacity
        style={styles.viewLogButton}
        onPress={() => navigation.navigate('ActivityLog')}
      >
        <Text style={styles.buttonText}>
          View activity log
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eceffb',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: '#6e6e6e',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardtwo: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  cardLabel: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  startTrackingButton: {
    backgroundColor: '#FF7E36',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  stopTrackingButton:{
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  viewLogButton: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextWhite: {
    fontSize: 16,
    color: '#FFF',
  },
  buttonText:{
    fontSize: 16,
    color: '#5E83FB', 
    marginLeft: 8 
  }
});

export default Dashboard;
