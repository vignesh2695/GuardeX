//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './styles';
import COLORS from '../../assets/Color';
import IMAGES from '../../assets/images/Images';

// create a component
const Splash = (props) => {

    setTimeout(() => {
        props.setStartNav(true);
    }, 1000)

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container, { backgroundColor: COLORS.lavenderPrimary }]}>
                <Image source={IMAGES.guardex_logo} resizeMode='cover' style={styles.logoContainer} />
                <Text style={styles.title}>GuardeX</Text>
            </View>
        </View>
    );
};

//make this component available to the app
export default Splash;
