import React from 'react';
import {
    Alert,
    Animated,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import COLORS from './assets/Color';
import { HomeContainer } from './container';
import { Icons } from './utils/Icons';

const Screen1 = () => {
    return <View style={styles.screen1} />;
};

const Screen2 = () => {
    return <View style={styles.screen2} />;
};

export default function BottomStack() {

    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <Pressable>
                {_renderIcon(routeName, selectedTab)}
            </Pressable>
        )
    }

    const _renderIcon = (routeName, selectedTab) => {
        let icon = '';

        switch (routeName) {
            case 'title1':
                icon = 'ios-home-outline';
                break;
            case 'title2':
                icon = 'settings-outline';
                break;
        }

        return (
            <Icons.FontAwesome5
                name={icon}
                size={25}
                color={routeName === selectedTab ? 'black' : 'gray'}
            />
        );
    };

    return (
        // <NavigationContainer>
            <CurvedBottomBar.Navigator
                type="DOWN"
                style={styles.bottomBar}
                shadowStyle={styles.shawdow}
                height={60}
                circleWidth={60}
                bgColor={COLORS.lavenderPrimary}
                initialRouteName={HomeContainer}
                borderTopLeftRight
                renderCircle={({ selectedTab, navigate }) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <Pressable>
                            <Icons.FontAwesome5 name='home' onPress={() => Alert.alert('Click Action')} />
                        </Pressable>
                    </Animated.View>
                )}
                tabBar={renderTabBar}
            >

                <CurvedBottomBar.Screen
                    name="Home"
                    position="LEFT"
                    // component={() => <Screen1 />}
                    component={HomeContainer}
                />
                <CurvedBottomBar.Screen
                    name="title2"
                    // component={() => <Screen2 />}
                    component={HomeContainer}
                    position="RIGHT"
                />

            </CurvedBottomBar.Navigator>
        // </NavigationContainer>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomBar: {},
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'gray',
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 30,
        height: 30,
    },
    screen1: {
        flex: 1,
        backgroundColor: '#BFEFFF',
    },
    screen2: {
        flex: 1,
        backgroundColor: '#FFEBCD',
    },
});