import { get, useController } from "react-hook-form";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../styles/theme";
const Input = ({ label, rules, name, isPassword, control, errors }) => {
  const { field } = useController({
    name,
    rules,
    defaultValue: "",
    control,
  });

  const error = get(errors, name);

  return (
    <View>
      {label && <Text style={styles.labelText}>{label}</Text>}

      <TextInput
        style={styles.textInput}
        value={field.value}
        onChangeText={field.onChange}
        secureTextEntry={isPassword}
      />

      {error && <Text style={styles.errorText}>{error?.message}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  labelText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.font12,
    color: COLORS.normalTextBlueColor,
    textTransform: "capitalize",
  },

  textInput: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: 10,
    padding: 16,
    shadowColor: "#99ABC6",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 15,

    elevation: 5,
    fontFamily: FONT.regular,
    fontSize: SIZES.font12,
    color: "#0D014099",
  },

  errorText: {
    color: COLORS.orange,
    marginTop: 8,
    fontSize: SIZES.font12,
    fontFamily: FONT.regular,
  },
});
