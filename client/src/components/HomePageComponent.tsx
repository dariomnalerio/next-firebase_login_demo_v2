"use client";
import useFirebaseAuth from "../../firebase/useAuth";

export default function CurrentUserInfo() {
  const { user, loading, logOut } = useFirebaseAuth();
  let email = null;

  if (user) {
    email = user.email;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <>{email ? <h1>Welcome {email}</h1> : <h1>Not logged in</h1>}</>;
}
