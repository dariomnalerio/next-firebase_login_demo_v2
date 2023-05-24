"use client";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import initFirebase from "../../firebaseConfig";

export default function Nav() {
  // Need to add mobile nav
  initFirebase();

  const router = useRouter();

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

  return (
    <div className="navbar bg-base-200 shadow-2xl border-base-300 rounded-b-2xl hidden md:flex md:lg-px-12 lg:px-20 mb-5">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl rounded-full"
        >
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex mx-2 gap-5">
          <li>
            <Link
              href="/signup"
              className="btn btn-ghost normal-case rounded-full"
            >
              Signup
            </Link>
          </li>
          <li className="btn btn-ghost normal-case rounded-full">
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="btn btn-ghost normal-case rounded-full"
            >
              Profile
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-ghost normal-case rounded-full"
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
