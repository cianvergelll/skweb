"use client";

import Navbar from "@/component/Navbar";
import SideNavbar from "@/component/SideNavbar";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Services() {
    const { data: session, status } = useSession();
    const router = useRouter();
    
      useEffect(() => {
        if (status === "unauthenticated") {
          router.push("/");
        }
      }, [status, router]);
    
      if (status === "loading") return <p className="p-6 text-blue-500">Loading...</p>;
      if (!session) return null;

    return (
        <div className="h-screen w-full">
        
            <Navbar />
        
            <div className=" flex flex-row">
                <div className="h-full w-1/6 bg-gray-800 text-white fixed left-0 top-24 z-49"> 
                    <SideNavbar />
                </div>

                <div className="ml-[16.67%] mt-[10vh] bg-white w-5/6 p-4 flex flex-col">
                    <div className="w-full rounded-[2rem] h-96 mb-5">
                        <Link href="/services/certificates">
                            <img src="/certificates.jpg" alt="Certificates Description" className="h-full w-full object-cover" />
                        </Link>
                    </div>

                    <div className="w-full h-96 mb-5">
                        <Link href="/services/print-materials">
                            <img src="/print-materials.jpg" alt="Certificates Description" className="h-full w-full object-cover" />
                        </Link>
                    </div>
                    <div className="w-full h-96 mb-5">
                        <Link href="/services/partnership">
                            <img src="/partnership.jpg" alt="Certificates Description" className="h-full w-full object-cover" />
                        </Link>
                    </div>
                    <div className="w-full h-96 mb-5">
                        <Link href="/services/vehicle-reservation">
                            <img src="/vehicle-reservation.jpg" alt="Certificates Description" className="h-full w-full object-cover" />
                        </Link>
                    </div>
                    <div className="w-full h-96 mb-5">
                        <Link href="/services/gym-reservation">
                            <img src="/gym-reservation.jpg" alt="Certificates Description" className="h-full w-full object-cover" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}