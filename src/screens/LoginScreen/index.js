//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Pressable, ActivityIndicator } from 'react-native';
import styles from './styles';
import IMAGES from '../../assets/images/Images';
import COLORS from '../../assets/Color';
import { Icons } from '../../utils/Icons';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const Login = (props) => {

    const mobileRef = useRef();
    const passwordRef = useRef();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center', paddingVertical: 30 }}>
                        <Text style={[styles.title, { bottom: 50 }]}>GuardeX</Text>
                        <Image source={IMAGES.guardex_logo} resizeMode='contain' style={styles.logoContainer} />
                        <View style={[styles.inputContainer,]}>
                            <Text style={styles.headingText}>Mobile</Text>
                            <TextInput
                                ref={mobileRef}
                                style={[styles.InputStyle, { borderBottomWidth: 1, borderBottomColor: COLORS.lavenderPrimary }]}
                                value={props.mobileNo}
                                onChangeText={mobileNo => props.setMobileNo(mobileNo)}
                                placeholder="99999999"
                                placeholderTextColor={COLORS.Gray500}
                                keyboardType="numeric"
                                inputMode='numeric'
                                autoCapitalize='none'
                                maxLength={8}
                            />
                        </View>
                        <View
                            style={[styles.inputContainer, { marginTop: 30 }]}
                        >
                            <Text style={styles.headingText}>Password</Text>
                            <View style={styles.passwordInput}>
                                <TextInput
                                    ref={passwordRef}
                                    style={styles.InputStyle}
                                    value={props.password}
                                    onChangeText={(text) => props.setPassword(text)}
                                    textContentType="password"
                                    placeholder="***********"
                                    placeholderTextColor={COLORS.Gray500}
                                    secureTextEntry={props.showPassword}
                                    autoCapitalize='none'
                                />
                                <Icons.Feather name={props.showPassword ? 'eye' : 'eye-off'} size={25} color={COLORS.Gray500} onPress={() => props.passwordVisibility()} />
                            </View>
                        </View>
                        <View style={styles.EventContainer}>
                            {props.loading ?
                                <View>
                                    <ActivityIndicator size="large" color={COLORS.lavenderPrimary} />
                                </View> :
                                <Pressable style={{ flex: 1, height: 50, justifyContent: 'center' }} onPress={() => { props.onPress() }} activeOpacity={0.6}>
                                    <LinearGradient
                                        colors={[COLORS.lavenderPrimary, COLORS.lavenderPrimary]}
                                        style={styles.ActionStyle}
                                    >
                                        <Text style={styles.buttonText}>Login</Text>
                                    </LinearGradient>
                                </Pressable>
                            }

                        </View>
                    </View>
                </View>
                {/* <Text>Login</Text> */}
            </View>
        </ScrollView>
    );
};

//make this component available to the app
export default Login;
