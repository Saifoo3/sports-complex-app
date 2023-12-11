import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
        <Image source={require('./../Assets/Images/login.png')}/>
        <Text >Welcome to Sports Complex</Text>
    </View>
  )
}
