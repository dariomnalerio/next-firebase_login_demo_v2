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

  const [authUser, setAuthUser] = useState<auth.User | null>();
  const [loading, setLoading] = useState(true); // while we are fetching data from firebase

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/logout");
        // TODO: clear cookies

        console.log("logout successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const authStateChangeHandler = (authState: any) => {
    setLoading(false);

    if (!authState) {
      // no user logged in
      setAuthUser(null);
    } else {
      setAuthUser(authState);
      // can set cookies here
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
