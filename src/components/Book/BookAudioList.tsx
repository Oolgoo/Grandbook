import { useEffect, useRef, useState } from "react";
import { Router, useRouter } from "next/router";
import BookSingle from "./Widgets/BookSingle";
import BookTitle from "./Widgets/BookTitle";
import s from './BookSingle.module.css'
const BookAudioList = ({ books }) => {

    const router = useRouter()
    return (
        <>
            <section className="relative my-40 lg:my-60 2xl:my-60-2xl">
                <div className="tw-container">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-40 2xl:mb-40-2xl">
                        <BookTitle label={'Aудио номын жагсаалт'} count={books?.meta?.pagination?.total} />
                    </div>
                </div>
                <div className="tw-container min-h-[70vh]">

                    <div className="w-full relative">

                        <div className="border-t border-l-0 md:border-l lg:border-l lg:border-l-gray-main border-t-gray-main grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-30 lg:gap-x-30 2xl:gap-x-30-2xl gap-y-60 lg:gap-y-60 2xl:gap-y-60-2xl !border-0">

                            {books?.data?.map((book) => {
                                return (
                                    <>
                                        <BookSingle
                                            key={book?.id}
                                            data={book}
                                            className={`border-t-gray-main border-r-0 md:border-r md:border-r-gray-main lg:border-r border-b border-b-gray-main !border-0 ${s.shadow}`}
                                            variants="audio"
                                        />

                                    </>
                                )
                            })}
                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}
export default BookAudioList;