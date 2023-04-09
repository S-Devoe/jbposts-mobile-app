import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { COLORS, FONT, SIZES } from "../../styles/theme";
import styles from "../../styles";
import { getValueFor, useAuth } from "../../hooks/AuthContext";
import { TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import JoinNowCard from "../../components/home/JoinNow/JoinNowCard";
import FindJob from "../../components/home/FindJob/FindJob";
import * as data from "../../data/index.json";
import HomeCard from "../../components/cards/HomeCard";
import { Dimensions } from "react-native";

const Home = () => {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    signOut();
    await SecureStore.deleteItemAsync("token");
    router.replace("/onboarding");
  };
  const screenHeight = Dimensions.get("window").height;
  console.log(screenHeight);

  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: COLORS.offwhite,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container(true)}
      >
        <View>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              marginTop: 15,
            }}
          >
            <Image source={require("../../assets/images/avatar.png")} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontFamily: FONT.bold,
                color: COLORS.deepBlue,
                fontSize: 22,
              }}
            >
              Hello {"\n"}Orlando Diggs.{" "}
            </Text>
          </View>
          <JoinNowCard />
          <FindJob />
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontFamily: FONT.bold,
                fontSize: SIZES.font16,
                color: COLORS.black,
                marginBottom: 15,
              }}
            >
              Recent Job List
            </Text>
            <View
              style={{
                gap: 15,
              }}
            >
              {data?.data?.map((item, index) => (
                <>
                  <HomeCard item={item} key={index} />
                </>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
