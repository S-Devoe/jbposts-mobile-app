import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { AuthProvider, useAuth } from "../hooks/AuthContext";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "../redux/store";
import SplashScreen from "../components/SplashScreen";

// SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  return (
    <Provider store={store}>
      {!fontsLoaded ? (
        <SplashScreen />
      ) : (
        <AuthProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </AuthProvider>
      )}
    </Provider>
  );
};
export default Layout;
