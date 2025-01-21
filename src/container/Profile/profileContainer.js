//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ViewProfile from '../../screens/Profile/ViewProfile';
import { API_TOKEN } from '../../utils/Constants';
import { GetUserToken } from '../../dataStorage/dataStorage';
import { DashboardApiCall } from '../../service/DashboardApiCall';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from '../../utils/Toast';
import { ProfileUpdateApiCall } from '../../service/ProfileUpdateApiCall';

// create a component
const ProfileContainer = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [dob, setDob] = useState("")
    const [nric, setNric] = useState("")
    const [role, setRole] = useState("")
    const [dept, setDept] = useState("")
    const [image, setImage] = useState("")
    const [userProfile, setUserProfile] = useState({
        name: "",
        mobile: "",
        email: "",
        dob: "",
        nric: "",
        role: "",
        dept: "",
        image: "",
    })

    useEffect(() => {
        getProfileDetails();
    }, [])

    const getProfileDetails = async () => {
        console.log("getProfileDetails");
        try {
            const profileDetailsReq = {
                "api_key": API_TOKEN,
                "token": await GetUserToken()
            }

            console.log("profileReq => ", JSON.stringify(profileDetailsReq));
            const profileRes = await DashboardApiCall(profileDetailsReq);
            console.log("profileRes => ", JSON.stringify(profileRes));
            if (profileRes.status == 'success') {
                setName(profileRes.profile_details.emp_name)
                setEmail(profileRes.profile_details.emp_email)
                setMobile("" + profileRes.profile_details.emp_mobile)
                setNric(profileRes.profile_details.emp_icnumber)
                setRole(profileRes.profile_details.role?.role_name)
                setDob(profileRes.profile_details.date_of_birth)
                setImage(profileRes.profile_details.photo_path)
                setDept(profileRes.profile_details.department?.department_name)
                console.log("user profile => " + profileRes.profile_details.photo_path)
            }
        } catch (error) {
            console.log("Profile page try catch error => ", error);
        }
    }

    const setSelImage = (uri) => {
        setImage(uri)
    }

    const selectImage = async () => {
        console.log("select image");
        var options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose file from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images' // you can specify the path here
            },
        }
        launchImageLibrary(options, (res) => {
            if (res.didCancel) {
                console.log('cancel')
            } else if (res.errorCode) {
                alert(`Error:${res.errorMessage}`)
            } else {
                console.log("res => " + JSON.stringify(res))
                setUserProfile({
                    image: res.assets[0].uri
                })
                const uri = res.assets[0].uri
                setSelImage(uri)
                updateProfile(uri)
                console.log('success')
            }
        })
    }

    const _onPress_editProfile = async () => {
        navigation.navigate("Edit Profile", {
            data: {
                name: name,
                email: email,
                mobile: mobile,
                dob: dob,
                role: role,
                dept: dept,
                nric: nric,
                image: image
            }
        })
    }

    const updateDob = async (newDate) => {
        console.log("New date ", newDate);
        setDob(newDate);
    }

    const updateProfile = async (image_uri) => {
        try {
            // const data = {
            //     "api_key": API_TOKEN,
            //     "token": await GetUserToken(),
            //     "emp_name": name,
            //     "emp_mobile": mobile,
            //     "emp_icnumber": nric,
            //     "emp_email": email,
            //     "emp_photo_url": {
            //         uri: image_uri ? image_uri : image,
            //         type: 'image/jpg',
            //         name: nric + ".jpg",
            //     },
            //     "date_of_birth": dob
            // }
            // console.log("profile request => " + JSON.stringify(data));

            const updateProfileReqData = new FormData();
            // updateProfileReqData.append("api_key", API_TOKEN);
            // updateProfileReqData.append("token", await GetUserToken());
            // updateProfileReqData.append("emp_name", name);
            // updateProfileReqData.append("emp_mobile", mobile);
            // updateProfileReqData.append("emp_icnumber", nric);
            // updateProfileReqData.append("emp_email", email);
            // updateProfileReqData.append("emp_photo_url", {
            //     uri: image_uri ? image_uri : image,
            //     type: 'image/jpg',
            //     name: nric + ".jpg",
            // });
            // updateProfileReqData.append("date_of_birth", dob);
            updateProfileReqData.append("api_key", API_TOKEN)
            updateProfileReqData.append("token", await GetUserToken())
            updateProfileReqData.append("emp_name", name)
            updateProfileReqData.append("emp_mobile", mobile)
            updateProfileReqData.append("emp_icnumber", nric)
            updateProfileReqData.append("emp_email", email)
            updateProfileReqData.append("emp_photo_url", {
              uri: image_uri ? image_uri : image,
              type: 'image/jpeg',
              name: nric + ".jpg",
            })
            updateProfileReqData.append("date_of_birth", dob)

            console.log("profile request => " + JSON.stringify(updateProfileReqData))

            let res = await ProfileUpdateApiCall(updateProfileReqData)
            console.log(JSON.stringify(res))
            if (res.status == "success") {
                Toast.showMessage(res.message);
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <ViewProfile
                userProfile={userProfile}
                selectImage={selectImage}
                setUserProfile={setUserProfile}
                name={name}
                setName={setName}
                mobile={mobile}
                setMobile={setMobile}
                email={email}
                setEmail={setEmail}
                dob={dob}
                updateDob={updateDob}
                nric={nric}
                setNric={setNric}
                role={role}
                setRole={setRole}
                dept={dept}
                setDept={setDept}
                image={image}
                updateProfile={updateProfile}
                _onPress_editProfile={_onPress_editProfile}
            />
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ProfileContainer;
