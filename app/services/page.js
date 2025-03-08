import Navbar from "@/component/Navbar";


export default function Services() {
    return (
        <div className="h-screen w-screen">
        
              <Navbar />
        
              <div className="flex h-9/10">
                <div className="bg-gray-300 w-1/6 p-4"></div>
                <div className="bg-white w-5/6 p-4"></div>
              </div>
        </div>
    );
}