import EditProfileForm from "@/components/EditProfileForm";

export default function Login() {
  // email and password must be updated on firebase
  return (
    <div className="flex flex-col items-center justify-center bg-slate-200 mx-4 md:mx-8 lg:mx-16 py-12 md:shadow-lg rounded-3xl">
      <h1 className="mb-5 uppercase">Edit your profile</h1>
      <EditProfileForm />
    </div>
  );
}
