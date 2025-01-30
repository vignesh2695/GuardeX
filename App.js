import { View, Text, LogBox, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Index from './src'
import { NotificationServices, requestUserPermission } from './src/utils/NotificationService'
import FlashMessage from 'react-native-flash-message'
import COLORS from './src/assets/Color'

const AppWrapper = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <App />
      <FlashMessage
        position={"top"}
        duration={5000}
        animated={true}
        autoHide={false}
        hideOnPress={true}
        floating={true}
        icon={'warning'}
        style={{ backgroundColor: COLORS.primaryLavander }}
      />
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