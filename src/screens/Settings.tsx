import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Define types for CustomCheckBox component props
interface CustomCheckBoxProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

// Custom checkbox component using Ionicons
const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  value,
  onValueChange,
}) => (
  <TouchableOpacity
    onPress={() => onValueChange(!value)}
    style={styles.checkboxContainer}>
    <Ionicons
      name={value ? 'checkbox' : 'square-outline'}
      size={24}
      color={value ? '#FF7E36' : '#767577'}
    />
  </TouchableOpacity>
);

// Main Settings component
const Settings: React.FC = () => {
  // State for each setting
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(false);
  const [goalNotifications, setGoalNotifications] = useState<boolean>(false);
  const [dailyNotifications, setDailyNotifications] = useState<boolean>(false);
  const [permissionsEnabled, setPermissionsEnabled] = useState<boolean>(false);
  const [playMusicInBackground, setPlayMusicInBackground] =
    useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Notifications Toggle */}
      <View style={styles.settingRow}>
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Notifications</Text>
          <Text style={styles.settingDescription}>
            Allow notifications from the app.
          </Text>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          thumbColor={notificationsEnabled ? '#03d71b' : '#f4f3f4'}
          trackColor={{false: '#767577', true: '#03d71b'}}
        />
      </View>

      {/* Goal Notifications Checkbox */}
      <View style={styles.settingRow}>
        <Text style={styles.settingTitle}>Goal Notifications</Text>
        <CustomCheckBox
          value={goalNotifications}
          onValueChange={setGoalNotifications}
        />
      </View>

      {/* Daily Notifications Checkbox */}
      <View style={styles.settingRow}>
        <Text style={styles.settingTitle}>Daily Notifications</Text>
        <CustomCheckBox
          value={dailyNotifications}
          onValueChange={setDailyNotifications}
        />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Permissions Toggle */}
      <View style={styles.settingRow}>
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Permissions</Text>
          <Text style={styles.settingDescription}>
            Allow permissions from the app.
          </Text>
        </View>
        <Switch
          value={permissionsEnabled}
          onValueChange={setPermissionsEnabled}
          thumbColor={permissionsEnabled ? '#03d71b' : '#f4f3f4'}
          trackColor={{false: '#767577', true: '#03d71b'}}
        />
      </View>

      {/* Play Music in Background Toggle */}
      <View style={styles.settingRow}>
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Play Music in background</Text>
          <Text style={styles.settingDescription}>
            This allows you to play music in the background.
          </Text>
        </View>
        <Switch
          value={playMusicInBackground}
          onValueChange={setPlayMusicInBackground}
          thumbColor={playMusicInBackground ? '#03d71b' : '#f4f3f4'}
          trackColor={{false: '#767577', true: '#03d71b'}}
        />
      </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  settingTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  settingDescription: {
    fontSize: 12,
    color: '#6e6e6e',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  checkboxContainer: {
    padding: 8,
  },
});

export default Settings;
