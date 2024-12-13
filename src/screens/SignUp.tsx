import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { User } from '../common/types';
import { UserContext } from '../UserContext';

const SignUp = ({ navigation }: any) => {
  const [state, setState] = useContext(UserContext);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    weight: '',
    height: '',
    password: '',
    confirmPassword: '',
  });

  const validateFields = () => {
    let valid = true;
    let newErrors = {
      fullName: '',
      email: '',
      weight: '',
      height: '',
      password: '',
      confirmPassword: '',
    };

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
      valid = false;
    }
    if (password !== confirmPassword) {
      newErrors.password = 'Passwords do not match';
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleRegister = async () => {
    if (validateFields()) {
      try {
        // Create a new user in Firebase Authentication
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        const userId = userCredential.user.uid;

        // Save additional user data in Firestore
        const userDoc: User = {
          fullName,
          email,
          weight,
          height,
          dailyCaloriesIntake: '',
          isLoggedIn: false,
        };

        await firestore().collection('users').doc(userId).set(userDoc);

        // Update context
        setState?.(userDoc);

        Alert.alert('Success', 'Registration successful!');
        navigation.navigate('Success');
      } catch (error: any) {
        console.error('Error signing up user: ', error);

        let errorMessage;

        if (error.code) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              errorMessage = 'This email is already associated with an account.';
              break;
            case 'auth/invalid-email':
              errorMessage = 'The email address is not valid.';
              break;
            case 'auth/operation-not-allowed':
              errorMessage = 'Email/password accounts are not enabled.';
              break;
            case 'auth/weak-password':
              errorMessage = 'The password is too weak. Please choose a stronger password.';
              break;
            default:
              errorMessage = 'An unexpected error occurred. Please try again.';
              break;
          }
        } else {
          errorMessage = error.message || 'An unexpected error occurred. Please try again.';
        }

        Alert.alert('Error', errorMessage);
      }
    }
  };

  const handleCancel = () => {
    setFullName('');
    setEmail('');
    setWeight('');
    setHeight('');
    setPassword('');
    setConfirmPassword('');
    setErrors({
      fullName: '',
      email: '',
      weight: '',
      height: '',
      password: '',
      confirmPassword: '',
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Get Started</Text>
        <Text style={styles.subtitle}>
          Fill up the registration to get started with your fitness journey.
        </Text>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={text => {
            setFullName(text);
            setErrors({ ...errors, fullName: '' });
          }}
        />
        {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setErrors({ ...errors, email: '' });
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => {
            setPassword(text);
            setErrors({ ...errors, password: '' });
          }}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={text => {
            setConfirmPassword(text);
            setErrors({ ...errors, confirmPassword: '' });
          }}
        />
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

        <Text style={styles.label}>Current Weight (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your current weight in kg"
          value={weight}
          onChangeText={text => {
            setWeight(text);
            setErrors({ ...errors, weight: '' });
          }}
          keyboardType="numeric"
        />
        {errors.weight && <Text style={styles.errorText}>{errors.weight}</Text>}

        <Text style={styles.label}>Current Height (cm)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your current height in cm"
          value={height}
          onChangeText={text => {
            setHeight(text);
            setErrors({ ...errors, height: '' });
          }}
          keyboardType="numeric"
        />
        {errors.height && <Text style={styles.errorText}>{errors.height}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonTextRegister}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    fontSize: 15,
    backgroundColor: '#EEEEEE',
  },
  errorText: {
    color: '#e63946',
    fontSize: 12,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registerButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: '50%',
    backgroundColor: '#FC6A2B',
  },
  cancelButton: {
    backgroundColor: '#EAEAEA',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: '50%',
    marginRight: 5,
  },
  buttonText: {
    color: '#343434',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonTextRegister: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default SignUp;