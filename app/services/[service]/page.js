"use client";

import Navbar from "@/component/Navbar";
import SideNavbar from "@/component/SideNavbar";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { serviceForm } from "@/app/utils/formFields";
import GymReservations from "@/component/GymReservations";
import VehicleReservations from "@/component/VehicleReservations";
import Certificates from "@/component/Certificates";
import PrintMaterials from "@/component/PrintMaterials";
import Partnerships from "@/component/Partnerships";

export default function Services() {
    const { service } = useParams();
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
        }
        setIsClient(true);
    }, [status, router]);

    if (status === "loading") return <p className="p-6 text-blue-500">Loading...</p>;
    if (!session) return null;

    const ServiceFormComponent = serviceForm[service];

    if (!ServiceFormComponent) {
        return <p className="p-6 text-red-500">Service not found.</p>;
    }

    return (
        <div className="h-screen w-full">
            <Navbar />
            <div className="flex flex-row">
                <div className="h-full w-1/6 bg-gray-800 text-white fixed left-0 top-24 z-49">
                    <SideNavbar />
                </div>
                <div className="ml-[16.67%] mt-[10vh] bg-white w-5/6 p-4 flex flex-col">
                    {isClient && <ServiceFormComponent />}
                </div>
            </div>
        </div>
    );
}