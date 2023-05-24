"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import initFirebase from "../../firebaseConfig";

export default function CurrentUserInfo() {
  initFirebase();
  const router = useRouter();
  const auth = getAuth();

  const authStateChangeHandler = (authState: any) => {
    if (!authState) {
      console.log("User is not logged in");
      router.push("/login");
    } else {
      console.log("User is logged in");
    }
  };

  // will be called once component is mounted
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChangeHandler);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <h1>Welcome</h1>
  );
}
