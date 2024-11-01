import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SignUpUserParams } from '../common/types';

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

// Login function 
const loginUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

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
