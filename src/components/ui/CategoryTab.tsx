"use client";

// LINK FROM NEXT FOR ROUTING
import Link from "next/link";

// IMPORTING SWIPER SLIDER FROM SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';

// IMPORTING CSS OF SWIPER SLIDER AND FOR NAVIGATION
import 'swiper/css';
import 'swiper/css/navigation';

// ALSO IMPORTING NAVIGATION THAT IS USED FOR SWIPING
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function CategoryTab(){
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
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">All</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Latest</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Trending</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Tech</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Science</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Fictions</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Politics</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Top Headlines</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={"/"} className="flex items-center justify-center w-full bg--c-bg text-dark text-[14px] py-[5px] rounded-[5px]">Business</Link>
            </SwiperSlide>
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