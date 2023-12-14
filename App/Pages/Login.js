import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colours from '../Tempcolours/colours';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

export default function Login() {
  WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '722134148334-pvke7chr3p0hlutmdo02jrqq1l6tu9bh.apps.googleusercontent.com',
    expoClientId:'722134148334-2e17cpd2a5i0kbs0u9vnro5g7mdsk4cq.apps.googleusercontent.com'

  });
  return (
    <View>
        <Image source={require('./../Assets/Images/login.png')}/>
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to the Sports Complex</Text>
            <Text style={{textAlign:'center',marginTop:70,fontSize:23}}>Login/Signup</Text>
            <View style={styles.button}>
              <Ionicons name="logo-google" size={24} 
              color="white" style={{marginRight:10}}/>
              <Text style={{color:colours.white ,fontSize:15}}>Sign in using Google</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        marginTop:-25,
        backgroundColor: '#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    welcomeText:{
      fontSize:35,
      textAlign:'center',
      fontWeight:'bold'
    },
    button:{
      backgroundColor:colours.primary,
      padding:10,
      margin:50,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10
    }
});
