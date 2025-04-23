import Link from "next/link";

export default function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="flex items-center justify-center gap-1 text-center">
                    All rights reserved by 
                    <Link href={"/"} className="font-secondary font-bold text-[1.25rem] transition-all delay-300 ease-in hover:text-red-800">The Daily News.</Link>
                    <span className="h-5">❤️</span>
                </div>
            </div>
        </footer>
    )
}