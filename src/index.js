import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ChangePasswordContainer, FireAndSmokeContainer, HomeContainer, LoginContainer, ProfileContainer, SideMenuContainer, SplashContainer } from "./container";
import COLORS from "./assets/Color";
import BottomStack from "./BottomStack";
import LinearGradient from "react-native-linear-gradient";
import { Image, Pressable, View } from "react-native";
import IMAGES from "./assets/images/Images";
import { useNavigation } from "@react-navigation/native";
import { Icons } from "./utils/Icons";
import BottomNavigationBar from "./BottomNavigationBar";

const Stack = createNativeStackNavigator();

const IStack = () => {

    const navigation = useNavigation();

    return (
        <Stack.Navigator screenOptions={{
            statusBarHidden: false,
            navigationBarHidden: false,
            statusBarBackgroundColor: COLORS.lavenderPrimary,
            headerTitleStyle: { color: COLORS.white },
            headerTintColor: COLORS.white,
            headerTitleAlign: 'center'
        }}
            initialRouteName="SplashContainer"
        >
            <Stack.Screen name='SplashContainer' component={SplashContainer} options={{ headerShown: false }} />
            <Stack.Screen name='LoginContainer' component={LoginContainer} options={{ headerShown: false }} />
            <Stack.Screen name='BottomStack' component={BottomStack} options={{ headerShown: false }} />
            <Stack.Screen name='BottomNavigationBar' component={BottomNavigationBar} options={{ headerShown: false }} />
            <Stack.Screen name='HomeContainer' component={HomeContainer} options={{
                headerShown: false,
                // headerShown: true,
                // headerTitle: 'GuardeX',
                // headerBackground: () => (<LinearGradient
                //     style={{ flex: 1 }}
                //     start={{ x: 0, y: 0 }}
                //     end={{ x: 0, y: 1 }}
                //     locations={[0.4, 1.1]}
                //     colors={[COLORS.lavenderPrimary, COLORS.lavenderSecondary]}
                // />
                // ),
                // headerLeft: () => (
                //     <Pressable
                //         onPress={() => {
                //             navigation.navigate(SideMenuContainer)
                //             // console.log("sidemenu press");
                //         }}
                //     // style={{ borderWidth: 0.5 }}
                //     >
                //         {/* <Icons.Feather name="menu" size={30} color={COLORS.white} /> */}
                //         <Image
                //             source={IMAGES.menu_line}
                //             resizeMode='contain'
                //             style={{ width: 30, height: 30, }}
                //         />
                //     </Pressable>
                // ),
                // headerRight: () => (
                //     <Image
                //         source={IMAGES.guardex_logo} style={{ width: 40, height: 40, marginRight: 10, tintColor: COLORS.white }} resizeMode='contain'
                //     />
                // )
            }} />

            <Stack.Screen name='SideMenu' component={SideMenuContainer} options={{
                headerShown: false,
                animation: 'slide_from_left'
            }} />

            <Stack.Screen name="FireAndSmoke" component={FireAndSmokeContainer}
                options={{
                    headerShown: true,
                    animation: 'fade',
                    title: 'Fire & Smoke Videos',
                    headerBackground: () => (<View style={{ flex: 1, backgroundColor: COLORS.lavenderPrimary }} />)
                }}
            />
            <Stack.Screen name="ChangePassword" component={ChangePasswordContainer}
                options={{
                    headerShown: true,
                    animation: 'fade',
                    title: 'Change Password',
                    headerBackground: () => (<View style={{ flex: 1, backgroundColor: COLORS.lavenderPrimary }} />)
                }}
            />
            <Stack.Screen name="ProfileContainer" component={ProfileContainer}
                options={{
                    headerShown: true,
                    animation: 'fade',
                    title: 'Profile',
                    headerBackground: () => (<View style={{ flex: 1, backgroundColor: COLORS.lavenderPrimary }} />)
                }}
            />

        </Stack.Navigator>
    )

}

export default IStack;