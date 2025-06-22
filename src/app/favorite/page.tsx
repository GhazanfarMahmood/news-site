"use client";

import { useEffect, useState } from "react";
import MainContent from "@/components/ui/MainContact";
import { DataType } from "@/types/user";
import Link from "next/link";

export default function FavoritePage() {
  const [favorites, setFavorites] = useState<DataType[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("newArra") || "[]");
    setFavorites(stored);
  }, []);

  useEffect(() => {
    const syncFavorites = () => {
      const updated = JSON.parse(localStorage.getItem("newArra") || "[]");
      setFavorites(updated);
    };

    window.addEventListener("favoritesUpdated", syncFavorites);
    return () => {
      window.removeEventListener("favoritesUpdated", syncFavorites);
    };
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="h-[85vh] flex items-center justify-center text-center text-gray-600 py-10">
        <h1 className="text-[40px] text-dark">
            No item to display
            <span className="flex items-center justify-center gap-[5px] text-[18px]">
                Go Back to
                <Link href={"/"} className="underline transition-all delay-300 ease-in hover:text-primary">Home</Link>
                Page
            </span>
        </h1>
      </div>
    );
  }

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {favorites.map((item, index) => (
        <MainContent key={index} item={item} isFromFavoritesPage />
      ))}
    </div>
  );
}
