import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../styles/theme";
import BookmarkIcon from "../Icons/BookmarkIcon";
import Img from "../../assets/images/apple-logo.png";

const HomeCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.alignImageText}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 30, height: 30 }}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.headerText}>{item?.position}</Text>
            <View style={styles.info}>
              <Text>{item?.name}</Text>
              <Text>.</Text>
              <Text>{item?.location}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <BookmarkIcon strokeWidth="1.5" stroke="#524B6B" />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontFamily: FONT.bold,
            marginTop: 20,
            fontSize: SIZES.font14,
            color: COLORS.deepBlue,
            marginBottom: 10,
          }}
        >
          {item?.salary}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 8,
            }}
          >
            {item?.job_terms.map((value) => (
              <View
                style={{
                  backgroundColor: "rgba(203, 201, 212, .2)",
                  blurRadius: 10,
                  paddingVertical: 6,
                  paddingHorizontal: 16,
                  borderRadius: 8,
                }}
              >
                <Text style={styles.chipText}>{value}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "rgba(255, 107, 44, .2)",
              paddingVertical: 6,
              paddingHorizontal: 20,
              borderRadius: 8,
            }}
          >
            <Text style={styles.chipText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
  },
  alignImageText: {
    flexDirection: "row",
    gap: 10,
  },
  headerText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.font14,
    color: COLORS.deepBlue,
  },
  info: {
    flexDirection: "row",
    gap: 5,
    fontFamily: FONT.regular,
    color: COLORS.deepBlue,
    fontSize: SIZES.font12,
  },
  chipText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.font10,
    color: COLORS.paragraphTextColor,
  },
});
