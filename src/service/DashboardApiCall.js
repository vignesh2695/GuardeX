import NetworkUtils from "../utils/NetworkUtils";
import Toast from "../utils/Toast";
import { postAPI } from "./Networking";


export const DashboardApiCall = async (requestData) => {
    console.log("DashboardApiCall_req => ", requestData);
    try {
        if (await NetworkUtils.isNetworkAvailable()) {
            const dashboardApiCall_res = await postAPI("api/dashboard", requestData);
            return dashboardApiCall_res;
        } else {
            Toast.showMessage("Please check your network connection");
            return null;
        }
    } catch (error) {
        console.log("Dashboard Api Error => ", error);
    }
}