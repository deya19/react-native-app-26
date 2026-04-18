import { Text } from 'react-native'
import React from 'react'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind"
const SafeAreaView = styled(RNSafeAreaView);

export default function Insights() {
  return (
    <SafeAreaView>
      <Text>Insights</Text>
    </SafeAreaView>
  )
}