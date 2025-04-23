import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <header className="bg-gray-400 py-3">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link href={"/"} aria-label="Home page line" className="font-secondary text-4xl font-bold leading-[1]">
                        The Daily News
                    </Link>
                    <div className="flex items-center justify-center gap-2.5">
                        <Link href={"/"} aria-label="favorite page link" className="flex items-center justify-center">
                            <Image src={"/assets/images/icons/heart-regular.svg"} alt="heart-icon" width={20} height={20} className="w-5 object-contain" />
                            Favorite
                        </Link>
                        <button>
                            <Image src={"/assets/images/icons/moon.svg"} alt="moon-icon" width={20} height={20} className="w-5 object-contain" />
                            <Image src={"/assets/images/icons/sun.svg"} alt="sun-icon" width={20} height={20} className="hidden w-5 object-contain"  />
                        </button>
                        {/* HERE WILL DROPDOWN COME WITH MULTIPLY LANGUAGE SUPPORT */}
                    </div>
                </div>
            </div>
        </header>
    )
}