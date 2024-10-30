import React from 'react';
import { View, 
        Text,
        StyleSheet,
        Image,
        TouchableOpacity,
        ViewStyle,
        FlexStyle,
       } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>Profile</Text>
        <TouchableOpacity onPress={()=> {navigation.navigate('Edit Profile');}}>
          <Text style={styles.BodyText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
            <View style={styles.profileHeader}>
                <Image
                    style={styles.profileImage}
                    source={{uri:'https://images.pexels.com/photos/3136161/pexels-photo-3136161.jpeg'}}
                />
                <Text style={styles.largerText}>Name</Text>
                <Text style={styles.BodyText}>E-mail</Text>
            </View>
            <View style={styles.HighlightDetailBox}>
                <Text style={{color: 'white'}}>kg</Text>
                <Text style={[styles.BodyText,{color: 'white'}]}>Goal Weight</Text>
            </View>
            <View style={styles.DetailBox}>
                <Text>cal/day</Text>
                <Text style={styles.BodyText}>Calories Per Day</Text>
            </View>
            <View style={styles.weightHeightRow}>
                <View style={styles.smallerDetailBox}>
                    <Text>kg</Text>
                    <Text style={styles.BodyText}>Current Weight</Text>
                </View>
                <View style={styles.smallerDetailBox}>
                    <Text>cm</Text>
                    <Text style={styles.BodyText}>Current Height</Text>
                </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const baseDetailBox = {
  height: 100,   
  borderRadius: 20,
  marginVertical: 10,
  padding: 10,
  justifyContent: 'space-around' as FlexStyle["justifyContent"]
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50,
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#343434'
    },
    profileHeader: {
        alignItems: 'center',
    },
    BodyText: {
        fontSize: 15,
        color: '#343434'
    },
    largerText: {
        fontSize: 20,
        color: '#343434',
        fontWeight: 'bold',
        marginVertical: 10
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100/2
    },
    weightHeightRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    HighlightDetailBox: {
        ...baseDetailBox,
        width: 350,
        backgroundColor: '#FC6A2B',
    },
    DetailBox: {
        ...baseDetailBox,
        width: 350,
        backgroundColor: '#d3d3d3',
    },
    smallerDetailBox: {
        ...baseDetailBox,
        width: 160,
        backgroundColor: '#d3d3d3',
    },
});
