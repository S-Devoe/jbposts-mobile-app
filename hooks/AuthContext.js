import { useRouter, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const useProtectedRoute = (user) => {
  const segments = useSegments();
  const router = useRouter();

  // console.log("segments:", segments);
  // console.log("router:", router);

  const inAuthGroup = segments[0] === "(auth)";

  useEffect(() => {
    if (!user && !inAuthGroup) {
      // Redirect to the sign-in page.
      router.replace("/onboarding");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, inAuthGroup]);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useProtectedRoute(user);
  
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
