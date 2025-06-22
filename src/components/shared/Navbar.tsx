'use client';

import { useTheme } from "@/context/ThemeContext";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const { setQuery } = useUser();
  const { isDark, toggleTheme } = useTheme();
  const [inputData, setInputData] = useState<string>("");

  const pathname = usePathname();
  const isActive = pathname === "/favorite";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputData.trim() !== "") {
      setQuery(inputData.trim());
    }
    setInputData("");
  };

  return (
    <header className="bg-bg py-3">
      <div className="container">
        <div className="flex justify-between items-center md:flex-nowrap flex-wrap flex-col sm:flex-row gap-[10px] sm:gap-0">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Home page link"
            className="font-secondary text-4xl font-bold leading-[1] text-dark order-none sm:max-md:order-1 w-auto sm:max-md:w-[50%]"
          >
            The Daily News
          </Link>

          {/* Search Form */}
          <form
            className="flex items-center justify-center p-[2px_10px] border-[1px] border-dark bg-light rounded-[4px] has-focus:outline-dark has-focus:outline-[1px] order-none sm:max-md:order-3 md:mx-0 mx-auto mt-0 sm:max-md:mt-[10px]"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search..."
              aria-label="search input"
              className="text-[14px] placeholder:text-gray-500 text-dark focus:outline-none"
              name="search"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button type="submit" className="flex items-center justify-center cursor-pointer">
              <Image
                src="/assets/images/icons/search.svg"
                alt="search-icon"
                width={16}
                height={16}
                className="w-[16px] object-contain filter-(--filter-dark)"
              />
            </button>
          </form>

          {/* Right Side: Favorite & Theme Toggle */}
          <div className="flex items-center md:justify-center justify-end gap-5 order-none sm:max-md:order-2 w-auto sm:max-md:w-[50%]">
            {/* Favorite Link */}
            <Link
              href="/favorite"
              aria-label="favorite page link"
              className={`flex items-center justify-center gap-1 text-dark transition-all delay-300 ease-in group hover:text-primary
                ${isActive ? "[&>*:nth-child(1)]:hidden [&>*:nth-child(2)]:block" : "[&>*:nth-child(2)]:hidden"}
              `}
            >
              {/* Outline Heart */}
              <Image
                src="/assets/images/icons/heart-regular.svg"
                alt="heart-icon"
                width={20}
                height={20}
                className="w-5 object-contain filter-(--filter-dark) transition-all delay-300 ease-in group-hover:filter-(--filter-primary)"
              />
              {/* Filled Heart */}
              <Image
                src="/assets/images/icons/heart-solid.svg"
                alt="heart-icon"
                width={20}
                height={20}
                className="w-5 object-contain filter-(--filter-dark) transition-all delay-300 ease-in group-hover:filter-(--filter-primary)"
              />
              favorite
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center border-[1px] border-dark rounded-md cursor-pointer transition-all delay-300 ease-in group hover:border-primary"
            >
              {isDark === "dark" ? (
                <Image
                  src="/assets/images/icons/sun.svg"
                  alt="sun-icon"
                  width={20}
                  height={20}
                  className="w-5 object-contain filter-(--filter-dark) transition-all delay-300 ease-in group-hover:filter-(--filter-primary)"
                />
              ) : (
                <Image
                  src="/assets/images/icons/moon.svg"
                  alt="moon-icon"
                  width={20}
                  height={20}
                  className="w-5 object-contain filter-(--filter-dark) transition-all delay-300 ease-in group-hover:filter-(--filter-primary)"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
