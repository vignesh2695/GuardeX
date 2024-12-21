import messaging from "@react-native-firebase/messaging";
import { getFcmToken, putFcmToken } from "../../dataStorage/dataStorage";


export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus == messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus == messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getTheFcmToken();
    }
}

const getTheFcmToken = async () => {

    let fcmToken = await getFcmToken();
    console.log("Old FCM Token", fcmToken);

    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log("New FCM Token", fcmToken);
                putFcmToken(fcmToken);
            }
        } catch (error) {
            console.log("Error on Notification Service Page getTheFCMToken ", error);
        }
    }

}

export const NotificationServices = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });
    //foreground Message Handling
    messaging().onMessage(async remoteMessage => {
        console.log('Notification in foreground', remoteMessage);
    });
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        });
}