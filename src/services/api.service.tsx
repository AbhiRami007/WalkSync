import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { SignUpUserParams, User } from '../common/types';

// Sign Up function
const signUpUser = async ({
  fullName,
  email,
  password,
  weight,
  height,
}: SignUpUserParams): Promise<void> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const userId = userCredential.user.uid;
    // Store user data in Firestore
    // await firestore().collection('users').doc(userId).set({
    //   fullName,
    //   email,
    //   weight,
    //   height,
    //   createdAt: firestore.FieldValue.serverTimestamp(),
    // });
  } catch (error) {
    console.error("Error signing up user: ", error);
    throw error; 
  }
};

const fetchUserDataWithId = async (userId: string, email: string | null): Promise<User> => {
  const mappedUserData: User = {
    fullName: 'Unknown User',
    email: email || 'No Email',
    weight: '0',
    height: '0',
    dailyCaloriesIntake: '0',
    isLoggedIn: true, // Derived from current state
  }
  try{
    // Fetch the document from Firestore using the UID
    const documentSnapshot = await firestore().collection('users').doc(userId).get();

    if (documentSnapshot.exists) {
      const fetchedData = documentSnapshot.data();
      // Map Firestore data to the `User` interface
      mappedUserData.fullName = fetchedData?.fullName || 'Unknown User'
      mappedUserData.weight = fetchedData?.weight?.toString() || '0'
      mappedUserData.height = fetchedData?.height?.toString() || '0'
      mappedUserData.dailyCaloriesIntake = fetchedData?.dailyCaloriesIntake?.toString() || '0'
    } else {
      console.log('No such document for the current user!');
    }

    return mappedUserData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return mappedUserData;
  }
};


// Login function 
const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    return fetchUserDataWithId(user.uid, user.email);
    // Save basic user data in local storage
    // await AsyncStorage.setItem('user', JSON.stringify({
    //   uid: user.uid,
    //   email: user.email,
    // }));
  } catch (error) {
    console.error("Error logging in user: ", error);
    throw error; 
  }
};

export { signUpUser, loginUser };
