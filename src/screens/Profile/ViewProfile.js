//import liraries
import React, { Component, useState } from 'react';
import { View, Text, ScrollView, ImageBackground, Pressable, Image } from 'react-native';
import COLORS from '../../assets/Color';
import styles from './styles';
import { ApiUrls } from '../../service/Urls';
import IMAGES from '../../assets/images/Images';
import { Family } from '../../utils/Constants';
import { Card, TextInput } from 'react-native-paper';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

// create a component
const ViewProfile = (props) => {

    const [editable, setEditable] = useState(false);
    const [isDatePickerEnable, setDatePickerEnable] = useState(false);

    const maskString = (str) => {
        console.log("String length => ", str.length)
        let mask = 'X'
        let masked = !str.length == 0 && mask.repeat(str.length - 4) + str.slice(-4)
        console.log(masked)
        return masked
    }

    return (
        <View style={{ backgroundColor: COLORS.white, flex: 1, padding: 10 }}>
            <ScrollView bounces={false} style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 20 }}>
                    <View>
                        <ImageBackground
                            source={{ uri: props.image }}
                            resizeMethod='contain'
                            imageStyle={{
                                borderRadius: 50,
                                borderColor: COLORS.lavenderPrimary,
                                borderWidth: 4
                            }}
                            style={styles.profileImage}
                        >
                            <Pressable
                                onPress={() => props.selectImage()}
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    backgroundColor: COLORS.white,
                                    padding: 4,
                                    borderRadius: 10,
                                    borderWidth: 1
                                }}
                            >
                                <Image
                                    source={IMAGES.camera}
                                    resizeMode='contain'
                                />
                            </Pressable>
                        </ImageBackground>
                    </View>
                    <Text style={{ color: COLORS.black, fontSize: 14, alignSelf: "center", marginTop: 10, fontFamily: Family.poppinsMedium }}>{props.name + " - " + maskString(props.nric)}</Text>
                </View>

                {/* Profile Info */}
                <Card
                    style={{
                        backgroundColor: COLORS.white,
                        width: "30%",
                        marginEnd: 15,
                        alignSelf: "flex-end",
                        display: editable ? "none" : "flex",
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0
                    }}
                >
                    <Pressable
                        style={{
                            padding: 5,
                            alignItems: "center"
                        }}
                        onPress={() => { setEditable(true) }}
                    >
                        <Text style={{ color: COLORS.black }}>Edit</Text>
                    </Pressable>
                </Card>
                <Card
                    style={{
                        margin: 15,
                        backgroundColor: COLORS.white,
                        padding: 15,
                        paddingStart: 20,
                        marginTop: editable ? 15 : 0,
                        borderTopRightRadius: editable ? 15 : 0, marginBottom: 100
                    }}>
                    <>
                        <View style={{ marginTop: 10, borderBottomWidth: editable ? 1 : 0, borderColor: COLORS.borederGray }}>
                            <Text style={styles.headTxt}>Name</Text>
                            <TextInput
                                value={props.name}
                                editable={editable ? true : false}
                                disabled={false}
                                onChangeText={name => props.setName(name)}
                                style={styles.fieldTxt}
                                underlineStyle={{ display: "none" }}
                            />
                        </View>
                        <View style={{ marginTop: 15, borderBottomWidth: editable ? 1 : 0, borderColor: COLORS.borederGray }}>
                            <Text style={styles.headTxt}>Mobile Number</Text>
                            <TextInput
                                value={props.mobile}
                                editable={editable ? true : false}
                                disabled={false}
                                onChangeText={mobile => props.setMobile(mobile)}
                                style={styles.fieldTxt}
                                underlineStyle={{ display: "none" }}
                            />
                        </View>
                        <View style={{ marginTop: 15, borderBottomWidth: editable ? 1 : 0, borderColor: COLORS.borederGray }}>
                            <Text style={styles.headTxt}>Email</Text>
                            <TextInput
                                value={props.email}
                                editable={editable ? true : false}
                                disabled={editable ? true : false}
                                onChangeText={email => props.setEmail(email)}
                                style={styles.fieldTxt}
                                underlineStyle={{ display: "none" }}
                            />
                        </View>
                        <View style={{ marginTop: 15, borderBottomWidth: editable ? 1 : 0, borderColor: COLORS.borederGray }}>
                            <Text style={styles.headTxt}>Date of Birth</Text>
                            <Pressable
                                onPress={() => { setDatePickerEnable(true) }}
                                disabled={editable ? false : true}
                                style={{ paddingVertical: 4 }}
                            >
                                <Text style={{
                                    color: COLORS.black,
                                    fontSize: 15,
                                    fontFamily: Family.poppinsRegular,
                                }}>{moment(props.dob).format('DD-MM-YYYY')}</Text>
                            </Pressable>
                            <DateTimePicker
                                date={new Date()}
                                mode='date'
                                isVisible={isDatePickerEnable}
                                locale="en_GB"
                                onConfirm={(date) => {
                                    console.log("Selected Date => ", date.toLocaleString())
                                    setDatePickerEnable(false)
                                    const dobDate = moment(date, 'DD-MM-YYYY')
                                    console.log("Selected Date => ", dobDate)
                                    // setOccurrenceDate(date)
                                    props.updateDob(dobDate)
                                }}
                                onCancel={() => {
                                    console.log("Canceled")
                                    setDatePickerEnable(false)
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 15, borderBottomWidth: editable ? 1 : 0, borderColor: COLORS.borederGray }}>
                            <Text style={styles.headTxt}>NRIC/FIN</Text>
                            <TextInput
                                value={editable ? props.nric : maskString(props.nric)}
                                editable={editable ? true : false}
                                disabled={editable ? true : false}
                                onChangeText={nric => props.setNric(nric)}
                                style={styles.fieldTxt}
                                underlineStyle={{ display: "none" }}
                            />
                        </View>
                        {/* <View style={{ marginTop: 15, borderBottomWidth: editable ? 1 : 0, borderColor: COLORS.borederGray }}>
                            <Text style={styles.headTxt}>Role</Text>
                            <TextInput
                                value={props.role}
                                editable={editable ? true : false}
                                disabled={editable ? true : false}
                                onChangeText={role => props.setRole(role)}
                                style={styles.fieldTxt}
                                underlineStyle={{ display: "none" }}
                            />
                        </View>
                        <View style={{ marginTop: 15, borderBottomWidth: editable ? 1 : 0, borderColor: COLORS.borederGray }}>
                            <Text style={styles.headTxt}>Department</Text>
                            <TextInput
                                value={props.dept}
                                editable={editable ? true : false}
                                disabled={editable ? true : false}
                                onChangeText={dept => props.setDept(dept)}
                                style={styles.fieldTxt}
                                underlineStyle={{ display: "none" }}
                            />
                        </View> */}
                    </>
                    <Pressable
                        style={{
                            backgroundColor: COLORS.lavenderPrimary,
                            marginTop: 15,
                            height: 50,
                            justifyContent: 'center',
                            borderRadius: 2,
                            alignItems: "center",
                            display: editable ? "flex" : "none"
                        }}
                        onPress={() => {
                            props.updateProfile()
                            setEditable(false)
                        }}>
                        <Text style={{ color: COLORS.white, fontSize: 16 }}>Save</Text>
                    </Pressable>
                </Card>
            </ScrollView>
        </View>
    );
};

//make this component available to the app
export default ViewProfile;
