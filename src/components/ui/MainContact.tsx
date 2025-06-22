"use client";

import { useEffect, useState } from "react";
import { DataType } from "@/types/user";
import Image from "next/image";

export default function MainContent({
  item,
  isFromFavoritesPage = false,
}: {
  item: DataType;
  isFromFavoritesPage?: boolean;
}) {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("newArra") || "[]");
    const isAlreadyFavorited = existing.some((entry: DataType) => entry.url === item.url);
    setIsFavorited(isAlreadyFavorited);
  }, [item.url]);

  const handleFavorite = (): void => {
    const existing = JSON.parse(localStorage.getItem("newArra") || "[]");
    const isAlreadyFavorited = existing.some((entry: DataType) => entry.url === item.url);

    if (isAlreadyFavorited) {
      const updated = existing.filter((entry: DataType) => entry.url !== item.url);
      localStorage.setItem("newArra", JSON.stringify(updated));
      setIsFavorited(false);
      window.dispatchEvent(new Event("favoritesUpdated"));
    } else {
      const newItem = {
        urlToImage: item.urlToImage, // ✅ use correct property name
        author: item.author,
        publishedAt: item.publishedAt,
        title: item.title,
        description: item.description,
        url: item.url,
      };
      existing.push(newItem);
      localStorage.setItem("newArra", JSON.stringify(existing));
      setIsFavorited(true);
      window.dispatchEvent(new Event("favoritesUpdated"));
    }
  };

  const imageSource = item.urlToImage || "/assets/images/loading.webp";

  return (
    <div className="p-2 border border-1 border-br rounded-md">
      <div className="relative">
        <img
          src={imageSource}
          alt={item.author ?? "news image"}
          width={369}
          height={200}
          className="h-[200px] w-full object-cover rounded-md"
        />

        <button
          className="w-[30px] h-[30px] absolute top-[15px] right-[15px] flex items-center justify-center bg-light rounded-[4px] cursor-pointer"
          onClick={handleFavorite}
        >
          {(isFromFavoritesPage || isFavorited) ? (
            <Image
              src="/assets/images/icons/heart-solid.svg"
              alt="heart-icon"
              width={20}
              height={20}
              className="w-5 object-contain filter-(--filter-dark)"
            />
          ) : (
            <Image
              src="/assets/images/icons/heart-regular.svg"
              alt="heart-icon"
              width={20}
              height={20}
              className="w-5 object-contain filter-(--filter-dark)"
            />
          )}
        </button>
      </div>

      <div className="flex gap-4 lg:gap-[6px] my-2">
        <span className="text-[14px] text-br">Author: {item.author}</span>
        <span className="text-[14px] text-br">
          Published at: {new Date(item.publishedAt).toLocaleDateString()}
        </span>
      </div>

      <h1 className="text-[20px] font-bold text-dark leading-[1.4] mb-3">
        {item.title}
      </h1>
      <p className="text-dark line-clamp-3 mb-3">{item.description}</p>
      <a
        href={item.url}
        target="_blank"
        className="text-dark underline font-bold hover:text-primary"
      >
        Read More
      </a>
    </div>
  );
}
