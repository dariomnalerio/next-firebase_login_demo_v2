"use client";
export default function () {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="First Name"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Age"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
      />
      <input
        type="email"
        placeholder="Email"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
      />
      <input
        type="password"
        placeholder="Password"
        className="input-sm md:input-md border-opacity-20 rounded-lg w-full max-w-xs"
      />

      <button className="btn hover:opacity-90 rounded-lg">Edit</button>
    </div>
  );
}
