import LoginForm from "@/components/LoginForm";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-200 mx-4 md:mx-8 lg:mx-16 py-12 lg:mt-48 md:mt-36 mt-12 md:shadow-lg rounded-3xl ">
      <h1 className="mb-5 uppercase">Log into your account</h1>
      <LoginForm />
    </div>
  );
}
