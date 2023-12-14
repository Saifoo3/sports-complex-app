import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, TextInput, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [email, setEmail] = useState('john.doe@example.com');
  const [address, setAddress] = useState('123 Main St, Anytown, USA');
  const [password, setPassword] = useState('');
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDataSharingAllowed, setIsDataSharingAllowed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      {/* Account Management */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Account</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          const secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {/* Privacy Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Privacy</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={(value) => setIsNotificationsEnabled(value)}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Data Sharing</Text>
          <Switch
            value={isDataSharingAllowed}
            onValueChange={(value) => setIsDataSharingAllowed(value)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputField: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SettingsScreen;
