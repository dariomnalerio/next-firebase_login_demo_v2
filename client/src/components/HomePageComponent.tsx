"use client";
import { useEffect, useState } from "react";
import useFirebaseAuth from "../../firebase/useAuth";

export default function CurrentUserInfo() {
  const { user, loading, logOut } = useFirebaseAuth();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user) {
      if (user.displayName) {
        setUserName(user.displayName);
      }
    }
  }, [user]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {user && user.email ? (
        <h1>Welcome {userName || user.email}</h1>
      ) : (
        <h1>Not logged in</h1>
      )}
    </>
  );
}
