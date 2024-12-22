//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Image, FlatList, Pressable } from 'react-native';
import COLORS from '../../assets/Color';
import styles from './styles';
import { ApiUrls } from '../../service/Urls';
import { FontSize, FontWeight, WINDOW_WIDTH } from '../../utils/Constants';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import IMAGES from '../../assets/images/Images';
import { useNavigation } from '@react-navigation/native';
import { FireAndSmokeContainer, SideMenuContainer } from '../../container';
import { Icons } from '../../utils/Icons';

// create a component
const Home = (props) => {

    const { dashboardDetails, upcomingHolidays, getMeToFireAndVideos } = props;
    const [showProfile, setShowProfile] = useState(false);
    const navigation = useNavigation();


    useEffect(() => {
        if (dashboardDetails !== undefined) {
            if (Object.keys(dashboardDetails).length > 0) {
                setShowProfile(true);
            } else {
                setShowProfile(false);
            }
        }
    }, [dashboardDetails])

    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 900,
                useNativeDriver: true,
            },
        ).start();
    }, [fadeAnim]);

    const maskString = (str) => {
        let mask = 'X'
        let masked = mask.repeat(str?.length - 4) + str?.slice(-4)
        console.log(masked)
        return masked
    }

    const formatDate = (originalDateString) => {
        const formattedDateString = moment(originalDateString).format('DD MMM YYYY, dddd')
        return formattedDateString
    }


    return (
        <View style={{ backgroundColor: COLORS.lavenderPrimary, flex: 1, top: 0 }}>
            <View style={{ width: WINDOW_WIDTH, height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Pressable style={{ width: 40, }} onPress={() => { 
                        // console.log("sidemenu pressed")
                        navigation.navigate(SideMenuContainer);
                        }}>
                        <Icons.Feather name="menu" size={30} color={COLORS.white} />
                    </Pressable>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: FontSize.large, fontWeight: FontWeight.medium, color: COLORS.white }}>GuardeX</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Image source={IMAGES.guardex_logo} style={{ width: 30, height: 30, tintColor: COLORS.white }} />
                </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container} showsVerticalScrollIndicator={false}>
                {/* Profile card */}
                {showProfile && (
                    <Animated.View style={[styles.profileCard, { opacity: fadeAnim, borderWidth: 0.5 }]}>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "70%" }}>
                                <Text style={{ color: COLORS.black, fontSize: 15, fontWeight: "bold" }}>{dashboardDetails?.company?.company_name}</Text>
                                <Text style={{ color: COLORS.lavenderPrimary, fontSize: 12, fontWeight: "bold", marginTop: 20 }}>{dashboardDetails?.emp_name}</Text>
                                <Text style={{ color: COLORS.gray1, fontSize: 11, marginTop: 0 }}>{dashboardDetails?.role?.role_name}</Text>
                                <Text style={{ color: COLORS.gray1, fontSize: 11, marginTop: 0 }}>{"NRIC NO : " + maskString(dashboardDetails?.emp_icnumber)}</Text>
                            </View>
                            <View style={{ alignSelf: "flex-end", width: "30%" }}>
                                {/* <Image source={IMAGES.profile_image} style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: COLORS.lavenderSecondary, padding: 4 }} resizeMode='contain' /> */}
                                <Image source={{ uri: dashboardDetails?.photo_path }} style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: COLORS.lavenderSecondary, padding: 4 }} resizeMode='contain' />
                            </View>
                        </View>
                    </Animated.View>
                )}

                {/* Fire and Smoke */}
                <Pressable style={[{
                    flex: 1,
                    paddingVertical: 10,
                    marginHorizontal: 5,
                    marginTop: 10,
                    borderColor: COLORS.borederGray,
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 10,
                    // flexDirection: 'row',
                    // gap: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: WINDOW_WIDTH
                }]}
                    onPress={() => { navigation.navigate(FireAndSmokeContainer) }}>
                    <Image source={IMAGES.view_course} style={{ width: 100, height: 100, }} />
                    <Text style={{ color: COLORS.black, fontSize: 16 }}>{"Fire & Smoke Video List"}</Text>
                </Pressable>

                {/**Holidayyyy */}
                <View style={{ width: WINDOW_WIDTH, paddingHorizontal: 10, marginVertical: 10, marginBottom: 60 }}>
                    <Text style={{ color: COLORS.lavenderPrimary, fontSize: 12 }}>Upcoming Holidays</Text>
                    <FlatList
                        data={upcomingHolidays}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
                                    width: upcomingHolidays.length == 1 ? WINDOW_WIDTH : WINDOW_WIDTH - 40,
                                    borderRadius: 10,
                                    marginBottom: 5,
                                    marginEnd: 5,
                                    borderWidth: 1,

                                    borderColor: COLORS.borederGray,
                                    display: item.is_active == 1 ? 'flex' : 'none'
                                }}>
                                <Pressable>
                                    <LinearGradient
                                        colors={[COLORS.lavenderPrimary, COLORS.white]}
                                        style={{ padding: 10, marginStart: 0, borderRadius: 10 }}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}

                                    >
                                        <Text style={{ color: COLORS.white }}>{item.holiday_name}</Text>
                                        <View style={{ marginTop: 50 }}>
                                            {/* <Text style={{ color: COLORS.black }}>{item.name}</Text> */}
                                            <Text style={{ color: COLORS.white }}>{formatDate(item.holiday_date)}</Text>
                                        </View>
                                    </LinearGradient>

                                </Pressable>
                            </View>
                        )}
                        //numColumns={1}
                        style={{ marginVertical: 10, padding: 0 }}
                    />
                </View>
                <View style={{ flex: 0.3, backgroundColor: COLORS.lavenderPrimary, height: 40, position: 'absolute', borderWidth: 0.5 }}>

                </View>
            </ScrollView>
        </View>
    );
};

//make this component available to the app
export default Home;
