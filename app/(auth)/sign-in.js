import { Link, Stack, useRouter } from "expo-router";
import { View, Text } from "react-native";
import Input from "../../components/form/Input";
import styles from "../../styles";
import { useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, FONT, SIZES } from "../../styles/theme";
import { useState } from "react";
import Checkbox from "expo-checkbox";

const SignIn = () => {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const onSubmit = (data) => {
    console.log(data);
    router.push("/");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        height: "100%",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Text style={styles.authHeaderText}>Welcome Back</Text>
        <Text style={styles.authParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>

        <View style={styles.formContainer}>
          <Input
            label="email"
            name="email"
            control={control}
            rules={{
              required: "Email is required!",
              validate: {
                isEmailValid: (value) =>
                  value.match(emailRegex) || "Invalid email address",
              },
            }}
            errors={errors}
          />

          <Input
            label="password"
            name="password"
            control={control}
            isPassword={true}
            rules={{ required: "password is required!" }}
            errors={errors}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Checkbox
                value={isSelected}
                onValueChange={setIsSelected}
                color={isSelected ? COLORS.orange : undefined}
                style={{
                  height: 20,
                  width: 20,
                  borderWidth: 0,
                  backgroundColor: "#E6E1FF",
                }}
              />
              <Text
                style={{
                  color: COLORS.greyText,
                  fontFamily: FONT.regular,
                  fontSize: SIZES.font12,
                }}
              >
                Remember me
              </Text>
            </View>

            <Link
              href="/"
              style={{
                color: COLORS.normalTextBlueColor,
                fontFamily: FONT.regular,
                fontSize: SIZES.font12,
              }}
            >
              {" "}
              Forgot Password ?
            </Link>
          </View>
        </View>

        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignIn;
