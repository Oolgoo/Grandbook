

import { useEffect, useRef, useState } from "react";
import { Router, useRouter } from "next/router";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import 'swiper/css';
import Button from "@components/Ui/Button";
import { useTranslation } from 'next-i18next'

import LearningSingle from "./Widgets/LearningSingle";
const LearningHome = ({ homeLearningData }) => {
    const { t } = useTranslation('common')
    const blogSwipePrev = useRef(null)
    const blogSwipeNext = useRef(null)
    const router = useRouter()


    return (
        <section className="py-40 lg:py-60 2xl:py-60-2xl">
            <div className="tw-container-middle">
                <div className="relative w-full flex justify-between items-center mb-20 lg:mb-40 2xl:mb-40-2xl">
                    <h4 className="font-normal">{"Сургалтууд"}</h4>

                    <div className="flex">
                        <Button label={"Бүх сургалтууд"} variants="tertiary" onClick={() => router.push('/learning')} />


                        {/* <div className="justify-between space-x-10 lg:space-x-10 2xl:space-x-10-2xl hidden lg:flex">
                            <div ref={blogSwipePrev}>
                                <ButtonIcon variants="custom" className="blogSwipePrev" />
                            </div>
                            <div ref={blogSwipeNext}>
                                <ButtonIcon variants="custom" className="blogSwipeNext rotate-180" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="w-full">
                    <Swiper
                        navigation={{
                            prevEl: blogSwipePrev.current,
                            nextEl: blogSwipeNext.current,
                        }}
                        breakpoints={{
                            300: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                                speed: 500
                            },
                            576: {
                                slidesPerView: 2.2,
                                spaceBetween: 20,
                                speed: 500

                            },
                            768: {
                                slidesPerView: 2.25,
                                spaceBetween: 20,
                                speed: 800

                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40

                            },
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 40

                            },
                            1920: {
                                slidesPerView: 3,
                                spaceBetween: 60

                            }
                        }}
                        speed={1200}
                        spaceBetween={0}
                        loop={false}
                        pagination={false}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="h-full cursor-pointer"
                    >
                        {/* {homeLearningData.map((item, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <LearningSingle
                                            key={item.title}
                                            title={item?.attributes?.title}
                                            content={item?.attributes?.content}
                                            slug={item.attributes.slug}

                                        />
                                    </SwiperSlide>
                                </>
                            )
                        })} */}
                    </Swiper>



                </div>

            </div>
        </section>
    )
}
export default LearningHome;