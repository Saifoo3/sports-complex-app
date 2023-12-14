import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colours from '../Tempcolours/colours';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
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
