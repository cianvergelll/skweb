import Navbar from "@/component/Navbar";
import SideNavbar from "@/component/SideNavbar";


export default function Services() {
    return (
        <div className="h-screen w-screen">
        
            <Navbar />
        
            <div className=" flex flex-row h-9/10">
                <div className="h-full w-1/6 bg-gray-800 text-white"> 
                    <SideNavbar />
                </div>

                <div className="bg-white w-5/6 p-4"></div>
            </div>
        </div>
    );
}