"use client";


import Navbar from "@/component/Navbar";
import SideNavbar from "@/component/SideNavbar";
import { useParams } from "next/navigation";

export default function ServiceForm() {
    const { service } = useParams();

    return (
        <div className="h-screen w-full">
                
            <Navbar />
                
            <div className=" flex flex-row">
                <div className="h-full w-1/6 bg-gray-800 text-white fixed left-0 top-24 z-49"> 
                    <SideNavbar />
                </div>
        
                <div className="ml-[16.67%] mt-[10vh] bg-white w-5/6 p-4 flex flex-col"><h1>You're requesting: {service}</h1>;</div>
            </div>
        </div>
    );
    
}
