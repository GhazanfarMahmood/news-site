
import { DataType } from "@/types/user"
import Image from "next/image"

//  the ?? means use it as the fallback, if value null come than use the text that come after the symbol as the fallback text


export default function MainContent({item}: {item : DataType}){
    return <>
        <div className="p-2 border border-1 border-br rounded-md">
                {item.urlToImage === null 
                ? <Image src={"/assets/images/loading.webp"} alt={item.author ?? "news image"} width={200} height={200} className="h-[200px] object-cover rounded-md"  /> : 
                <img src={item.urlToImage} alt={item.author ?? "news image"} width={369} height={200} className="h-[200px] object-cover rounded-md" />  
                }
                <div className="flex gap-4 lg:gap-[6px] my-2">
                    <span className="text-[14px] text-br">Author: {item.author}</span>
                    <span className="text-[14px] text-br">Published at: {new Date(item.publishedAt).toLocaleDateString()}</span>
                </div>
                <h1 className="text-[20px] font-bold text-dark leading-[1.4] mb-3">{item.title}</h1>
                <p className="text-dark line-clamp-3 mb-3">{item.description}</p>
                <a href={item.url} target="_blank" className="text-dark underline font-bold decoration-1 transition-all delay-300 hover:text-primary">Read More</a>
        </div>
    </>
}