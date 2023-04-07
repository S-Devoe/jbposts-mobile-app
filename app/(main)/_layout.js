import { Slot, Stack, Tabs } from "expo-router";
import { View, Text } from "react-native";
import HomeIcon from "../../components/Icons/HomeIcon";
import ConnectIcon from "../../components/Icons/ConnectIcon";
import AddIcon from "../../assets/icons/add.svg";
import ChatIcon from "../../components/Icons/ChatIcon";
import BookmarkIcon from "../../components/Icons/BookmarkIcon";
import { COLORS } from "../../styles/theme";

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: COLORS.orange,
          tabBarInactiveTintColor: "#A49EB5",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
          },
        }}
        sceneContainerStyle={{
          backgroundColor: "#F9F9F9",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            href: "/",
            tabBarLabel: "",

            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  marginVertical: 100,
                }}
              >
                <HomeIcon stroke={color} strokeWidth={focused ? "1.9" : null} />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="posting"
          options={{
            href: "posting",
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  marginVertical: 100,
                }}
              >
                <ConnectIcon
                  stroke={color}
                  strokeWidth={focused ? "1.9" : null}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="add-job"
          options={{
            href: "add-job",
            tabBarLabel: "jobbb",
            tabBarIcon: ({ color, size }) => (
              <AddIcon stroke={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="chat"
          options={{
            href: "chat",
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  marginTop: 30,
                }}
              >
                <ChatIcon stroke={color} strokeWidth={focused ? "1.9" : null} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="saved-jobs"
          options={{
            href: "saved-jobs",
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  marginTop: 30,
                }}
              >
                <BookmarkIcon
                  stroke={color}
                  strokeWidth={focused ? "1.9" : null}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};
export default Layout;
