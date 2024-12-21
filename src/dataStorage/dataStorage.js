import AsyncStorage from "@react-native-async-storage/async-storage";

const fcmToken = 'fcmToken';
const UserToken = 'UserToken';
const UserDetails = 'UserDetails';

const StoreData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log("Error on StoreData ", error);
    }
}

const GetData = async key => {
    try {
        var value = await AsyncStorage.getItem(key);

        if (value !== null) {
            return value;
        } else {
            return '';
        }
    } catch (error) {
        console.log("Error on GetData ", error);
    }
}

export const putFcmToken = fcmtoken => {
    StoreData(fcmToken, fcmtoken);
}

export const getFcmToken = () => {
    return GetData(fcmToken);
}

export const PutUserToken = userToken => {
    StoreData(UserToken, userToken);
}

export const GetUserToken = () => {
    return GetData(UserToken);
}

export const PutUserDetails = userDetails => {
    StoreData(UserDetails, userDetails);
}

export const GetUserDetails = () => {
    return GetData(UserDetails);
}
