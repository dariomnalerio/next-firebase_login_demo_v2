import CurrentUserInfo from "@/components/HomePageComponent";


export default function Home() {
  return (
    <div className="flex  flex-col items-center align-middle mt-20">
      <h1 className="mb-10">Home page</h1>

      <CurrentUserInfo />
    </div>
  );
}
