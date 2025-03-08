import Link from "next/link";

export default function Navbar() {
    return (
        <div className=" bg-white text-center h-1/10 flex flex-row drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
            <div className="flex flex-row w-2/5">
    
                {/*Title*/}
                <div className="ml-10">
                    <Link href="/">
                        <img src="/logo-title.png" alt="SK Logo Titles" className="h-full w-full object-contain" />
                    </Link>
                </div>
            </div>



            <div className="p-4 text-center h-full flex flex-row w-3/5">
                {/*Menu*/}
                <ul className="flex flex-row justify-end w-full gap-5 mr-5">
                    <li className="py-5 px-10 rounded-md border-b-4 border-[#0438A8] hover:text-white hover:bg-[#0438A8] hover:cursor-pointer transition-all duration-300 delay-50">
                        <Link href="/about">
                            ABOUT US
                        </Link>
                    </li>

                    <li className="py-5 px-10 rounded-md border-b-4 border-[#CF1929] hover:text-white hover:bg-[#CF1929] hover:cursor-pointer transition-all duration-300 delay-50">
                        <Link href="/projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li className="py-5 px-10 rounded-md border-b-4 border-[#FFBF38] hover:text-white hover:bg-[#FFBF38] hover:cursor-pointer transition-all duration-300 delay-50">
                        <Link href="/services">
                            SERVICES
                        </Link>
                    </li>
                </ul>

                <button className="text-[#0438A8] p-2 rounded-lg w-1/8 mx-4 hover:text-white hover:bg-[#0438A8] hover:cursor-pointer transition-all duration-300 delay-50">Login</button>
                <button className="bg-[#0438A8] text-white p-2 rounded-lg w-1/5 hover:text-[#0438A8] hover:bg-white hover:border hover:cursor-pointer transition-all duration-300 delay-50">Create an Account</button>
            </div>
        </div>
    );
}