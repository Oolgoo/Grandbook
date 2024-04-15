import { useEffect, useRef, useState } from "react";
import { Router, useRouter } from "next/router";
import BookSingle from "./Widgets/BookSingle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import 'swiper/css';
import Button from "@components/Ui/Button";
import ButtonIcon from "@components/Ui/ButtonIcon";

const BookHome = ({ books }) => {

    const blogSwipePrev = useRef(null)
    const blogSwipeNext = useRef(null)
    const router = useRouter()

    return (
        <>
            <section className="py-40 lg:py-60 2xl:py-60-2xl border-b border-b-gray-main">
                <div className="tw-container">
                    <div className="relative w-full flex justify-between items-center mb-20 lg:mb-30 2xl:mb-30-2xl">
                    <div className="inline-block font-extrabold text-9xl text-transparent animate-pulse" style={{
                    background: "linear-gradient(-225deg, #9b00b5 0%, #ff006e 29%, #ff477e 67%, #ff6000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                    }}>
                    <h4>Энэ сарын шилдгүүд</h4>
            </div>

                        <div className="flex">
                            <Button label={"Бүгдийг харах"} variants="tertiary" onClick={() => router.push('/book')} />
                        </div>
                    </div>
                </div>
                <div className="tw-container pr-0 md:pr-0 lg:pr-60 2xl:pr-60-2xl">
                    <Swiper
                        navigation={{
                            prevEl: blogSwipePrev.current,
                            nextEl: blogSwipeNext.current,
                        }}
                        breakpoints={{
                            300: {
                                slidesPerView: 2.5,
                                spaceBetween: 10,
                                speed: 500
                            },
                            576: {
                                slidesPerView: 3.5,
                                spaceBetween: 10,
                                speed: 500

                            },
                            768: {
                                slidesPerView: 4.5,
                                spaceBetween: 10,
                                speed: 800

                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20

                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 20

                            },
                            1920: {
                                slidesPerView: 5,
                                spaceBetween: 20

                            }
                        }}
                        speed={1200}
                        spaceBetween={50}
                        loop={false}
                        pagination={false}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="h-[110%]   cursor-pointer"

                    >
                        {books?.data?.map((book) => {
                            return (
                                <SwiperSlide key={book?.id}>
                                    <BookSingle
                                        data={book}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </div>
            </section>
        </>
    )
}
export default BookHome;