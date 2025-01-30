//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Image, FlatList, Pressable, ActivityIndicator } from 'react-native';
import COLORS from '../../assets/Color';
import styles from './styles';
import { ApiUrls } from '../../service/Urls';
import { FontSize, FontWeight, WINDOW_WIDTH } from '../../utils/Constants';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import IMAGES from '../../assets/images/Images';
import { useNavigation } from '@react-navigation/native';
import { FireAndSmokeContainer, ProfileContainer, SideMenuContainer } from '../../container';
import { Icons } from '../../utils/Icons';

// create a component
const Home = (props) => {

    const { dashboardDetails, upcomingHolidays, latestFireAndSmoke, loading } = props;
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

    useEffect(() => {
        console.log("latestFireAndSmoke ----> ", latestFireAndSmoke);
    }, [latestFireAndSmoke])

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

    const renderFireAndSmokeList = ({ item }) => {
        return (
            <>
                <Pressable onPress={() => { _onPressViewVideo(item) }} style={{ padding: 0, marginVertical: 5, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBlockColor: COLORS.gray300 }}>
                    <View style={{ flex: 1, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        {/* {console.log("path ", item.label)} */}
                        {item?.image_path ?
                            <Image source={{ uri: item?.image_path }} resizeMode='stretch' style={{ width: 80, height: 50, borderRadius: 5, paddingVertical: 5 }} /> :
                            <Icons.MaterialCommunityIcons name='fire-alert' size={50} />}
                        <View style={{ flex: 0.9, }}>
                            <Text style={{ marginStart: 10, fontSize: 16, color: COLORS.black, bottom: 5 }} numberOfLines={1}> {item?.label.charAt(0).toUpperCase() + item?.label.slice(1)} </Text>
                            <Text style={{ marginStart: 10, fontSize: 12, color: COLORS.black }} numberOfLines={1}> {moment(item?.created_at).format('DD MMM YY hh:mm A')} </Text>
                        </View>
                    </View>
                    {/* <View style={{ flexDirection: 'row', gap: 6, marginRight: 7 }}>
                    </View> */}
                </Pressable>
            </>
        )
    }

    return (
        <View style={{ flex: 1, top: 0 }}>
            <View style={{ width: WINDOW_WIDTH, height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                <LinearGradient
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: 60, padding: 10 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    locations={[0.4, 1.1]}
                    colors={[COLORS.lavenderPrimary, COLORS.lavenderSecondary]}
                >
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
                </LinearGradient>
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

                {/* <View style={[{
                    flex: 1,
                    paddingVertical: 10,
                    marginHorizontal: 5,
                    marginTop: 10,
                    borderColor: COLORS.borederGray,
                    borderWidth: 0.5,
                    borderRadius: 5,
                    margin: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }]}>
                    {console.log("latestFireAndSmoke ", latestFireAndSmoke)}
                    {loading ?
                        <ActivityIndicator color={COLORS.lavenderPrimary} size={50} />
                        :

                        latestFireAndSmoke.map((item, index) => (
                            <>
                                <Pressable onPress={() => { _onPressViewVideo(item) }} style={{ padding: 0, marginVertical: 5, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBlockColor: COLORS.gray300 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                        {item?.image_path ?
                                            <Image source={{ uri: item?.image_path }} resizeMode='stretch' style={{ width: 80, height: 50, borderRadius: 5, paddingVertical: 5 }} /> :
                                            <Icons.MaterialCommunityIcons name='fire-alert' size={50} />}
                                        <View style={{ flex: 0.9, }}>
                                            <Text style={{ marginStart: 10, fontSize: 16, color: COLORS.black, bottom: 5 }} numberOfLines={1}> {item?.label.charAt(0).toUpperCase() + item?.label.slice(1)} </Text>
                                            <Text style={{ marginStart: 10, fontSize: 12, color: COLORS.black }} numberOfLines={1}> {moment(item?.created_at).format('DD MMM YY hh:mm A')} </Text>
                                        </View>
                                    </View>
                                </Pressable>
                            </>
                        ))
                    }
                </View> */}

                {/* Fire and Smoke */}
                <View style={[{
                    paddingVertical: 10,
                    marginHorizontal: 5,
                    marginTop: 10,
                    borderColor: COLORS.borederGray,
                    borderWidth: 0.5,
                    borderRadius: 5,
                    margin: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }]} >
                    <Pressable onPress={() => { navigation.navigate(FireAndSmokeContainer) }} style={{ alignItems: 'center' }} >
                        <Image source={IMAGES.view_course} style={{ width: 80, height: 80, }} resizeMode='center' />
                        <Text style={{ color: COLORS.black, fontSize: 16, marginBottom: 20 }}>{"Fire & Smoke Video List"}</Text>
                    </Pressable>
                </View>

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
            </ScrollView>
            <View style={{ flex: 0.08, backgroundColor: COLORS.lavenderPrimary, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={{ alignItems: 'center' }}>
                        <Icons.Feather name='home' size={20} color={COLORS.white} />
                        <Text style={{ color: COLORS.white, fontSize: 12, top: 5 }}>Home</Text>
                    </Pressable>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => { navigation.navigate(ProfileContainer) }}>
                        <Icons.Feather name='user' size={20} color={COLORS.white} />
                        <Text style={{ color: COLORS.white, fontSize: 12, top: 5 }}>Profile</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

//make this component available to the app
export default Home;
