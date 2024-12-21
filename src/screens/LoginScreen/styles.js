import { StyleSheet } from "react-native";
import { Family, FontSize, FontWeight } from "../../utils/Constants";
import COLORS from "../../assets/Color";
import { _Text } from "../../utils/CommanStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        // top: '25%',
        fontSize: FontSize.xlarge,
        color: COLORS.lavenderPrimary,
        // fontWeight: 'bold',
        // fontFamily: 'NotoSerif',
        // textTransform: 'uppercase',
    },
    logoContainer: {
        // marginTop: '40',
        width: 100,
        height: 100,
        marginBottom: 40,
        // alignSelf: 'auto'
    },
    poweredBy: {
        // top: '25%',
        width: 35,
        height: 35,
        // marginBottom: 40,
        // alignSelf: 'auto'
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: "flex-start",
    },
    InputStyle: {
        // height: 44,
        width: '100%',
        paddingHorizontal: 10,
        fontSize: FontSize.regularVariantPlus,
        fontFamily: Family.inter,
        fontWeight: FontWeight.small,
        justifyContent: "center",
        alignSelf: 'center',
        // borderBottomWidth: 1,
        // borderColor: COLORS.secondaryLavender,
        color: COLORS.black

    },
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f3f3f3',
        borderRadius: 8,
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderColor: COLORS.lavenderPrimary,
    },
    headingText: {
        // paddingLeft: 10,
        // paddingTop:-1,
        ..._Text(
            FontSize.regularVariantPlus,
            Family.inter,
            COLORS.Gray500,
            FontWeight.small
        ),
    },
    ForgetPasswordContainer: {
        width: '100%',
        paddingHorizontal: 20,
        alignItems: "flex-end",
    },
    EventContainer: {
        marginTop: 50,
        borderRadius: 8,
        width: '90%',
    },
    ActionStyle: {
        height: 44,
        backgroundColor: "#0032A0",
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        alignSelf: "center",
        paddingVertical: 10,
        ..._Text(
            FontSize.regularVariantPlus,
            Family.inter,
            COLORS.white,
            FontWeight.large
        ),
    },
});

export default styles;