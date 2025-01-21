//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import FireAndSmokeVideos from '../../screens/FireAndSmoke';
import { useNavigation } from '@react-navigation/native';
import { getFireAndSmokeLists } from '../../service/FireAndSmokeApiCall';
import { API_TOKEN } from '../../utils/Constants';
import COLORS from '../../assets/Color';

// create a component
const FireAndSmoke = () => {

    const navigation = useNavigation();
    const [fireAndSmokeList, setFireAndSmokeList] = useState();
    const [loading, setLoading] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState();

    useEffect(() => {
        getFireAndSmokeList();
    }, [])


    const getFireAndSmokeList = async () => {
        setLoading(true);
        try {
            const fireAndSmokeListReq = {
                "api_key": API_TOKEN,
            }
            console.log("container page F&S req => ", fireAndSmokeListReq);
            const fsRes = await getFireAndSmokeLists(fireAndSmokeListReq);
            console.log("container page F&S res => ", fsRes);

            if (fsRes.status == 'success') {
                setFireAndSmokeList(fsRes.fire_smoke_videos);
                setLoading(false);
            } else {
                setLoading(false);
                Toast.showMessage(fsRes.status);
                console.log(fsRes.status);
            }

        } catch (error) {
            console.log("getFireAndSmokeList error ", error);
        }
    }

    const _onPressViewVideo = async (video) => {
        console.log("view video pressed", video);
        setSelectedVideo(video);
        // navigation.navigate(ScreenNames.FIREANDSMOKEVIDEO, { videoDetails: video })
        setIsModalVisible(!isModalVisible);
    }

    const closePopupRequest = async () => {
        console.log("closePopupRequest");
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>
            {loading ?
                <View style={{ backgroundColor: COLORS.white, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color={COLORS.lavenderPrimary} size={50} />
                </View>
                :
                <FireAndSmokeVideos
                    fireAndSmokeListData={fireAndSmokeList}
                    _onPressViewVideo={_onPressViewVideo}
                    isModalVisible={isModalVisible}
                    closePopupRequest={closePopupRequest}
                    selectedVideo={selectedVideo}
                />
            }
        </>
    );
};

//make this component available to the app
export default FireAndSmoke;
