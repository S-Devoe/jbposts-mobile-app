import { Stack } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONT, SIZES } from "../../styles/theme";
import OnboardingSvg from "../../assets/icons/onboard1.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import styles from "../../styles";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container(false)}>
        <Text style={styles.appName}>Jobspot</Text>
        <View
          style={{
            marginTop: 90,
            marginBottom: 70,
          }}
        >
          <OnboardingSvg />
        </View>
        <Text
          style={{
            fontFamily: FONT.bold,
            color: COLORS.black,
            fontSize: 40,
          }}
        >
          Find Your {"\n"}
          <Text
            style={{
              color: COLORS.orange,
              textDecorationLine: "underline",
            }}
          >
            Dream Job
          </Text>
          {"\n"}Here!
        </Text>
        <Text>
          Explore all the most exciting job roles based on your interest and
          study major.
        </Text>
        <TouchableOpacity
          onPress={() => router.push("sign-in")}
          style={{
            backgroundColor: COLORS.deepBlue,
            height: 60,
            width: 60,
            borderRadius: 1000,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
          }}
        >
          <ArrowRight />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Onboarding;
