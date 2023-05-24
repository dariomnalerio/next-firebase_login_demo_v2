"use client";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((userCredential) => {
        // Signed in
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />

      <button className="btn hover:opacity-90 rounded-lg" onClick={handleLogin}>
        Sign in
      </button>
    </div>
  );
}
