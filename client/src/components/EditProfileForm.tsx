"use client";

import { UpdateUser } from "@/utils/UpdateUser";
import { useState } from "react";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEdit = () => {
    UpdateUser(firstName, lastName, age, password, email);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="First Name"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
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
        placeholder="Email"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Update password"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button className="btn hover:opacity-90 rounded-lg" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}
