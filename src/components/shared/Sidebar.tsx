
import { DataType } from "@/types/user"
import Image from "next/image"

export default function SideBar({item} : {item : DataType}) {
    return <>
        <div className="flex items-center justify-start gap-2 mb-5">
            {item.urlToImage === null 
            ? <Image src={"/assets/images/loading.webp"} alt={item.author ?? "news image"} width={80} height={80} className="w-[140px] min-w-[80px] md:min-w-[140px] md:w-auto h-[80px] object-cover rounded-md"  /> : 
            <img src={item.urlToImage} alt={item.author ?? "news image"} width={80} height={80} className="w-[140px] min-w-[80px] md:min-w-[140px] md:w-auto h-[80px] object-cover rounded-md" />  
            }
            <div>
                <a href={item.url} aria-label={item.title} className="text-dark line-clamp-2 cursor-pointer transition-all delay-300 hover:text-primary mb-1" target="_blank">{item.title}</a>
                <div className="flex items-center justify-start flex-wrap gap-1">
                    <span className="text-[10px] text-br">Author: {item.author}</span>
                    <span className="text-[10px] text-br">Published at: {new Date(item.publishedAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    </>
}