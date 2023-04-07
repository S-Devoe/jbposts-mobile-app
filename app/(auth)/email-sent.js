import { Link, Stack, useRouter } from "expo-router";
import { View, Text } from "react-native";
import styles from "../../styles";
import { COLORS, FONT, SIZES } from "../../styles/theme";
import Button from "../../components/Button/Button";
import CheckEmail from "../../assets/icons/check-email.svg";
import { SafeAreaView } from "react-native";

const EmailSent = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        height: "100%",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Text style={styles.authHeaderText}>Check Your Email</Text>
        <Text style={styles.authParagraph}>
          We have sent the reset password to the email address
          youremail@gmial.com
        </Text>
        <View
          style={{
            alignItems: "center",
            marginTop: 50,
            marginBottom: 70,
          }}
        >
          <CheckEmail width={120} height={95} />
        </View>

        <View
          style={{
            gap: 20,
            marginTop: 30,
          }}
        >
          <Button
            // onPress={}
            content={
              <Text
                style={{
                  color: COLORS.white,
                  textTransform: "uppercase",
                  fontFamily: FONT.bold,
                  fontSize: SIZES.font14,
                }}
              >
                Open Your Email
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
            You have not received the email?
            <Link
              href=""
              style={{
                color: COLORS.orange,
              }}
            >
              Resend.
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EmailSent;
