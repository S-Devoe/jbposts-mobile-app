import { TouchableOpacity } from "react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../../styles/theme";
const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onClick={() => setActiveTab(item)}
          />
        )}
        keyExtractor={(item) => item}
        horizontal={true}
        contentContainerStyle={{ columnGap: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default Tabs;

const TabButton = ({ name, activeTab, onClick }) => (
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onClick}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  btn: (name, activeTab) => ({
    backgroundColor: name === activeTab ? COLORS.deepBlue : COLORS.lightPurple,
    flex: 1,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
  }),
  btnText: (name, activeTab) => ({
    color: activeTab === name ? COLORS.white : COLORS.deepBlue,
    fontFamily: FONT.bold,
    fontSize: SIZES.font14,
    textTransform: "capitalize",
  }),
});
