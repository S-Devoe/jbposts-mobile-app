import { useRouter, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/DetailsSlice.js";

const AuthContext = createContext(null);

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);

  return result;
}

const useProtectedRoute = (user, token) => {
  const segments = useSegments();
  const router = useRouter();

  const inAuthGroup = segments[0] === "(auth)";

  console.log(inAuthGroup);

  useEffect(() => {
    // !token && router.push("/onboarding");
    if (!user && !inAuthGroup && !token) {
      // Redirect to the sign-in page.
      router.replace("/onboarding");
    } else if (token && inAuthGroup && user) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
};

export function AuthProvider({ children }) {
  // const [user, setUser] = useState(null);
  const user = useSelector(selectUser);
  console.log(user);

  const token = getValueFor("token");

  useProtectedRoute(user, token);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
