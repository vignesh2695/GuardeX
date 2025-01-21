import { View, Text, Image, TouchableOpacity, Pressable, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar'
import COLORS from './assets/Color'
import IMAGES from './assets/images/Images'
import { Icons } from './utils/Icons'
import { HomeContainer, ProfileContainer,SideMenuContainer } from './container'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const BottomStack = () => {
  const [screen_name, set_screen_name] = useState()
  const navigation = useNavigation()
  const ref = useRef()
  let icon = ''
  
  const rener_icon = (routeName) => {
    switch (routeName) {
      case 'Menu':
        // icon = 'account-clock-outline'
        set_screen_name("Menu")
        icon = (<Icons.Feather name="menu" size={30} color={COLORS.white} />)
        break;

      case 'Profile':
        // icon = 'account'
        set_screen_name("Profile")
        icon = (<Icons.Feather name='user' size={20} color={COLORS.white} />)
        break;
    }

    return (
      <>
      {icon}
      </>
      // <Icons.MaterialCommunityIcons name={icon} size={20} color={COLORS.white} />
    )
  }
  return (
    <CurvedBottomBar.Navigator
      ref={ref}
      type='DOWN'
      height={60}
      circleWidth={60}
      bgColor={COLORS.lavenderPrimary}
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            colors={[COLORS.lavenderPrimary, COLORS.lavenderSecondary]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.4, 1.1]} />
        ),
        headerTitleStyle: { color: COLORS.white, alignSelf: 'center', alignItems: 'center' },
        headerTitleAlign: 'center',
        headerTitle: { screen_name },
        headerRight: () => (
          <Image source={IMAGES.guardex_logo} style={{ width: 40, height: 40, marginRight: 10, tintColor: COLORS.white }} resizeMode='contain' />
        ),
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.navigate(SideMenuContainer)}
          >
            <Image
              source={IMAGES.menu_line}
              resizeMode='contain'
              style={{ width: 30, height: 30, marginStart: 10 }}
            />
          </Pressable>
        )
      }}
      initialRouteName={'HomeContainer'}
      renderCircle={({ selectedTab, navigate }) => (
        <TouchableOpacity
          onPress={() => {
            set_screen_name("Guardex")
            navigate('Home')
          }}
          activeOpacity={0.6}
          style={{
            width: 60,
            height: 60,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lavenderPrimary,
            bottom: 26,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 1,
          }}
        >
          <Image source={IMAGES.home} resizeMode='contain' style={{ width: 30, height: 30 }} />
          {/* <Icons.Ionicons name="chatbubbles-outline" size={23} /> */}

        </TouchableOpacity>
      )}
      tabBar={({ routeName, selectedTab, navigate }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(routeName)}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 0 }}>
            {rener_icon(routeName, selectedTab)}
            <Text style={{ bottom: 0, color: COLORS.white, fontSize: 11 }}>{routeName}</Text>
          </TouchableOpacity>
        );
      }}
    >
      <CurvedBottomBar.Screen
        name={'Menu'}
        position='LEFT'
        component={SideMenuContainer}
      />

      <CurvedBottomBar.Screen
        name={'HomeContainer'}
        position='CIRCLE'
        component={HomeContainer}
      />

      <CurvedBottomBar.Screen
        name={'Profile'}
        position='RIGHT'
        component={ProfileContainer}
      />

    </CurvedBottomBar.Navigator>
  )
}

export default BottomStack
