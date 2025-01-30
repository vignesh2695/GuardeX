import messaging from "@react-native-firebase/messaging";
import { getFcmToken, putFcmToken } from "../../dataStorage/dataStorage";
import PushNotification from 'react-native-push-notification';
import { showMessage } from "react-native-flash-message";

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
        showNotification(remoteMessage);
    });
    // messaging().setBackgroundMessageHandler(async remoteMessage => {
    //     console.log('Notification in background', remoteMessage);
    //     showNotification(remoteMessage);
    // })
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

export const showNotification = async remoteMessage => {
    console.log('showNotification called');
    const { notification, messageId } = remoteMessage;

    console.log('Notification is: ', notification);

    showMessage({
        message: notification.title,
        description: notification.body,
        type: "info"
    })

    // PushNotification.configure({
    //     onNotification: function (notification) {
    //         console.log("Notification received: ", notification);

    //         PushNotification.localNotification({
    //             channelId: "com.guardex",
    //             title: "GuardeX",
    //             notificationMessage: notification.body
    //         });
    //     },
    //     popInitialNotification: true,
    //     requestPermissions: true,
    // })

    // PushNotification.createChannel(
    //     {
    //         channelId: 'com.guardex', // (required)
    //         channelName: 'GuardeX', // (required)
    //         //channelDescription: 'WowTruck Notifications', // (optional) default: undefined.
    //         //playSound: true, // (optional) default: true
    //         //soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    //         //importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    //         //vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    //     },
    //     created => console.log(`createChannel returned '${created}'`),
    // );
    // PushNotification.localNotification({
    //     id: randomNumber(),
    //     channelId: 'com.guardex',
    //     messageId: messageId,
    //     title: notification.title,
    //     message: notification.body,
    //     soundName: 'default',
    //     vibrate: true,
    //     playSound: true,
    //     showWhen: true,
    //     autoCancel: true,
    //     allowWhileIdle: true,
    //     invokeApp: true,
    // });

}

export const randomNumber = () => {
    var num = 0;
    num = Math.floor(Math.random() * 90000) + 10000;
    return num;
}