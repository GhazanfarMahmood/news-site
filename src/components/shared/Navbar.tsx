'use client';

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    const {isDark ,toggleTheme} = useTheme();
    return (
        <header className="bg-bg py-3">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link href={"/"} aria-label="Home page line" className="font-secondary text-4xl font-bold leading-[1] text-dark">
                        The Daily News
                    </Link>
                    <div className="flex items-center justify-center gap-5">
                        <Link href={"/"} aria-label="favorite page link" className="flex items-center justify-center gap-1 text-dark transition-all delay-300 ease-in group hover:text-primary group">
                            <Image src={"/assets/images/icons/heart-regular.svg"} alt="heart-icon" width={20} height={20} className="w-5 object-contain filter-(--filter-dark) transition-all delay-300 ease-in group-hover:filter-(--filter-primary)" />
                            Favorite
                        </Link>
                        <button className="w-8 h-8 flex items-center justify-center border-[1px] border-dark rounded-md cursor-pointer transition-all delay-300 ease-in group hover:border-primary" onClick={() => toggleTheme()}>
                            {isDark === "dark"? 
                             <Image src={"/assets/images/icons/sun.svg"} alt="sun-icon" width={20} height={20} className="w-5 object-contain filter-(--filter-dark) transition-all delay-300 ease-in group-hover:filter-(--filter-primary)"  />
                             :
                             <Image src={"/assets/images/icons/moon.svg"} alt="moon-icon" width={20} height={20} className="w-5 object-contain filter-(--filter-dark) transition-all delay-300 ease-in group-hover:filter-(--filter-primary)" />
                            }
                        </button>
                        <select name="multi-language" className="border-[1px] border-dark rounded-sm px-1 focus:outline-[1px] focus:outline-dark text-dark" defaultValue={"English"}>
                            <option value="English" className="text-dark">English</option>
                            <option value="French" className="text-dark">French</option>
                            <option value="Arabic" className="text-dark">Arabic</option>
                            <option value="Japanese" className="text-dark">Japanese</option>
                            <option value="Spanish" className="text-dark">Spanish</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}