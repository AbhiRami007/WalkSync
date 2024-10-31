import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { SignUpUserParams } from '../common/types';

const signUpUser = async ({
  fullName,
  email,
  password,
  weight,
  height,
}: SignUpUserParams): Promise<boolean> => {
  try {
console.log("called")
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
    return true;
  } catch (error) {
    console.error("Error signing up user: ", error);
    return false;
  }
};

export { signUpUser };
