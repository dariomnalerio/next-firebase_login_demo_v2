"use client";
import { useState } from "react";
import initFirebase from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function () {
  initFirebase();
  const auth = getAuth(); // gets information from firebaseConfig.ts

  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });

    router.push("/");

    // TODO: Add user to database, update info on firebase auth
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="First Name*"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        required
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Last Name*"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        required
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <input
        type="text"
        placeholder="Age"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <input
        type="email"
        placeholder="Email*"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Password*"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <p className="text-xs md:text-md place-self-center">
        Inputs with * are mandatory
      </p>
      <button
        className="btn hover:opacity-90 rounded-lg"
        onClick={handleSignUp}
      >
        Sign up
      </button>
    </div>
  );
}
