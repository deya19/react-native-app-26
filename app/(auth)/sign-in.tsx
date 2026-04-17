import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'expo-router'

export default function SignIn() {
  return (
    <View>
      <Text>Sign In</Text>
      <Link href="/(auth)/sign-up">Create an account</Link>
    </View>
  )
}
