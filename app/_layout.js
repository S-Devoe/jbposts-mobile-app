import { Stack, Slot } from "expo-router";
import { View, Text } from "react-native";
import { AuthProvider, useAuth } from "../hooks/AuthContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const fontsLoaded = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      {!fontsLoaded && <SplashScreen />}
      {fontsLoaded && <RootLayoutNav onLayoutRootView={onLayoutRootView} />}
    </>
  );
};
export default Layout;

function RootLayoutNav(onLayoutRootView) {
  return (
    <>
      <AuthProvider>
        <Stack
          onLayout={onLayoutRootView}
          screenOptions={{
            headerShown: false,
          }}
        />
      </AuthProvider>
    </>
  );
}

export const unstable_settings = {
  // Used for `(auth)`
  initialRouteName: "onboarding",
  // Used for `(main)`
  main: {
    initialRouteName: "index",
  },
};
