import { StyleSheet } from "react-native";
import COLORS from "../../assets/Color";
import { Family } from "../../utils/Constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        padding: 0
    },
    profileImage: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 10,
    },
    headTxt: {
        fontSize: 11,
        color: COLORS.txtGray,
        fontFamily: Family.poppinsRegular
    },
    fieldTxt: {
        color: COLORS.black,
        fontSize: 15,
        fontFamily: Family.poppinsRegular,
        height: 30,
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        // start: -15,
    },
})

export default styles;