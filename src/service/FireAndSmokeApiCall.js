import NetworkUtils from "../utils/NetworkUtils";
import Toast from "../utils/Toast";
import { postAPI } from "./Networking";

export const getFireAndSmokeLists = async (reqData) => {
    console.log("reqData ", reqData);
    try {
        if (await NetworkUtils.isNetworkAvailable()) {
            const fireAndSmokeListResponse = await postAPI("api/get-fire-smoke-videos", reqData);
            return fireAndSmokeListResponse;
        } else {
            Toast.showMessage("Please check your network connection");
            console.log("Network Connection Porblem");
            return null;
        }
    } catch (error) {
        console.log("Fire&Smoke API Error ", error);
    }
}