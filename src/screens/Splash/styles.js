import { StyleSheet } from "react-native";
import COLORS from "../../assets/Color";
import { Family } from "../../utils/Constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        height: 150,
        width: 150,
        tintColor: COLORS.white
    },
    title: {
        fontSize: 20,
        color: COLORS.white,
        fontWeight: 'bold',
        fontFamily: Family.dhurjatiRegular
    },
})

export default styles;