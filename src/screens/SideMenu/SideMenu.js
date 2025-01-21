//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native';
import COLORS from '../../assets/Color';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../utils/Icons';
import IMAGES from '../../assets/images/Images';
import { WINDOW_WIDTH } from '../../utils/Constants';

// create a component
const SideMenuScreen = (props) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: COLORS.white }}>
            <Pressable onPress={() => navigation.goBack()}>
                <Icons.AntDesign name="closecircleo" size={30} color={COLORS.gray100} style={{ position: 'absolute', right: 0, top: 0 }} />
            </Pressable>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                <Image source={IMAGES.user} resizeMode='contain' style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: COLORS.lavenderSecondary }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ padding: 5 }}>
                    <Pressable
                        onPress={() => { props._ProfileHandler() }}
                        style={{ flexDirection: 'row', gap: 20, padding: 15 }}>
                        <Icons.FontAwesome5 name='user-alt' size={15} color={COLORS.lavenderPrimary} />
                        <Text style={{ color: COLORS.black }}>My Profile</Text>
                    </Pressable>
                    {/* <Pressable style={{ flexDirection: 'row', gap: 20, padding: 15, borderWidth: 0.5 }} onPress={() => { props._changePasswordHandler() }}>
                        <Icons.MaterialCommunityIcons name='shield-key' size={15} color={COLORS.lavenderPrimary} />
                        <Text style={{ color: COLORS.black }}>Change Password</Text>
                    </Pressable> */}
                    <Pressable
                        onPress={() => {
                            props._logoutHandler()
                            // console.log("logout press")
                        }}
                        style={{ flexDirection: 'row', gap: 20, padding: 15 }}>
                        <Icons.AntDesign name='logout' size={15} color={COLORS.lavenderPrimary} />
                        <Text style={{ color: COLORS.black }}>Logout</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={{ width: WINDOW_WIDTH / 1.2, height: 2, backgroundColor: COLORS.borederGray, alignSelf: 'center' }} />
                    <View style={{ padding: 10, alignItems: 'center' }}>
                        <Text style={{ color: COLORS.txtGray, fontSize: 12 }}>{`Version 1.0`}</Text>
                        <Text style={{ color: COLORS.txtGray, fontSize: 12 }}>{`Copyright© ${new Date().getFullYear()}. www.guardex.com`}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default SideMenuScreen;
