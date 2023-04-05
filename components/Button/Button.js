import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Button = ({ content, color, textColor, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle(color, textColor)}
      onPress={onPress}
    >
      {content}
    </TouchableOpacity>
  );
};
export default Button;
const styles = StyleSheet.create({
  buttonStyle: (color, textColor) => ({
    backgroundColor: color,
    height: 50,
    padding: 16,
    justifyContent: "center",
    color: textColor,
    alignItems: "center",
    borderRadius: 6,
  }),
});
