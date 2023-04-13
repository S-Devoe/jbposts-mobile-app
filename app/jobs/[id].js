import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../styles/theme";
import { useSearchParams } from "expo-router";
import data from "../../data";
import { useEffect } from "react";
import { useState } from "react";
import CircleIcon from "../../components/Icons/CircleIcon";
import Description from "../../components/home/Description";
import Company from "../../components/home/Company";
import { ScrollView } from "react-native";
import Tabs from "../../components/home/Tabs";

const JobDetails = () => {
  const { id } = useSearchParams();

  const [singleJob, setSingleJob] = useState([]);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    if (typeof id !== "undefined") {
      setSingleJob(data?.filter((job) => job?.id === Number(id)));
    }
  }, [id]);

  const tabs = ["description", "company"];

  const displayTabContent = () => {
    switch (activeTab) {
      case "description":
        return <Description data={singleJob[0]} />;
      case "company":
        return <Company data={singleJob[0]} />;
      default:
        break;
    }
  };

  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={singleJob[0]?.image}
            alt="logo"
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            backgroundColor: COLORS.offwhite,
            alignItems: "center",
            paddingTop: 35,
            paddingBottom: 25,
            paddingHorizontal: 10,
            marginTop: -10,
            zIndex: -1,
          }}
        >
          <View>
            <Text style={styles.jobTitle}>{singleJob[0]?.job_title}</Text>
          </View>
          <View style={styles.location}>
            <View>
              <Text style={styles.text}>{singleJob[0]?.name}</Text>
            </View>
            <CircleIcon />
            <View>
              <Text style={styles.text}>{singleJob[0]?.location}</Text>
            </View>
            <CircleIcon />
            <View>
              <Text style={styles.text}>1 day ago</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            alignItems: "center",
          }}
        >
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          {displayTabContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default JobDetails;
const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  jobTitle: {
    color: COLORS.normalTextBlueColor,
    fontFamily: FONT.bold,
    fontSize: SIZES.font16,
    paddingBottom: 10,
  },
  text: {
    color: COLORS.normalTextBlueColor,
    fontFamily: FONT.regular,
    fontSize: SIZES.font16,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
