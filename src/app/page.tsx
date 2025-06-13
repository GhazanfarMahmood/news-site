"use client";

import Pagination from "@/components/shared/Pagination";
import SideBar from "@/components/shared/Sidebar";
import CategoryTab from "@/components/ui/CategoryTab";
import MainContent from "@/components/ui/MainContact";
import { useUser } from "@/context/UserContext";
import { ArrayProps } from "@/types/user";
import { useEffect, useState } from "react";

export default function Main(){
const [values, setValues] = useState<ArrayProps>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { data, sourceData, initialLoading, queryLoading } = useUser();

  // Here's i again run useEffect hook in which i fetch data from values through custom hook and store that in setValues state and than use that state to get data in which we store value
   useEffect(() => {
    setValues(data);
    setCurrentPage(0); // reset to first page on new data
  }, [data]);
  

  // HERE'S I DEFINE THE PAGE SIZE MEANS PRODUCT OR ITEM PER PAGE
  const pageSize = 10;

  // HERE'S I GET THE TOTAL PRODUCTS LENGTH THAT ARE COMING THROUGH AN API
  const totalProducts = values.length;

  // HERE we get the total pages with the help of totalProducts divided by pageSize and we use the Math.ceil because if the value come in rounded or decimal then we use Math.ceil to round of the number up to its nearest integer value.
  const totalPages = Math.ceil(totalProducts / pageSize);

  // here i will get the starting index of page
  const start = pageSize * currentPage;

  // here i will get the end index of page 
  const end = pageSize + start;

  // HERE I WILL RUN A FUNCTION IN WHICH WE THE PAGE CHANGE ON THE BASE OF NUMBER IN PAGINATION 
  const handleChange = (n : number): void => {
    setCurrentPage(n);
  };

  const handlePrev = () =>{
    setCurrentPage((prev) => prev - 1);
  };
  
  const handleNext = () => {
    setCurrentPage((next) => next + 1);
  }

  return (
      <div className="container">
      <CategoryTab />
      {initialLoading ? (
        <div className="h-dvh flex items-center justify-center">
          <h1 className="text-[24px] text-dark">Loading....</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[60%_1fr] lg:grid-cols-3 gap-4">
          {queryLoading ? ( <div className="h-dvh flex items-center justify-center row-start-2 md:row-start-1 col-span-1 lg:col-span-2">
              <h1 className="text-[45px] font-bold text-dark">Loading.....</h1>
            </div>):
          values.length === 0 ? (
            <div className="h-dvh flex items-center justify-center row-start-2 md:row-start-1 col-span-1 lg:col-span-2">
              <h1 className="text-[45px] font-bold text-dark">No Content to show</h1>
            </div>
          ) : (
            <>
              <div className="grid row-start-2 md:row-start-1 grid-cols-1 lg:grid-cols-2 gap-2 col-span-1 lg:col-span-2">
                {values.slice(start, end).map((item) => (
                  <MainContent item={item} key={item.publishedAt} />
                ))}
              </div>
              <div className="col-span-2 md:row-start-2 row-start-3 md:col-span-3 lg:col-span-4">
                <Pagination
                  pages={totalPages}
                  handleChange={handleChange}
                  currentPage={currentPage}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  start={start}
                  totalPages={totalPages}
                />
              </div>
            </>
          )}
          <div className="col-span-1 row-start-1 col-start-1 md:col-start-2 lg:col-start-3 md:sticky top-[20px] h-fit mb-[0px] md:mb-[50px]">
            <h1 className="font-bold text-dark text-[20px] mb-2">Popular Content</h1>
            {sourceData.slice(0, 5).map((item) => (
              <SideBar item={item} key={item.publishedAt} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}