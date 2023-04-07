import { useRouter, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext(null);

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}

const useProtectedRoute = (user, token) => {
  const segments = useSegments();
  const router = useRouter();

  // console.log("segments:", segments);
  // console.log("router:", router);

  const inAuthGroup = segments[0] === "(auth)";

  useEffect(() => {
    if (!user && !inAuthGroup && !token) {
      // Redirect to the sign-in page.
      router.replace("/onboarding");
    } else if (user && inAuthGroup && token) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, inAuthGroup]);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  let token = getValueFor("token");

  console.log(token);

  useProtectedRoute(user, token);

  return (
    <AuthContext.Provider
      value={{ user, setUser, signOut: () => setUser(null) }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
