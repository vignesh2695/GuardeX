//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../../screens/Home';
import { useIsFocused } from '@react-navigation/native';
import { API_TOKEN } from '../../utils/Constants';
import { GetUserToken } from '../../dataStorage/dataStorage';
import { DashboardApiCall } from '../../service/DashboardApiCall';

// create a component
const Index = () => {

    const isFocused = useIsFocused();
    const [dashboardDetailsData, setDashboardDetailsData] = useState();
    const [dashboardHolidays, setDashboardHolidays] = useState();

    useEffect(() => {
        getDashboardDetails();
    }, [isFocused])

    const getDashboardDetails = async () => {
        console.log("getDashboardDetails");
        const dashboardDetailsReq = {
            "api_key": API_TOKEN,
            "token": await GetUserToken()
        }

        console.log("dashboardDetailsReq => ", dashboardDetailsReq);
        const dashboardRes = await DashboardApiCall(dashboardDetailsReq);
        console.log("dashboardRes => ", JSON.stringify(dashboardRes.profile_details));
        if (dashboardRes.status == 'success') {
            setDashboardDetailsData(dashboardRes.profile_details);
            setDashboardHolidays(dashboardRes.holidays)
        }
    }

    return (
        <>
            <Home
                dashboardDetails={dashboardDetailsData}
                upcomingHolidays={dashboardHolidays}
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
