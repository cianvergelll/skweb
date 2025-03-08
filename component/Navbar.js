import Link from "next/link";

export default function Navbar() {
    return (
        <div className=" bg-white text-center h-1/10 flex flex-row drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
            <div className="flex flex-row w-2/5">
    
                {/*Title*/}
                <div className="ml-10">
                    <img src="/logo-title.png" alt="SK Logo Titles" className="h-full w-full object-contain" />
                </div>
            </div>



            <div className="p-4 text-center h-full flex flex-row w-3/5">
                {/*Menu*/}
                <ul className="flex flex-row justify-end w-full gap-10 border border-red-500">
                    <li className="p-5">Home</li>
                    <li className="p-5">Projects</li>
                    <li className="p-5">Services</li>
                </ul>

                <button className="text-blue-500 p-2 rounded-lg w-1/8 mx-4">Login</button>
                <button className="bg-blue-500 text-white p-2 rounded-lg w-1/5">Create an Account</button>
            </div>
        </div>
    );
}