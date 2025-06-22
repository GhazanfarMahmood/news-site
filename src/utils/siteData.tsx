import { ArrayProps } from "@/types/user";
import axios from "axios";

export default async function  SiteData(query : string) : Promise<ArrayProps> {
    const searchQuery = query || "news";
    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2025-05-29&sortBy=popularity&limit=500`;
    try{
        const response = await axios.get(url, {
            headers : {
                "Authorization": process.env.NEXT_PUBLIC_SECRET_API_KEY
            },
        });
        return response.data.articles;
    }catch(error) {
        console.error("something went wrong", error);
        return [];
    };
};