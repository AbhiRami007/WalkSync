import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from '../UserContext';
import { User } from '../common/types';

const EditProfile = ({ navigation }: any) => {
  const [state, setState] = useContext(UserContext);
  const [fullName, setFullName] = useState(state.fullName);
  const [weight, setWeight] = useState(state.weight);
  const [height, setHeight] = useState(state.height);
  const [dailyCaloriesIntake, setDailyCaloriesIntake] = useState(state.dailyCaloriesIntake);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {/* Full Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} placeholder="Enter" placeholderTextColor="#c7c7c7"
      value={fullName} onChangeText={(text)=> {
        setFullName(text);
      }} />

      {/* Daily Calorie Intake Input */}
      <Text style={styles.label}>Daily Calorie Intake</Text>
      <TextInput style={styles.input} placeholder="Enter" placeholderTextColor="#c7c7c7"
            value={dailyCaloriesIntake} onChangeText={(text)=> {
              setDailyCaloriesIntake(text);
            }}  />

      {/* Current Weight Input */}
      <Text style={styles.label}>Current Weight (kg)</Text>
      <TextInput style={styles.input} placeholder="Enter" placeholderTextColor="#c7c7c7" 
            value={weight} onChangeText={(text)=> {
              setWeight(text);
            }} />

      {/* Current Height Input */}
      <Text style={styles.label}>Current Height (cm)</Text>
      <TextInput style={styles.input} placeholder="Enter" placeholderTextColor="#c7c7c7"
            value={height} onChangeText={(text)=> {
              setHeight(text);
            }}  />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={() => {
          const updatedUser: User = {
            fullName: fullName,
            email: state.email,
            weight: weight,
            height: height,
            dailyCaloriesIntake: dailyCaloriesIntake,
            isLoggedIn: true
          }
          setState?.(updatedUser)
          navigation.goBack()
        }}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  saveButton: {
    backgroundColor: '#FF7E36',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#333',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default EditProfile;