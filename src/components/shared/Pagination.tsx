import Image from "next/image"

export default function Pagination(
    {pages, handleChange, currentPage, handlePrev, handleNext, start, totalPages} :
    {pages : number, handleChange: (n : number) => void, currentPage: number, handlePrev: () => void, handleNext: () => void, start: number, totalPages: number}
){
    return <div className="flex items-center justify-center flex-wrap gap-[4px] my-[10px]">
    <button disabled={currentPage === start} className={`flex items-center justify-center w-[25px] h-[30px] border-1 border-dark cursor-pointer ${currentPage === start ? "opacity-50" : ""}`} onClick={() => handlePrev()}>
        <Image src="/assets/images/icons/chevron-left.svg" alt="arrow-icon" width={18} height={18} className="w-[18px] h-[18px] filter-(--filter-dark)" />
    </button>
    {/* here's i add the ...Array(pages).keys() inside the square brackets so that it work as the an original array */}
        {[...Array(pages).keys()].map((item) => {
            return ( <>
                <button key={item}  onClick={() => handleChange(item)} className={`flex items-center justify-center w-[25px] h-[30px] border-1 border-dark cursor-pointer text-dark ${currentPage === item ? "bg-dark text-light" : ""}`}>{item + 1}</button>
            </>)
        })}
   <button disabled={currentPage === totalPages - 1} className={`flex items-center justify-center w-[25px] h-[30px] border-1 border-dark cursor-pointer ${currentPage === totalPages - 1 ? "opacity-50": ""}`} onClick={() => handleNext()}>
        <Image src="/assets/images/icons/chevron-right.svg" alt="arrow-icon" width={18} height={18} className="w-[18px] h-[18px] filter-(--filter-dark)" />
    </button>
    </div>
}