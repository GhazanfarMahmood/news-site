"use client";

import Pagination from "@/components/shared/Pagination";
import SideBar from "@/components/shared/Sidebar";
import CategoryTab from "@/components/ui/CategoryTab";
import MainContent from "@/components/ui/MainContact";
import { UserValue } from "@/context/UserContext";
import { useEffect } from "react";

export default function Main(){
  const value = UserValue();

  useEffect(() =>{
    console.log(value)
  }, [value])

  // HERE WILL COME THE DATA FOR JUST A TIME TO DESIGN THE MAIN CONTENT AND SIDEBAR AFTER THAT THE DUMMY DATA WILL REMOVE AND ORIGINAL DATA COME FROM API

  const data = [
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Rachel Wolf",
      "title": "Trump posts video thanking Elon Musk as billionaire ends White House tenure",
      "description": "The Trump administration honored Elon Musk as the billionaire's tenure at the White House comes to an end. President Donald Trump awarded Musk a \"key to the White House\" in honor of his last day.",
      "url": "https://www.foxnews.com/politics/trump-posts-video-thanking-elon-musk-billionaire-ends-white-house-tenure",
      "urlToImage": null,
      "publishedAt": "2025-05-31T15:51:42Z",
      "content": "The Trump White House released a video on Friday marking the end of Elon Musks time working with the administration. The billionaire has been leading the newly formed Department of Government Efficie… [+2654 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Rachel Wolf",
      "title": "Trump posts video thanking Elon Musk as billionaire ends White House tenure",
      "description": "The Trump administration honored Elon Musk as the billionaire's tenure at the White House comes to an end. President Donald Trump awarded Musk a \"key to the White House\" in honor of his last day.",
      "url": "https://www.foxnews.com/politics/trump-posts-video-thanking-elon-musk-billionaire-ends-white-house-tenure",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/05/musk-trump-handshake.jpg",
      "publishedAt": "2025-05-31T15:51:42Z",
      "content": "The Trump White House released a video on Friday marking the end of Elon Musks time working with the administration. The billionaire has been leading the newly formed Department of Government Efficie… [+2654 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Rachel Wolf",
      "title": "Trump posts video thanking Elon Musk as billionaire ends White House tenure",
      "description": "The Trump administration honored Elon Musk as the billionaire's tenure at the White House comes to an end. President Donald Trump awarded Musk a \"key to the White House\" in honor of his last day.",
      "url": "https://www.foxnews.com/politics/trump-posts-video-thanking-elon-musk-billionaire-ends-white-house-tenure",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/05/musk-trump-handshake.jpg",
      "publishedAt": "2025-05-31T15:51:42Z",
      "content": "The Trump White House released a video on Friday marking the end of Elon Musks time working with the administration. The billionaire has been leading the newly formed Department of Government Efficie… [+2654 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Rachel Wolf",
      "title": "Trump posts video thanking Elon Musk as billionaire ends White House tenure",
      "description": "The Trump administration honored Elon Musk as the billionaire's tenure at the White House comes to an end. President Donald Trump awarded Musk a \"key to the White House\" in honor of his last day.",
      "url": "https://www.foxnews.com/politics/trump-posts-video-thanking-elon-musk-billionaire-ends-white-house-tenure",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/05/musk-trump-handshake.jpg",
      "publishedAt": "2025-05-31T15:51:42Z",
      "content": "The Trump White House released a video on Friday marking the end of Elon Musks time working with the administration. The billionaire has been leading the newly formed Department of Government Efficie… [+2654 chars]"
    },
  ]

  return (
    <div className="container">
      <CategoryTab />
      <div className="grid grid-cols-1 md:grid-cols-[60%_1fr] lg:grid-cols-3 gap-4">
        <div className="grid  row-start-2 md:row-start-1 grid-cols-1 lg:grid-cols-2 gap-2 col-span-1 lg:col-span-2">
          {data.map((item) =>{
            return <MainContent item={item} key={item.publishedAt} />
          })}
        </div>
        <div className="col-span-1 row-start-1 col-start-1 md:col-start-2 lg:col-start-3 md:sticky top-[20px] h-fit">
          <h1 className="font-bold text-dark text-[20px] mb-2">Popular Content</h1>
          {data.map((item) => {
            return <SideBar item={item} key={item.publishedAt} />
          })}
        </div>
        <div className="col-span-2 md:row-start-2 row-start-3 md:col-span-3 lg:col-span-4">
          <Pagination />
        </div>
      </div>
    </div>
  )
}