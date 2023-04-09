import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, FONT, SIZES } from "../../../styles/theme";
const JoinNowCard = () => {
  return (
    <View style={cardStyle.container}>
      <View
        style={{
          paddingLeft: 17,
        }}
      >
        <Text style={cardStyle.text}>50% off {"\n"}take any course </Text>
        <TouchableOpacity style={cardStyle.button}>
          <Text style={cardStyle.buttonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
      <View style={cardStyle.imageContainer}>
        <Image source={require("../../../assets/images/office-girl.png")} />
      </View>
    </View>
  );
};
export default JoinNowCard;

const cardStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.deepBlue,
    borderRadius: 6,
    marginTop: 25,
    position: "relative",
  },
  text: {
    marginVertical: 18,
    fontFamily: FONT.regular,
    color: COLORS.white,
    fontSize: SIZES.font18,
  },
  buttonText: {
    fontFamily: FONT.medium,
    fontSize: 13,
    color: COLORS.white,
  },
  button: {
    backgroundColor: COLORS.orange,
    alignSelf: "baseline",
    paddingVertical: 5,
    paddingHorizontal: 17,
    borderRadius: 6,
    marginBottom: 30,
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
