import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../../styles/theme";
import { TouchableOpacity } from "react-native";
const Description = ({ data }) => {
  return (
    <View
      style={{
        gap: 25,
      }}
    >
      <View>
        <Text style={styles.mainText}>Job Description</Text>
        <Text style={styles.paraText}>{data?.job_description}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Description;
const styles = StyleSheet.create({
  mainText: {
    fontFamily: FONT.medium,
    color: COLORS.boldTextBlueColor,
    fontSize: SIZES.font14,
    paddingBottom: 12,
  },
  paraText: {
    fontFamily: FONT.regular,
    color: COLORS.paragraphTextColor,
    fontSize: SIZES.font12,
    paddingBottom: 10,
  },

  btn: {
    backgroundColor: COLORS.lightPurple,
    alignSelf: "baseline",
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  btnText: {
    fontSize: SIZES.font12,
    fontFamily: FONT.regular,
    color: COLORS.paragraphTextColor,
  },
});
