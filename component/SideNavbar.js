import Image from "next/image";
import Link from "next/link";

export default function SideNavbar() {
  return (
    <div className="h-full w-1/6 bg-[#F3F4F6] text-[#0438A8] flex justify-center items-start p-6 fixed left-0 top-24 z-49">
      <ul className="flex flex-col gap-6">
        <li className="mt-6 font-bold text-lg border-b-2 border-r-2 text-center border-[#0438A8] rounded-lg px-6 py-4 bg-white text-[#0438A8] shadow-md hover:bg-[#0438A8] hover:text-white hover:font-bold transition duration-200">
          <Link href="/services/certificates">
            Certificates
          </Link>
        </li>
        <li className="font-bold text-lg border-b-2 border-r-2 text-center border-[#0438A8] rounded-lg px-6 py-4 bg-white text-[#0438A8] shadow-md hover:bg-[#0438A8] hover:text-white hover:font-bold transition duration-200">
          <Link href="/services/print-materials">
            Print Materials
          </Link>
        </li>
        <li className="font-bold text-lg border-b-2 border-r-2 text-center border-[#0438A8] rounded-lg px-6 py-4 bg-white text-[#0438A8] shadow-md hover:bg-[#0438A8] hover:text-white hover:font-bold transition duration-200">
          <Link href="/services/partnership">
            Partnerships
          </Link>
        </li>
        <li className="font-bold text-lg border-b-2 border-r-2 text-center border-[#0438A8] rounded-lg px-6 py-4 bg-white text-[#0438A8] shadow-md hover:bg-[#0438A8] hover:text-white hover:font-bold transition duration-200">
          <Link href="/services/vehicle-reservation">
            Vehicle Reservation
          </Link>
        </li>
        <li className="font-bold text-lg border-b-2 border-r-2 text-center border-[#0438A8] rounded-lg px-6 py-4 bg-white text-[#0438A8] shadow-md hover:bg-[#0438A8] hover:text-white hover:font-bold transition duration-200">
          <Link href="/services/gym-reservation">
            Gym Reservation
          </Link>
        </li>
      </ul>

      <div className="absolute bottom-30 w-full h-72">
        <Image
          src="/logo-2.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}