import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlexStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditProfile = ({ navigation }: any) => {
    const [fullName, onChangeName] = useState('');
    const [calories, onChangeCalories] = useState('');
    const [weight, onChangeWeight] = useState('');
    const [height, onChangeHeight] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>Full Name</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={fullName}
            placeholder='Enter'
        />
        <Text>Daily Calorie Intake</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeCalories}
            placeholder='Enter'
            value={calories}
            keyboardType='numeric'
        />
        <Text>Current Weight</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeWeight}
            placeholder='Enter'
            value={weight}
            keyboardType='numeric'
        />
        <Text>Current Height</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeHeight}
            placeholder='Enter'
            value={height}
            keyboardType='numeric'
        />
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancelButton} onPress={()=> {navigation.navigate('Profile')}}>
                <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}>
                <Text style={{color: 'white'}}>Save</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const baseButton = {
    borderRadius: 20,
    width: 170,
    height: 60,
    alignItems: 'center' as FlexStyle['alignItems'],
    justifyContent: 'space-around' as FlexStyle['justifyContent']
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        paddingHorizontal: 20
    },
    input: {
        padding: 10,
        borderWidth: 1,
        marginVertical: 10,
        borderColor: '#eeeeee',
        backgroundColor: '#e6e6e6',
        height: 60,
        borderRadius: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cancelButton: {
        ...baseButton,
        backgroundColor: '#eaeaea',
    },
    saveButton: {
        ...baseButton,
        backgroundColor: '#fc6a2b',
    }
});
