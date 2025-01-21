//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChangePassword from '../../screens/Profile/ChangePassword';

// create a component
const ChangePasswordContainer = () => {

    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const [showNewPassword, setShowNewPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    return (
        <>
            <ChangePassword

            />
        </>
    );
};

//make this component available to the app
export default ChangePasswordContainer;
