import NetworkUtils from "../utils/NetworkUtils";
import messaging from "@react-native-firebase/messaging";
import { postAPI } from "./Networking";
import { API_TOKEN } from "../utils/Constants";
import { getFcmToken, GetUserToken } from "../dataStorage/dataStorage";

// for login call
export const LoginApiCall = async (emailId, password) => {
    try {
        if (await NetworkUtils.isNetworkAvailable()) {
            const requestData = {
                "api_key": API_TOKEN,
                "username": emailId,
                "password": password,
                "device_id": "test",
                "fcm_id": await getFcmToken()
            }
            const resultResponse = await postAPI("api/login", requestData, false);
            // console.log("resultResponse ", resultResponse);
            return resultResponse;
        } else {
            console.log("network error ")
            return null;
        }
    } catch (e) {
        console.error(e);
    }
};

export const LogoutApiCall = async () => {
    console.log("LogoutApiCall");
    try {
        if (await NetworkUtils.isNetworkAvailable()) {
            const requestData = {
                "api_key": API_TOKEN,
                "token": await GetUserToken()
            }

            const logoutResponse = await postAPI("api/logout", requestData, false);
            // console.log("logoutResponse ", JSON.stringify(logoutResponse));
            
            if (logoutResponse.status == "success") {
                return logoutResponse;
            } else {
                return null;
            }
        }
    } catch (e) {
        console.log(e);
    }
}