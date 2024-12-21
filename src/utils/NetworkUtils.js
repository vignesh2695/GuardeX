import NetInfo from "@react-native-community/netinfo";


const NetworkUtils = {
    isNetworkAvailable: async() => {
        const response = await NetInfo.fetch();
        console.log('Network check: ' + response.isConnected);
        return response.isConnected;
    }
}

export default NetworkUtils;