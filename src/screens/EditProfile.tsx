import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { UserContext } from '../UserContext';
import { User } from '../common/types';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const EditProfile = ({ navigation }: any) => {
  const [state, setState] = useContext(UserContext);

  // Local state for the profile fields
  const [fullName, setFullName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [dailyCaloriesIntake, setDailyCaloriesIntake] = useState('');

  const [errors, setErrors] = useState({
    fullName: '',
    weight: '',
    height: '',
    dailyCaloriesIntake: '',
  });

  // Fetch user data from Firestore
  const fetchUserData = async () => {
    try {
      const currentUser = auth().currentUser;

      if (!currentUser) {
        console.log('No user is signed in.');
        return;
      }

      const userId = currentUser.uid;

      // Fetch the document from Firestore using the UID
      const documentSnapshot = await firestore().collection('users').doc(userId).get();

      if (documentSnapshot.exists) {
        const fetchedData = documentSnapshot.data();

        // Map Firestore data to the `User` interface
        const mappedUserData: User = {
          fullName: fetchedData?.fullName || 'Unknown User',
          email: currentUser.email || 'No Email', // Fetched from Firebase Authentication
          weight: fetchedData?.weight?.toString() || '0',
          height: fetchedData?.height?.toString() || '0',
          dailyCaloriesIntake: fetchedData?.dailyCaloriesIntake?.toString() || '0',
          isLoggedIn: true, // Derived from current state
        };

        setFullName(mappedUserData.fullName);
        setWeight(mappedUserData.weight);
        setHeight(mappedUserData.height);
        setDailyCaloriesIntake(mappedUserData.dailyCaloriesIntake);
      } else {
        console.log('No such document for the current user!');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // useEffect to fetch user data when the component mounts
  useEffect(() => {
  //   fetchUserData();
  setFullName(state.fullName);
  setWeight(state.weight);
  setHeight(state.height);
  setDailyCaloriesIntake(state.dailyCaloriesIntake);
 }, []); // This effect runs once on component mount

  const validateFields = () => {
    let isValid = true;
    let newErrors = {
      fullName: '',
      weight: '',
      height: '',
      dailyCaloriesIntake: '',
    };

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
      isValid = false;
    }
    if (!weight.trim() || isNaN(Number(weight))) {
      newErrors.weight = 'Please enter a valid weight.';
      isValid = false;
    }
    if (!height.trim() || isNaN(Number(height))) {
      newErrors.height = 'Please enter a valid height.';
      isValid = false;
    }
    if (!dailyCaloriesIntake.trim() || isNaN(Number(dailyCaloriesIntake))) {
      newErrors.dailyCaloriesIntake = 'Please enter a valid daily calorie intake.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = async () => {
    if (validateFields()) {
      const currentUser = auth().currentUser;

      if (!currentUser) {
        console.log('No user is signed in.');
        return;
      }

      const userId = currentUser.uid;

      // Prepare the updated user data
      const updatedUser = {
        fullName,
        weight,
        height,
        dailyCaloriesIntake,
      };

      try {
        // Update Firestore document with the new data
        await firestore()
          .collection('users')
          .doc(userId)
          .update(updatedUser);

        // Update context with new data
        const updatedUserData: User = {
          fullName,
          email: currentUser.email || 'No Email',
          weight,
          height,
          dailyCaloriesIntake,
          isLoggedIn: true,
        };

        setState?.(updatedUserData); // Update the context with the new user data

        Alert.alert('Success', 'Profile updated successfully!');
        navigation.goBack(); // Navigate back after successful update
      } catch (error) {
        console.error('Error updating user data:', error);
        Alert.alert('Error', 'There was an error updating your profile.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {/* Full Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        placeholderTextColor="#c7c7c7"
        value={fullName}
        onChangeText={(text) => {
          setFullName(text);
          setErrors({ ...errors, fullName: '' });
        }}
      />
      {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

      {/* Daily Calorie Intake Input */}
      <Text style={styles.label}>Daily Calorie Intake</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter daily calorie intake"
        placeholderTextColor="#c7c7c7"
        value={dailyCaloriesIntake}
        keyboardType="numeric"
        onChangeText={(text) => {
          setDailyCaloriesIntake(text);
          setErrors({ ...errors, dailyCaloriesIntake: '' });
        }}
      />
      {errors.dailyCaloriesIntake && <Text style={styles.errorText}>{errors.dailyCaloriesIntake}</Text>}

      {/* Current Weight Input */}
      <Text style={styles.label}>Current Weight (kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your weight in kg"
        placeholderTextColor="#c7c7c7"
        value={weight}
        keyboardType="numeric"
        onChangeText={(text) => {
          setWeight(text);
          setErrors({ ...errors, weight: '' });
        }}
      />
      {errors.weight && <Text style={styles.errorText}>{errors.weight}</Text>}

      {/* Current Height Input */}
      <Text style={styles.label}>Current Height (cm)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your height in cm"
        placeholderTextColor="#c7c7c7"
        value={height}
        keyboardType="numeric"
        onChangeText={(text) => {
          setHeight(text);
          setErrors({ ...errors, height: '' });
        }}
      />
      {errors.height && <Text style={styles.errorText}>{errors.height}</Text>}

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
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
    marginBottom: 10,
    color: '#333',
  },
  errorText: {
    color: '#e63946',
    fontSize: 12,
    marginBottom: 15,
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