"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import initFirebase from "../../firebaseConfig";

export default function CurrentUserInfo() {
  initFirebase();
  const router = useRouter();
  const auth = getAuth();

  const [email, setEmail] = useState("");

  const authStateChangeHandler = (authState: any) => {
    if (!authState) {
      console.log("User is not logged in");
      router.push("/login");
    } else {
      const email = setEmail(authState.email);
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

  return <>{email ? <h1>Welcome {email}</h1> : <h1>Not logged in</h1>}</>;
}
