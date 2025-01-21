//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from '../../screens/LoginScreen';
import { LoginApiCall } from '../../service/LoginApiCall';
import { PutUserDetails, PutUserToken } from '../../dataStorage/dataStorage';
import Toast from '../../utils/Toast';
import { CommonActions } from '@react-navigation/native';

// create a component
const Index = ({navigation, props}) => {

    const [mobileNo, setMobileNo] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    const visiblePassword = () => {
        setShowPassword(!showPassword);
    }

    const loginHandler = async () => {
        console.log("loginHandler pressed");
        console.log("mobileNo: ", mobileNo, " password: ", password);

        if (mobileNo != '' && password != '') {
            console.log("not Empty");
            if (/^\d{8}$/.test(mobileNo)) {
                console.log("valid");
                setLoading(true);
                let loginRes = await LoginApiCall(mobileNo, password);
                console.log("loginRes: ", loginRes);
                setLoading(false);

                if (loginRes.status == true) {
                    let userDetails = {};
                    userDetails.token = loginRes.data.token;
                    PutUserDetails(JSON.stringify(loginRes));
                    PutUserToken(loginRes.data.token);
                    console.log("api key from Login Container ", loginRes.data.token);
                    console.log("res message from Login Container ", loginRes.message);
                    Toast.showMessage(loginRes.message);

                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'HomeContainer', screen: 'HomeContainer' }]
                            // routes: [{ name: 'BottomNavigationBar', screen: 'BottomNavigationBar' }]
                        })
                    );
                } else {
                    Toast.showMessage(loginRes.error);
                }
            } else {
                console.log("invalid");
                Toast.showMessage("Please enter valid Mobile Number");
            }
        } else {
            console.log("Empty values");
            Toast.showMessage("Empty values");
        }
    }

    return (
        <>
            <Login
                setMobileNo={mobileNo => setMobileNo(mobileNo)}
                setPassword={password => setPassword(password)}
                onPress={loginHandler}
                loading={loading}
                passwordVisibility={visiblePassword}
                showPassword={showPassword}
            />
        </>
    );
};

//make this component available to the app
export default Index;
