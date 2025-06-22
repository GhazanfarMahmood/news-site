"use client";

import Pagination from "@/components/shared/Pagination";
import SideBar from "@/components/shared/Sidebar";
import CategoryTab from "@/components/ui/CategoryTab";
import MainContent from "@/components/ui/MainContact";
import { useUser } from "@/context/UserContext";
import { ArrayProps } from "@/types/user";
import { useEffect, useState } from "react";

export default function Main() {
  const [values, setValues] = useState<ArrayProps>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [forceUpdate, setForceUpdate] = useState(0); // <- 🆕 Add this to trigger rerender

  const { data, sourceData, initialLoading, queryLoading } = useUser();

  useEffect(() => {
    setValues(data);
    setCurrentPage(0);
  }, [data]);

  // 🆕 Listen for favorite changes across tabs/pages
  useEffect(() => {
    const handleSync = () => {
      setForceUpdate((prev) => prev + 1); // trigger rerender
    };

    window.addEventListener("favoritesUpdated", handleSync);
    return () => {
      window.removeEventListener("favoritesUpdated", handleSync);
    };
  }, []);

  const pageSize = 10;
  const totalProducts = values.length;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const start = pageSize * currentPage;
  const end = pageSize + start;

  const handleChange = (n: number): void => setCurrentPage(n);
  const handlePrev = () => setCurrentPage((prev) => prev - 1);
  const handleNext = () => setCurrentPage((next) => next + 1);

  return (
    <div className="container">
      <CategoryTab />
      {initialLoading ? (
        <div className="h-dvh flex items-center justify-center">
          <h1 className="text-[24px] text-dark">Loading....</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[60%_1fr] lg:grid-cols-3 gap-4">
          {queryLoading ? (
            <div className="h-dvh flex items-center justify-center row-start-2 md:row-start-1 col-span-1 lg:col-span-2">
              <h1 className="text-[45px] font-bold text-dark">Loading.....</h1>
            </div>
          ) : values.length === 0 ? (
            <div className="h-dvh flex items-center justify-center row-start-2 md:row-start-1 col-span-1 lg:col-span-2">
              <h1 className="text-[45px] font-bold text-dark">No Content to show</h1>
            </div>
          ) : (
            <>
              <div className="grid row-start-2 md:row-start-1 grid-cols-1 lg:grid-cols-2 gap-2 col-span-1 lg:col-span-2">
                {values.slice(start, end).map((item) => (
                  <MainContent key={item.publishedAt} item={item} />
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
  );
}
