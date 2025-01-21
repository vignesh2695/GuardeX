import axios from "axios";
import { ApiUrls } from "./Urls";
import messaging from '@react-native-firebase/messaging';

const axiosObj = axios.create({
    baseUrl: ApiUrls.baseUrl,
});

const header = async isAuth => {
    if (isAuth) {
        const token = await messaging().getToken();

        if (token === null) {
            return {};
        }
        return {
            //authorization: `Bearer ${token}`,
            authorization: `Basic ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            //authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjk2NCwiZGlzcGxheU5hbWUiOiJNYXJpbXV0aHUiLCJ0ZW5hbnRJZCI6MTAwLCJ0ZW5hbnRfY3JlYXRlZF9hdCI6IjIwMTktMTEtMTVUMDc6MzU6MjEuNDIwWiIsInpvaG9fY3VzdG9tZXJfaWQiOm51bGwsInpvaG9fc3Vic2NyaXB0aW9uX2lkIjpudWxsLCJ6b2hvX3BsYW5fY29kZSI6bnVsbCwiaWF0IjoxNjE5MTU3ODcxfQ.1eIk59RiBTb9jHVYghY2_ZTNPBHb6CRkJwKpRl93nbM'
        };
    }
    return {};
};

export const postAPI = async (path, reqParams, isAuth) => {
    try {
        if (isAuth) {
            if (Object.keys(headerToken).length === 0) {
                return null;
            }
        }
        console.log('Networking page url ', ApiUrls.baseUrl + path);
        console.log("Networking page request ", reqParams);
        const res = await axios.post(ApiUrls.baseUrl + path, reqParams);

        // console.log("networking page res ", JSON.stringify(res));
        if (res.status) {
            return res.data;
        } else {
            return res;
        }
    } catch (e) {
        if (e.response) {
            console.log('api response error = ', e.response.data);
        } else {
            console.log('api error = ', e);
        }
    }
    return null;
};

export const postAPIWithHeader = async (path, reqParams, isAuth) => {
    try {
        const headerToken = await header(isAuth);
        if (isAuth) {
            if (Object.keys(headerToken).length === 0) {
                return null;
            }
        }
        // console.log('dd ', path);
        const res = await axiosObj.post(path, reqParams, {
            headers: headerToken,
        });
        if (res.data !== undefined) {
            return res.data;
        }
    } catch (e) {
        if (e.response) {
            console.log('api error = ', e.response.data);
        } else {
            console.log('api error = ', e);
        }
    }
    return null;
};

export const formdataPostApi = async (path, reqParams) => {
    try {
        console.log('form Data url: ', ApiUrls.baseUrl + path);
        console.log('form Data request: ', JSON.stringify(reqParams));

        // const response = await axios.post(
        //     ApiUrls.baseUrl + path,
        //     reqParams,
        // );

        let param = reqParams;
        let URL = ApiUrls.baseUrl + path;
        let headers = {
            'Content-Type': 'multipart/form-data',// this is a imp line
            Accept: 'application/json',
        };

        let obj = {
            method: 'POST',
            headers: headers,
            body: param,
        };

        // const response = await axios.post(ApiUrls.baseUrl + path, reqParams).then(response => { console.log(response) })
        //     .catch(error => { console.log(error) });

        // console.log("formdataPostApi ", response);

        // return response;

        return fetch(URL, obj)// put your API URL here
            .then(resp => {
                let json = null;
                json = resp.json();
                console.log(path + ' Response', json);
                if (resp) {
                    return json;
                }
                return json.then(err => {
                    console.log('error :', err);
                    throw err;
                });
            })
            .then(json => json);
    } catch (e) {
        if (e.response) {
            console.log('api error = ', e.response.data);
        } else {
            console.log('api else error = ', e);
        }
    }
}