"use client";
import { getAuth, signOut } from "firebase/auth";
import auth from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import initFirebase from "../firebase/firebaseConfig";

// useAuth hook
const useFirebaseAuth = () => {
  initFirebase();
  const router = useRouter();
  const auth = getAuth();
  const [email, setEmail] = useState("");

  const [authUser, setAuthUser] = useState<auth.User | null>();
  const [loading, setLoading] = useState(true); // while we are fetching data from firebase

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        // Sign-out successful.
        router.push("/logout");
        // clear cookies

        console.log("logout successful");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const authStateChangeHandler = (authState: any) => {
    if (!authState) {
      // no user logged in
      setAuthUser(null);
      setLoading(false);
    } else {
      setAuthUser(authState);
      // can set cookies here
      setLoading(false);
      router.push("/");
    }
  };

  // will be called once component is mounted
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChangeHandler);

    return () => {
      unsubscribe(); // unsuscribe function is returned by auth.onAuthStateChanged(authStateChangeHandler);
    };
  }, []);

  return {
    user: authUser,
    loading: loading,
    logOut: handleLogout,
  };
};

export default useFirebaseAuth;
