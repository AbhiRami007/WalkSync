import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignUp = ({navigation}: any) => {
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
      calorieIntake: '',
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
    
    if (!weight.trim()) {
      newErrors.weight = 'Weight is required';
      valid = false;
    }
    if (!height.trim()) {
      newErrors.height = 'Height is required';
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
      newErrors.password = 'Password and Confirm Password should match';
      newErrors.confirmPassword = 'Password and Confirm Password should match';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleRegister = () => {
    if (validateFields()) {
      //add signup logic here
      navigation.navigate('Success');
    }
  };

  const handleCancel = () => {
    setFullName('');
    setEmail('');
    setWeight('');
    setHeight('');
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
            setErrors({...errors, fullName: ''});
          }}
        />
        {errors.fullName && (
          <Text style={styles.errorText}>{errors.fullName}</Text>
        )}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setErrors({...errors, email: ''});
          }}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a Password"
          value={email}
          onChangeText={text => {
            setPassword(text);
            setErrors({...errors, password: ''});
          }}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a Password"
          value={email}
          onChangeText={text => {
            setConfirmPassword(text);
            setErrors({...errors, confirmPassword: ''});
          }}
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}

        <Text style={styles.label}>Current Weight (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your current weight in kg"
          value={weight}
          onChangeText={text => {
            setWeight(text);
            setErrors({...errors, weight: ''});
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
            setErrors({...errors, height: ''});
          }}
          keyboardType="numeric"
        />
        {errors.height && <Text style={styles.errorText}>{errors.height}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.buttonTextRegister}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
paddingTop:10,
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
