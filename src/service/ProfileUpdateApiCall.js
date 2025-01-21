import NetworkUtils from "../utils/NetworkUtils";
import { formdataPostApi, postAPI } from "./Networking";

export const ProfileUpdateApiCall = async (reqData) => {
    try {
        if (await NetworkUtils.isNetworkAvailable()) {
            const resultResponse = await formdataPostApi("api/profile-update", reqData, false);

            return resultResponse;
        } else {
            return null;
        }
    } catch (e) {
        console.error(e);
    }
}