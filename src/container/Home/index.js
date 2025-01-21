//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../../screens/Home';
import { CommonActions, useIsFocused, useNavigation } from '@react-navigation/native';
import { API_TOKEN } from '../../utils/Constants';
import { GetUserToken, PutUserDetails, PutUserToken } from '../../dataStorage/dataStorage';
import { DashboardApiCall } from '../../service/DashboardApiCall';
import Toast from '../../utils/Toast';
import { getFireAndSmokeLists } from '../../service/FireAndSmokeApiCall';

// create a component
const Index = () => {

    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [dashboardDetailsData, setDashboardDetailsData] = useState();
    const [dashboardHolidays, setDashboardHolidays] = useState();
    const [latestFireAndSmoke, setLatestFireAndSmoke] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        getDashboardDetails();
        getLatestVideoList();
    }, [isFocused])

    const getDashboardDetails = async () => {
        console.log("getDashboardDetails");
        const dashboardDetailsReq = {
            "api_key": API_TOKEN,
            "token": await GetUserToken()
        }

        // console.log("dashboardDetailsReq => ", dashboardDetailsReq);
        const dashboardRes = await DashboardApiCall(dashboardDetailsReq);
        // console.log("dashboardRes => ", JSON.stringify(dashboardRes));
        if (dashboardRes.status == 'success') {
            setDashboardDetailsData(dashboardRes.profile_details);
            setDashboardHolidays(dashboardRes.holidays)
        } else if (dashboardRes?.status == false && dashboardRes?.error == 'Invalid token') {
            console.log("Invalid token");
            Toast.showMessage("Please Login again");
            PutUserToken('');
            PutUserDetails('');
            Toast.showMessage(logoutResponse.message);
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'LoginContainer' }]
                })
            );
        }
    }

    const getLatestVideoList = async () => {
        console.log("getLatestVideoList");
        setLoading(false);
        try {
            const latestFireAndSmokeListReq = {
                "api_key": API_TOKEN
            }
            console.log("container page latest F&S req => ", latestFireAndSmokeListReq);
            const latestFsRes = await getFireAndSmokeLists(latestFireAndSmokeListReq);
            console.log("latestFsRes => ", latestFsRes);

            if (latestFsRes.status == 'status' ) {
                setLatestFireAndSmoke(latestFsRes.fire_smoke_videos);
                setLoading(false);
            }
            console.log("ddddd ", latestFireAndSmoke);
        } catch (error) {
            console.log("getLatestFireAndSmokeList error ", error);
        }
    }

    return (
        <>
        {console.log("latestFireAndSmoke.....> ", latestFireAndSmoke)}
            <Home
                dashboardDetails={dashboardDetailsData}
                upcomingHolidays={dashboardHolidays}
                latestFireAndSmoke={latestFireAndSmoke}
                loading={loading}
            />
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Index;
