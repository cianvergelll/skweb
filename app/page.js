import Navbar from "@/component/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen">

      <Navbar />

      <div className="flex h-9/10">
        <div className="bg-white w-1/6 p-4 border border-red-500"></div>
        <div className="bg-white w-5/6 p-4"></div>
      </div>
    </div>



  );
}
