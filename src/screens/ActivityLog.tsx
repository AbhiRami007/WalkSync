import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ActivityLogItem {
  id: string;
  date: string;
  time: string;
  steps: number;
  walkingAverage: string;
  standing: string;
  avgSpeed: string;
}

const data: ActivityLogItem[] = [
  {
    id: '1',
    date: 'Today',
    time: '10:30 AM',
    steps: 2930,
    walkingAverage: '5 km',
    standing: '10 hr',
    avgSpeed: '10 km/hr',
  },
  {
    id: '2',
    date: 'Yesterday',
    time: '10:30 AM',
    steps: 2930,
    walkingAverage: '5 km',
    standing: '10 hr',
    avgSpeed: '10 km/hr',
  },
  {
    id: '3',
    date: 'Yesterday',
    time: '10:30 AM',
    steps: 2930,
    walkingAverage: '5 km',
    standing: '10 hr',
    avgSpeed: '10 km/hr',
  },
];

const ActivityLog = () => {
  const renderItem = ({item}: {item: ActivityLogItem}) => (
    <View style={styles.logCard}>
      <Text style={styles.date}>{item.date}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardLabel}>Steps</Text>
        <Text style={styles.cardValue}>{item.steps}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardLabel}>Walking Average</Text>
        <Text style={styles.cardValue}>{item.walkingAverage}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardLabel}>Standing</Text>
        <Text style={styles.cardValue}>{item.standing}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardLabel}>Avg. Speed</Text>
        <Text style={styles.cardValue}>{item.avgSpeed}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Activity Log</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logCard: {
    backgroundColor: '#f8f4f4',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6e6e6e',
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  cardValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    marginTop: 10,
    fontSize: 12,
    color: '#6e6e6e',
    textAlign: 'right',
  },
});

export default ActivityLog;
