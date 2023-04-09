import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { COLORS, FONT, SIZES } from "../../../styles/theme";

const FindJob = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Find Your Job</Text>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <>
            <View style={styles.card1}>
              <Image
                source={require("../../../assets/images/headhunting.png")}
                style={{
                  marginTop: 35,
                  marginBottom: 14,
                }}
              />
              <Text style={styles.topText}>44.5k</Text>
              <Text style={styles.bottomText}>Remote Job</Text>
            </View>
          </>
        </View>

        <View style={styles.cardContainer2}>
          <View style={styles.card2("#BEAFFE")}>
            <Text style={styles.topText}>66.8k</Text>
            <Text style={styles.bottomText}>Full Time</Text>
          </View>

          <View style={styles.card2("#FFD6AD")}>
            <Text style={styles.topText}>38.9k</Text>
            <Text style={styles.bottomText}>Part Time</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default FindJob;
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
  },

  container: {
    flexDirection: "row",
    marginHorizontal: "auto",
    gap: 20,
  },

  headerText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.font16,
    color: COLORS.black,
    marginBottom: 30,
  },
  cardContainer: {
    flex: 1,
  },

  cardContainer2: {
    flex: 1,
    gap: 20,
  },

  card1: {
    backgroundColor: "#AFECFE",
    borderRadius: 6,
    alignItems: "center",
    paddingBottom: 40,
  },

  card2: (bgColor) => ({
    backgroundColor: bgColor,
    flex: 1,
    borderRadius: 6,
    alignItems: "center",
    paddingVertical: 15,
  }),

  topText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.font16,
    color: COLORS.deepBlue,
  },

  bottomText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.font14,
    color: COLORS.deepBlue,
  },
});
