import { StyleSheet } from "react-native"
import COLORS from "../../assets/Color"
import { Family } from "../../utils/Constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderTopLeftRadius:0,
        borderTopRightRadius: 0,
        marginBottom: 0,
        paddingVertical:10
        
    },
    profileCard: {
        margin: 10,
        marginTop:5,
        borderRadius: 5,
        padding: 10,
        backgroundColor: COLORS.white,
        borderColor: COLORS.borederGray,
        borderWidth:1
    },
    menuItem1: {
        flexDirection:"row",
        marginHorizontal:10,
        justifyContent:"space-between",

    },
    mainMenuCard: {
        flex:1,
        backgroundColor: COLORS.white,
        borderRadius:5,
        padding:10,
        alignItems: "center",
        borderColor: COLORS.borederGray,
        borderWidth: 1
    },
    mainMenuText: {
        fontSize: 10,
        color:COLORS.black,
        alignSelf:"center",
        textAlign:"center",
        marginTop:5,
        fontFamily:Family.poppinsRegular
    },
    menuCircle: {
        borderRadius:25,
        width:50,
        height:50,
        alignItems:"center",
        justifyContent:"center"
    },

    menuItem2: {
        backgroundColor: COLORS.white,
        borderRadius:5,
        padding:0,
        marginHorizontal:10,
        marginTop: 10,
        borderColor: COLORS.borederGray,
        borderWidth: 1
    }
})

export default styles;