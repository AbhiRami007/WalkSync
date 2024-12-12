import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginUser } from '../services/api.service';
import { UserContext } from '../UserContext';
import { User } from '../common/types';

const Login = ({ navigation }: any) => {

  const [state, setState] = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateFields = () => {
    let valid = true;
    let newErrors = {
      email: '',
      password: '',
    };

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
    if (validateFields()) {
      try {
        // update context
        const loggedInUser: User = {
          fullName: state.fullName,
          email: email,
          weight: state.weight,
          height: state.height,
          dailyCaloriesIntake: state.dailyCaloriesIntake,
          isLoggedIn: true
        };
        setState?.(loggedInUser);
        console.log("is logged in: " + state.isLoggedIn)
        await loginUser(email, password).
          then(() => {
            console.log("user should be logged in")
          })

      } catch (error) {
        Alert.alert('Login Failed', 'Please check your credentials.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.subtitle}>Welcome...</Text>
      </View>
      
      {/* Login Screen Image */}
      <Image source={require('../assets/loginImage.png')} style={styles.image} />

      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setErrors({...errors, email: ''});
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => {
            setPassword(text);
            setErrors({...errors, password: ''});
          }}
          secureTextEntry
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      </View>

      {/* Footer with Login Button and Options */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerText}>
            Not yet registered? <Text style={styles.linkText}>Register</Text>
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: "space-between",
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
  errorText: {
    color: '#e63946',
    fontSize: 12,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F2F2F2',
  },
  loginButton: {
    width:'100%',
    backgroundColor: '#FC6A2B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  footerText: {
    color: '#343434',
    fontSize: 14,
    marginVertical: 10,
  },
  linkText: {
    color: '#FC6A2B',
    fontSize: 14,
    fontWeight: '500',
  },
});
