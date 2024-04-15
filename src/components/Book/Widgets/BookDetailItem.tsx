import React from "react";

interface BookDetailItemProps {
    label?: string;
    title?: string;
}

const BookDetailItem: React.FC<BookDetailItemProps> = ({
    label,
    title,

}) => {
    return (
        <>
            <div className="flex items-start lg:items-center">
                <p className="font-bold inline-block mr-10 lg:mr-10 2xl:mr-10-2xl w-[150px] lg:w-[150px] 2xl:w-[10.417vw]">{label}</p>
                <p className="inline-block w-[calc(100%-150px)] lg:w-[calc(100%-150px)] 2xl:w-[calc(100%-10.417vw)]">{title}</p>
            </div>
        </>
    )
}
export default BookDetailItem;