import {ToastAndroid, Platform, Alert} from 'react-native';
import {isAndroid} from './Constants';

const Toast = {
  showMessage: (msg, okCallBack) => {
    if (isAndroid) {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      Alert.alert('', msg, [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
            if (okCallBack) {
              okCallBack();
            }
          },
        },
      ]);
    }
  },

  showAlert: (title, msg) => {
    Alert.alert(
      title,
      msg,
      [
        // {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: () => console.log('ok')},
      ],
      {cancelable: false},
    );
  },

  // showAlert: (title, msg, okCallBack) => {
  //   Alert.alert(
  //     title,
  //     msg,
  //     [
  //       // {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
  //       {text: 'OK', onPress: ()=>{
  //         okCallBack()
  //       }},
  //     ],
  //     { cancelable: false }
  //   )
  // }
};

export default Toast;
