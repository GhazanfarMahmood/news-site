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

import { categories } from '@/utils/constant';

export default function CategoryTab(){
   const { setQuery } = useUser();
   const [active, setActive] = useState<string>("all");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCategory = e.currentTarget.dataset.category;
    if(selectedCategory){
        setQuery(selectedCategory);
        setActive(selectedCategory);
    }
}
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