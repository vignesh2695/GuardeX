//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, SafeAreaView } from 'react-native';
import COLORS from '../../assets/Color';
import moment from 'moment';
import { WINDOW_WIDTH } from '../../utils/Constants';
import { Modal } from 'react-native-paper';
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
import Video from 'react-native-video';
import { Icons } from '../../utils/Icons';

// create a component
const FireAndSmokeVideos = (props) => {

    const { fireAndSmokeListData, _onPressViewVideo, selectedVideo, isModalVisible, closePopupRequest } = props;
    const videoPlayer = useRef();

    const renderFireAndSmokeList = ({ item }) => {
        return (
            <>
                <Pressable onPress={() => { _onPressViewVideo(item) }} style={{ borderWidth: 0, borderRadius: 4, padding: 0, marginVertical: 5, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBlockColor: COLORS.gray300 }}>
                    <View style={{ flex: 1, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        {/* {console.log("path ", item.label)} */}
                        <Image source={{ uri: item?.image_path }} resizeMode='contain' style={{ width: 60, height: 60, }} />
                        <View style={{ flex: 0.9, }}>
                            <Text style={{ marginStart: 10, fontSize: 20, color: COLORS.black }} numberOfLines={1}> {item?.label} </Text>
                            <Text style={{ marginStart: 10, fontSize: 12, color: COLORS.black }} numberOfLines={1}> {moment(item?.created_at).format('DD MMM YY hh:mm A')} </Text>
                        </View>
                    </View>
                    {/* <View style={{ flexDirection: 'row', gap: 6, marginRight: 7 }}>
                    </View> */}
                </Pressable>
            </>
        )
    }

    const videoModel = () => {
        console.log("selectedVideo ", selectedVideo);
        return (
            <Modal
                visible={isModalVisible}
                contentContainerStyle={{ padding: 20, alignItems: 'center' }}
                onDismiss={closePopupRequest}
                dismissable={true}
                dismissableBackButton={true}
            >
                <SafeAreaView style={{ height: WINDOW_WIDTH / 2, width: WINDOW_WIDTH - 20, backgroundColor: COLORS.white, alignItems: 'center', padding: 20 }}>
                    <>
                        <View style={{ width: WINDOW_WIDTH - 20, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Pressable onPress={() => closePopupRequest()}>
                                <Icons.AntDesign name="closecircleo" size={20} color={COLORS.gray300} style={{ right: 20 }} />
                            </Pressable>
                        </View>
                        <Text style={{ fontSize: 18, color: COLORS.black, bottom: 20 }}>{selectedVideo?.label}</Text>
                        <Video
                            ref={ref => (videoPlayer.current = ref)}
                            source={{ uri: selectedVideo?.video_path }}
                            paused={false}
                            controls
                            width="auto"
                            // crop="scale"
                            style={{
                                flex: 1, width: WINDOW_WIDTH - 30, position: 'relative',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                            }}
                        />
                    </>
                </SafeAreaView>
            </Modal>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={fireAndSmokeListData}
                showsVerticalScrollIndicator={false}
                renderItem={renderFireAndSmokeList}
            />
            {videoModel()}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
});

//make this component available to the app
export default FireAndSmokeVideos;
