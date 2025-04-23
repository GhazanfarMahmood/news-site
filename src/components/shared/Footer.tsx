import Link from "next/link";

export default function Footer(){
    return (
        <footer className="bg-bg py-1.5">
            <div className="container">
                <div className="flex items-center justify-center gap-1 text-dark text-center">
                    All rights reserved by 
                    <Link href={"/"} className="font-secondary font-bold text-[1.25rem] text-dark ">The Daily News.</Link>
                    <span className="h-5">❤️</span>
                </div>
            </div>
        </footer>
    )
}