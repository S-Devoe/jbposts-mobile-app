import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { COLORS, FONT, SIZES } from "../../styles/theme";
import styles from "../../styles";
import { getValueFor, useAuth } from "../../hooks/AuthContext";
import { TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import JoinNowCard from "../../components/home/JoinNow/JoinNowCard";
import FindJob from "../../components/home/FindJob/FindJob";
import data from "../../data";
import HomeCard from "../../components/cards/HomeCard";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/DetailsSlice.js";

const Home = () => {
  // const { signOut } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(setUser(null));
    SecureStore.deleteItemAsync("token")
      .then(router.replace("/onboarding"))
      .catch((error) => console.log("Could not delete user info ", error));
  };

  console.log(data);


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
              {data?.map((item, index) => (
                <HomeCard key={index} item={item} />
              ))}
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
