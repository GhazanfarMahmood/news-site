"use client";

// IMPORTING SWIPER SLIDER FROM SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';

// IMPORTING CSS OF SWIPER SLIDER AND FOR NAVIGATION
import 'swiper/css';
import 'swiper/css/navigation';

// ALSO IMPORTING NAVIGATION THAT IS USED FOR SWIPING
import { Navigation } from "swiper/modules";
import Image from "next/image";

// CATEGORIES THAT CAN BE USE AS TEXT IN CATEGORY
import { useUser } from '@/context/UserContext';
import React, { useState } from 'react';

import { useCategories } from '@/utils/constant';

export default function CategoryTab(){
    // HERE'S WE USE CUSTOM HOOK TO GET setQuery FUNCTION SO THAT WE CAN GET VALUE THROUGH CATEGORY TAB AND PASS TO URL 
   const { setQuery } = useUser();
    // HERE'S WE USE THE USESTATE HOOK TO MAKE THE TAB OR BUTTON ACTIVE ON WHICH WE CLICK
   const [active, setActive] = useState<string>("all");

    // WE ADDED THE CLICK EVENT ON BUTTON SO THAT WE CAN GET THE VALUE OF DATA ATTRIBUTE AND PASS THE VALUE INTO setQuery FUNCTION    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // HERE'S WE GET THE VALUE OF DATA ATTRIBUTE THROUGH A EVENT IN WHICH FIRST OF ALL WE GET THAT ELEMENT AND AFTER THAT WE GET DATA ATTRIBUTE AND AFTER THAT WE GET THE NAME OF DATA ATTRIBUTE AND VALUE STORE INTO A SELECTED CATEGORY
        const selectedCategory = e.currentTarget.dataset.category;
        // IF SELECTED CATEGORY VALUE IS PRESENT
        if(selectedCategory){
            // THAN PASS THAT VALUE TO setQuery function.
            setQuery(selectedCategory);
            // HERE'S WE ALSO PASS THE VALUE FROM DATA ATTRIBUTE TO setActive FUNCTION
            setActive(selectedCategory);
        }
    }

    // HERE'S WE GET ALL THE QUERIES WHICH ARE USED AS DATA ATTRIBUTE AND ALL VALUE THROUGH CONSTANT
    const categories = useCategories();
    return (
    <div className="px-[0] sm:px-[15px] my-[20px] relative">
            <Swiper 
            slidesPerView={3}
            spaceBetween={5}
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            modules={[Navigation]} 
            className="mySwiper"
            breakpoints={{
                1200: {
                    slidesPerView: 12,
                    spaceBetween: 5,
                },
                991 : {
                    slidesPerView : 8,
                    spaceBetween: 5,
                },
                768 : {
                    slidesPerView : 6,
                    spaceBetween : 5,
                }, 
                425 : {
                    slidesPerView : 4,
                    spaceBetween : 5,   
                }
            }}
            >
                {categories.map((item) => {
                return <SwiperSlide key={item.id}>
                    <button onClick={handleClick} className={`flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px] cursor-pointer ${active === item.query ? "bg-dark text-light" : ""}`} data-category={item.query}>{item.label}</button>
                </SwiperSlide>
                })}
            </Swiper>
        <button className="arrow-left arrow w-[35px] h-[35px] bg-light flex items-center justify-center rounded-full absolute right-[-7px] sm:right-[7px] top-[50%] translate-y-[-50%] cursor-pointer z-[10] shadow-dark-sh disabled:hidden">
            <Image src="/assets/images/icons/chevron-right.svg" alt="arrow-icon" width={18} height={18} className="w-[18px] h-[18px] filter-(--filter-dark)" />
        </button>
        <button className="arrow-right arrow w-[35px] h-[35px]  bg-light flex items-center justify-center rounded-full absolute left-[-7px] sm:left-[7px] top-[50%] translate-y-[-50%] cursor-pointer z-[10] shadow-dark-sh disabled:hidden">
            <Image src="/assets/images/icons/chevron-left.svg" alt="arrow-icon" width={18} height={18} className="w-[18px] h-[18px] filter-(--filter-dark)" />
        </button>
    </div>
    );
};