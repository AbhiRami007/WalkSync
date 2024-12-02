import React, { useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { UserContext } from '../UserContext';
import { emptyUser } from '../common/types';

const Profile = ({ navigation }: any) => {
  const [state, setState] = useContext(UserContext)
  const handleLogout= async () => {
    setState?.(emptyUser)
    auth()
    .signOut()
    .then(() => {
      console.log("sign out successful")
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.editProfile}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Picture and Info */}
      <View style={styles.profileInfoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{state.fullName}</Text>
        <Text style={styles.userEmail}>{state.email}</Text>
      </View>

      {/* Goal Weight Card */}
      <View style={styles.goalWeightCard}>
        <Text style={styles.goalWeightValue}>
          75 <Text style={styles.unit}>kg</Text>
        </Text>
        <Text style={styles.goalWeightLabel}>Goal Weight</Text>
      </View>

      {/* Additional Metrics */}
      <View style={styles.metricsContainer}>
        <View style={styles.metricCardTwo}>
          <Text style={styles.metricValue}>
            {state.dailyCaloriesIntake} <Text style={styles.unit}>cal/day</Text>
          </Text>
          <Text style={styles.metricLabel}>Calories Per Day</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>
            {state.weight} <Text style={styles.unit}>kg</Text>
          </Text>
          <Text style={styles.metricLabel}>Current Weight</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>
            {state.height} <Text style={styles.unit}>cm</Text>
          </Text>
          <Text style={styles.metricLabel}>Current Height</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editProfile: {
    fontSize: 16,
    color: '#FF7E36',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
  },
  userEmail: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  goalWeightCard: {
    backgroundColor: '#FF7E36',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  goalWeightValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  unit: {
    fontSize: 16,
  },
  goalWeightLabel: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  metricCard: {
    width: '48%',
    backgroundColor: '#f8f4f4',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  metricCardTwo: {
    width: '100%',
    backgroundColor: '#f8f4f4',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  metricLabel: {
    fontSize: 12,
    color: '#6e6e6e',
    marginTop: 5,
  },
  logoutButton: {
    backgroundColor: '#FC6A2B',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 'auto',
    marginBottom: 30,
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Profile;