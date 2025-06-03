"use client";

import { ArrayProps } from "@/types/user";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SiteData() {
    const [data, setData] = useState<ArrayProps>([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await axios.get("https://newsapi.org/v2/everything?q=news&from=2025-06-02&sortBy=popularity", {
                    headers : {
                        "Authorization": process.env.NEXT_PUBLIC_SECRET_API_KEY
                    },
                });
                setData(response.data.articles);
            }catch(error) {
                console.log("something went wrong", error);
            };
        };
        fetchData();
    }, []);


    return data;
};