import { View, Text, LogBox, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Index from './src'
import { NotificationServices, requestUserPermission } from './src/utils/NotificationService'

const AppWrapper = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <App />
    </SafeAreaView>
  )
}

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  )
}

export default AppWrapper;