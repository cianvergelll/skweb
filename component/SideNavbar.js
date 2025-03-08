import Image from "next/image";

export default function SideNavbar() {
    return (
        <div className="h-full w-full bg-[#0438A8] text-white">
            <ul className="flex flex-col gap-10 justify-center items-center">
                <li className="mt-10 font-bold text-lg">Certificates</li>
                <li className="font-bold text-lg">Print Materials</li>
                <li className="font-bold text-lg">Partnership</li>
                <li className="font-bold text-lg">Vehicle Reservation</li>
                <li className="font-bold text-lg">Gym Reservation</li>
            </ul>

            <div className="absolute bottom-20 w-1/6 h-72">
                <Image src="/logo-2.png" alt="Logo" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
        </div>
    );
}