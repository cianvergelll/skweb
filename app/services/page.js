import Navbar from "@/component/Navbar";
import SideNavbar from "@/component/SideNavbar";
import Link from "next/link";

export default function Services() {
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
                        <Link href="/">
                            <img src="/print-materials.jpg" alt="Certificates Description" className="h-full w-full object-cover" />
                        </Link>
                    </div>
                    <div className="w-full h-96 mb-5">
                        <Link href="/">
                            <img src="/partnership.jpg" alt="Certificates Description" className="h-full w-full object-cover" />
                        </Link>
                    </div>
                    <div className="w-full h-96 mb-5">
                        <Link href="/">
                            <img src="/vehicle-reservation.jpg" alt="Certificates Description" className="h-full w-full object-cover" />
                        </Link>
                    </div>
                    <div className="w-full h-96 mb-5">
                        <Link href="/">
                            <img src="/gym-reservation.jpg" alt="Certificates Description" className="h-full w-full object-cover" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}