import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from './utils/Icons';
import COLORS from './assets/Color';
import { HomeContainer, ProfileContainer, SideMenuContainer } from './container';
import LinearGradient from 'react-native-linear-gradient';
import { Image, Pressable } from 'react-native';
import IMAGES from './assets/images/Images';
// import { Ionicons } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();




function BottomNavigationBar() {

    let icon = '';
    const navigation = useNavigation();

    return (

        // <NavigationContainer>
        <></>
        //     <Tab.Navigator
        //         screenOptions={({ route }) => ({
        //             tabBarIcon: ({ focused, color, size }) => {
        //                 if (route.name === 'Home') {
        //                     icon = focused ? 'home' : 'home';
        //                 } else if (route.name === 'Menu') {
        //                     icon = focused ? 'menu' : 'menu';
        //                     // icon = (<Icons.Feather name="menu" size={30} color={COLORS.white} />)
        //                 } else if (route.name === 'Profile') {
        //                     icon = 'user'
        //                     // icon = (<Icons.Feather name='user' size={20} color={COLORS.white} />)
        //                 }
        //                 return <Icons.Feather name={icon} size={20} color={COLORS.white} />;
        //                 // return icon;
        //             },
        //             tabBarStyle: {
        //                 backgroundColor: COLORS.lavenderPrimary,
        //             }
        //         })}
        //         tabBarOptions={{
        //             activeTintColor: COLORS.white,
        //             inactiveTintColor: COLORS.Gray800,
        //         }}
        //         initialRouteName='Home'
        //     >
        //         {/* <Tab.Screen name="Menu" component={SideMenuContainer} options={{ headerShown: false }} /> */}
        //         <Tab.Screen name="Home" component={HomeContainer} options={{
        //             headerShown: true,
        //             headerTitle: 'GuardeX',
        //             headerTitleAlign: 'center',
        //             headerTitleStyle: { color: COLORS.white, alignSelf: 'center', alignItems: 'center' },
        //             headerBackground: () => (<LinearGradient
        //                 style={{ flex: 1 }}
        //                 start={{ x: 0, y: 0 }}
        //                 end={{ x: 0, y: 1 }}
        //                 locations={[0.4, 1.1]}
        //                 colors={[COLORS.lavenderPrimary, COLORS.lavenderSecondary]}
        //             />
        //             ),
        //             headerLeft: () => (
        //                 <Pressable
        //                     onPress={() => {
        //                         navigation.navigate(SideMenuContainer)
        //                         // console.log("sidemenu press");
        //                     }}
        //                 // style={{ borderWidth: 0.5 }}
        //                 >
        //                     {/* <Icons.Feather name="menu" size={30} color={COLORS.white} /> */}
        //                     <Image
        //                         source={IMAGES.menu_line}
        //                         resizeMode='contain'
        //                         style={{ width: 30, height: 30, marginStart: 10 }}
        //                     />
        //                 </Pressable>
        //             ),
        //             headerRight: () => (
        //                 <Image
        //                     source={IMAGES.guardex_logo} style={{ width: 40, height: 40, marginRight: 10, tintColor: COLORS.white }} resizeMode='contain'
        //                 />
        //             )
        //         }} />
        //         <Tab.Screen name="Profile" component={ProfileContainer} options={{ headerShown: false }} />
        //     </Tab.Navigator>

        //     // </NavigationContainer>

    );

}

export default BottomNavigationBar;