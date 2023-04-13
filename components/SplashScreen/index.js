import { StyleSheet, Text, View } from "react-native";
import Logo from "../Icons/Logo";
import { COLORS } from "../../styles/theme";
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.deepBlue,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
