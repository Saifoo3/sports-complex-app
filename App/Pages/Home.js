import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home({ route }) {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to the Complex, {email}</Text>
      </View>

      

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    // backgroundColor: '#e0e0e0',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});

