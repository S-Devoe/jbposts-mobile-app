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

const SignUp = () => {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);

  const { user, setUser } = useAuth();

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
      name: data?.name,
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
        <Text style={styles.authHeaderText}>Create an Account</Text>
        <Text style={styles.authParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>

        <View style={styles.formContainer}>
          <Input
            label="fullname"
            name="name"
            control={control}
            rules={{
              required: "Full name is required!",
            }}
            errors={errors}
          />

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
          ></View>
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
                Sign up
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
            Already have an account?{" "}
            <Link
              href="/sign-in"
              style={{
                color: COLORS.orange,
              }}
            >
              Sign in
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignUp;
