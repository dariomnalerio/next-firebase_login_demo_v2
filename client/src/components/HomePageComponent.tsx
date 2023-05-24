"use client";
import useFirebaseAuth from "../../firebase/useAuth";

export default function CurrentUserInfo() {
  const { user, loading, logOut } = useFirebaseAuth();
  let email = null;
  let displayName = null;

  if (user) {
    email = user.email;
    displayName = user.displayName;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <>{email ? <h1>Welcome {displayName}</h1> : <h1>Not logged in</h1>}</>;
}
