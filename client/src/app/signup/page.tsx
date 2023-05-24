import SignupForm from "@/components/SignupForm";

export default function Signup() {
  return (
    <div className="flex flex-col items-center align-middle bg-slate-200 mx-4 md:mx-8 lg:mx-16 py-12 lg:mt-48 md:mt-36 mt-12 md:shadow-lg rounded-3xl ">
      <h1 className="mb-5 uppercase">Create an account</h1>
      <SignupForm />
    </div>
  );
}
