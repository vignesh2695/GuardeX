import { Dimensions, PixelRatio, Platform } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const guidelineBaseWidth = 375;
const API_TOKEN = "0bd86c0c863bcd3b276a57ccc21c3b2f";

const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;
const scaleFont = (size) => size * PixelRatio.getFontScale();

const isAndroid = Platform.OS === "android";
const isIOS = Platform.OS === "ios";

const Family = {
    poppinsBlack: "Poppins-Black",
    poppinsBold: "Poppins-Bold",
    poppinsExtraBold: "Poppins-ExtraBold",
    poppinsLight: "Poppins-Light",
    poppinsExtraLight: "Poppins-ExtraLight",
    poppinsMedium: "Poppins-Medium",
    poppinsRegular: "Poppins-Regular",
    poppinsSemiBold: "Poppins-SemiBold",
    poppinsThin: "Poppins-Thin",
    poppins: "Poppins",
    dosisBold: "Dosis-Bold",
    dosisExtraBold: "Dosis-ExtraBold",
    dosisExtraLight: "Dosis-ExtraLight",
    dosisLight: "Dosis-Light",
    robotoSlab: "Roboro-Slab",
  
    dhurjatiRegular: "Dhurjati-Regular",
    clashDisplayRegular: "ClashDisplay",
  };

  const FontSize = {
    tiny: scaleFont(8),
    tinyVariant: scaleFont(9),
    xs: scaleFont(10),
    small: scaleFont(11),
    smallVariant: scaleFont(12),
    smallVariantPlus: scaleFont(13),
    regularVariant: scaleFont(14),
    regular: scaleFont(15),
    regularVariantPlus: scaleFont(16),
    medium: scaleFont(17),
    mediumVariant:scaleFont(18),
    large: scaleFont(20),
    largeVariant: scaleFont(24),
    largeVariantPlus: scaleFont(26),
    largeVariantXs: scaleFont(28),
    xlarge: scaleFont(30),
    xxlarge: scaleFont(42),
    xxlargeVariant: scaleFont(50),
  };

  const FontWeight = {
    tiny: '300',
    small: '400',
    medium: '500',
    Midmedium:'600',
    large: '700',
  };


  export { Family, FontSize, FontWeight, API_TOKEN, WINDOW_HEIGHT, WINDOW_WIDTH, SCREEN_WIDTH, SCREEN_HEIGHT, isAndroid, isIOS };