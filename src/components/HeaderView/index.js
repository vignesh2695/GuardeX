//import liraries
import React, { Component } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { Icons } from '../../utils/Icons';
import COLORS from '../../assets/Color';

// create a component
const HeaderView = (props) => {
    return (
        <View style={styles.headerView}>
            <View style={styles.menuContainer}>
                <Pressable >
                    <Icons.Feather name="menu" size={30} color={COLORS.white} />
                </Pressable>
            </View>
            <Text>HeaderView</Text>
        </View>
    );
};

//make this component available to the app
export default HeaderView;
