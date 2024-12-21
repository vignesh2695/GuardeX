//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SideMenuScreen from '../../screens/SideMenu/SideMenu';
import { LogoutApiCall } from '../../service/LoginApiCall';
import { PutUserDetails, PutUserToken } from '../../dataStorage/dataStorage';
import Toast from '../../utils/Toast';
import { CommonActions, useNavigation } from '@react-navigation/native';

// create a component
const SideMenu = () => {

    const navigation = useNavigation();

    const _ProfileHandler = async () => {
        console.log("_changePasswordHandler ");
        // navigation.navigate(ScreenNames.PROFILE);
    }

    const logoutHandler = async () => {
        console.log('Logout button clicked');
        const logoutResponse = await LogoutApiCall();
        console.log("logoutResponse => ", logoutResponse);

        if (logoutResponse.status == 'success') {
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

    return (
        <>
            <SideMenuScreen
                _logoutHandler={logoutHandler}
                // _changePasswordHandler={_changePasswordHandler}
                _ProfileHandler={_ProfileHandler}
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
export default SideMenu;
