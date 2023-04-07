import { View, Text, SafeAreaView } from "react-native";
import { COLORS } from "../../styles/theme";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../styles";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text>DeeVoe</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
