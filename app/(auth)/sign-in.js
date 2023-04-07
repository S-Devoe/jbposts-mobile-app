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
import Button from "../../components/Button/Button";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "../../hooks/AuthContext";

const SignIn = () => {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);

  const {  setUser } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const onSubmit = async (data) => {
    console.log(data);
    await SecureStore.setItemAsync("token", "A12b4");

    setUser({
      name: "User Tester",
      email: data?.email,
    });
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
            rules={{ required: "Password is required!" }}
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
              href="/forgot-password"
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
        <View
          style={{
            gap: 20,
            marginTop: 30,
          }}
        >
          <Button
            onPress={handleSubmit(onSubmit)}
            content={
              <Text
                style={{
                  color: COLORS.white,
                  textTransform: "uppercase",
                  fontFamily: FONT.bold,
                  fontSize: SIZES.font14,
                }}
              >
                Login
              </Text>
            }
            color={COLORS.deepBlue}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: SIZES.font12,
              color: COLORS.paragraphTextColor,
            }}
          >
            You don't have an account yet?{" "}
            <Link
              href="/sign-up"
              style={{
                color: COLORS.orange,
              }}
            >
              Sign up
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignIn;
