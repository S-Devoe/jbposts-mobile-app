import { get, useController } from "react-hook-form";
import { View, Text, TextInput } from "react-native";
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
      {label && <Text>{label}</Text>}

      <TextInput />

      {error && <Text>{error?.message}</Text>}
    </View>
  );
};
export default Input;
