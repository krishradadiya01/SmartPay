import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/Navigation/Type/StackNavigation'
import AuthNavigation from './src/Navigation/Type/AuthNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})