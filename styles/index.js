import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "./theme";

const styles = StyleSheet.create({
  container: (isMain) => ({
    width: "100%",

    backgroundColor: isMain ? COLORS.offwhite : COLORS.white,
    paddingHorizontal: 20,
  }),

  appName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.font18,
    color: COLORS.black,
    alignSelf: "flex-end",
  },

  authHeaderText: {
    marginTop: 100,
    color: COLORS.normalTextBlueColor,
    fontFamily: FONT.bold,
    fontSize: 30,
    textAlign: "center",
  },

  authParagraph: {
    marginTop: 10,
    fontFamily: FONT.regular,
    fontSize: SIZES.font12,
    textAlign: "center",
    color: COLORS.paragraphTextColor,
  },

  formContainer: {
    marginTop: 65,
    gap: 20,
  },
});

export default styles;
