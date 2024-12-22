import { StyleSheet } from "react-native";
import { _Text } from "../../utils/CommanStyles";
import COLORS from "../../assets/Color";
import { FontSize, Family, FontWeight } from "utils/Constants";



const styles = StyleSheet.create({
  headerView: {
    backgroundColor: COLORS.primaryBlue,
    minHeight: 60,
    paddingHorizontal: 20,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  nameViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nameView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.blue75,
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 13,
    right: 15,
  },
  nameText: {
    ..._Text(
      FontSize.smallVariant,
      Family.interSemiBold,
      COLORS.white,
      FontWeight.Midmedium
    ),
    marginStart: 6,
  },
  tabViewContainer: {
    height: 40,
    width: 183,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 14,
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: COLORS.blue400,
    paddingHorizontal: 7,
  },
  selectedTab: {
    width: 84,
    height: 28,
    borderRadius: 15,
    backgroundColor: COLORS.primaryBlue,
    justifyContent: "center",
    alignSelf: "center",
  },
  selectedTabText: {
    ..._Text(
      FontSize.smallVariant,
      Family.interBold,
      COLORS.white,
      FontWeight.large
    ),
    textAlign: "center",
  },
  inactiveTab: {
    width: 84,
    height: 28,
    justifyContent: "center",
    alignSelf: "center",
  },
  inactiveTabText: {
    ..._Text(
      FontSize.smallVariant,
      Family.interBold,
      COLORS.blue75,
      FontWeight.large
    ),
    textAlign: "center",
  },
});

export default styles;
