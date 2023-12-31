import { View, Text, Image, StyleSheet, TextInput, Button, ScrollView, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import colours from '../Tempcolours/colours';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
  WebBrowser.maybeCompleteAuthSession();
  const [accessToken, setAccessToken] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '722134148334-pvke7chr3p0hlutmdo02jrqq1l6tu9bh.apps.googleusercontent.com',
    expoClientId: '722134148334-2e17cpd2a5i0kbs0u9vnro5g7mdsk4cq.apps.googleusercontent.com'
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const shakeAnimation = new Animated.Value(0);

  useEffect(() => {
    if (response?.type === 'cancel') {
      setAccessToken(response.authentication.accessToken);
      console.log(response.authentication.accessToken);
      getUserData();
    }
  }, [response]);

  const getUserData = async () => {
    try {
      const resp = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${response.authentication.accessToken}` }
      });

      const user = await resp.json();
      console.log('user Details', user);
      setUserInfo(user);
      setUserData(user);
      await Services.setUserAuth(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  const handleEmailChange = text => {
    setEmail(text);
    setIsValid(true); // Reset validation on input change
  };

  const handlePasswordChange = text => {
    setPassword(text);
    setIsValid(true); // Reset validation on input change
  };

  const handleSignupWithEmail = () => {
    if (!email.trim() || !password.trim()) {
      // If username or password is empty, trigger shake animation and set validation state to false
      setIsValid(false);
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
      ]).start();
    } else {
      navigation.navigate('Home', { email });
    }
  };

  return (
    <ScrollView>
      <View>
        <Image source={require('./../Assets/Images/login.png')} />
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to the Sports Complex</Text>
          <Text style={{ textAlign: 'center', marginTop: 70, fontSize: 23 }}>Login/Signup</Text>
          <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
            <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
            <Text style={{ color: colours.white, fontSize: 15 }}>Sign in using Google</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', marginTop: 1, fontSize: 23 }}>-or-</Text>

          <TextInput
            style={[styles.input, !isValid && styles.invalidInput]}
            placeholder="Username"
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.input, !isValid && styles.invalidInput]}
            placeholder="Password"
            onChangeText={handlePasswordChange}
            secureTextEntry
          />
          <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
            <TouchableOpacity style={styles.button} onPress={handleSignupWithEmail}>
              <Text style={{ color: colours.white, fontSize: 17, fontWeight: 'bold' }}>
                Signup with username
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 1
  },
  button: {
    backgroundColor: colours.primary,
    padding: 10,
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10
  },
  invalidInput: {
    borderColor: 'red'
  }
});
