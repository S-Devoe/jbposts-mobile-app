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
import { useAuth } from "../../hooks/AuthContext";
import ForgotPwd from "../../assets/icons/forgot-pwd.svg";

const ForgotPassword = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const onSubmit = (data) => {
    router.push("/email-sent");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        height: "100%",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container(false)}>
        <Text style={styles.authHeaderText}>Forgot Password?</Text>
        <Text style={styles.authParagraph}>
          To reset your password, you need your email or mobile number that can
          be authenticated
        </Text>
        <View
          style={{
            alignItems: "center",
            marginTop: 50,
            marginBottom: 70,
          }}
        >
          <ForgotPwd width={120} height={95} />
        </View>

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
                Reset Password
              </Text>
            }
            color={COLORS.deepBlue}
          />

          <Button
            onPress={() => router.push("/sign-in")}
            content={
              <Text
                style={{
                  color: COLORS.white,
                  textTransform: "uppercase",
                  fontFamily: FONT.bold,
                  fontSize: SIZES.font14,
                }}
              >
                Back to Login
              </Text>
            }
            color={COLORS.lightPurple}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default ForgotPassword;
