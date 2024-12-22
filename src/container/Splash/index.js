//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Splash from '../../screens/Splash';
import { CommonActions } from '@react-navigation/native';
import { GetUserToken } from '../../dataStorage/dataStorage';

// create a component
const Index = ({ navigation, props }) => {

    const [startNav, setStartNav] = useState(false);

    useEffect(() => {
        if (startNav) {
            setTimeout(async () => {
                // console.log("Timmer Check");
                var userToken = await GetUserToken();

                if (userToken) {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'HomeContainer', screen: 'HomeContainer'}]
                            // routes: [{ name: 'BottomStack', screen: 'BottomStack' }]
                        })
                    )
                } else {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'LoginContainer', screen: 'LoginContainer' }]
                        })
                    )
                }
                
            }, 1000)
        }
    }, [startNav])

    return (
        <>
            <Splash
                startNav={startNav}
                setStartNav={setStartNav}
            />
        </>
    );
};

//make this component available to the app
export default Index;
