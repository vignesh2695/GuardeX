import { StyleSheet, Platform } from "react-native";
import COLORS from "../assets/Color";



const CommonStyles = StyleSheet.create({
  sampleTextStyle: {
    color: COLORS.baseTextColor,
  },
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    //shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: -2,
    // },
    // zIndex:999,
    // shadowOpacity: 0.25,
    // shadowRadius: 1.5,
    // elevation: 5,
    backgroundColor: "white",
    marginBottom: 2,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 5,
      },
    })
  }
});

const _Text = (size, font, color, weight) => ({
  fontSize: size,
  color: color,
  fontFamily: font,
  fontWeight: weight,
})

const _Shadow = (elevation, opacity) => ({
  ...Platform.select({
    ios: {
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: opacity,
      shadowRadius: 10,
    },
    android: {
      shadowColor: COLORS.black,
      elevation: elevation,
    },
  }),
})

export {
  CommonStyles,
  _Text,
  _Shadow,
}
