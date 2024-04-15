import React from "react";

interface BookTitleProps {
    label?: string;
    count?: string;
}

const BookTitle: React.FC<BookTitleProps> = ({ label, count }) => {
    return (
        <>
            <div className="relative mb-20 lg:mb-0">
                <h4 className="relative font-normal">{label}</h4>
                <div className="bg-primary absolute rounded-full top-0 -right-30 lg:-right-30 2xl:-right-30-2xl w-20 lg:w-20 2xl:w-20-2xl h-20 lg:h-20 2xl:h-20-2xl flex items-center justify-center">
                    <div className="text-white text-[10px] lg:text-[10px] 2xl:text-[0.694vw] leading-[10px] lg:leading-[10px] 2xl:leading-[0.694vw] block">{count}</div>
                </div>
            </div>
        </>
    )
}

export default BookTitle;