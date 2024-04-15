import { useEffect, useRef, useState } from "react";
import { Router, useRouter } from "next/router";
import BlogSingle from "./Widgets/BlogSingle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import 'swiper/css';
import Button from "@components/Ui/Button";
import { useTranslation } from 'next-i18next'
import ButtonIcon from "@components/Ui/ButtonIcon";

const BlogHome = ({ blogs }) => {
    const { t } = useTranslation('common')
    const blogSwipePrev = useRef(null)
    const blogSwipeNext = useRef(null)
    const router = useRouter()
    return (
        <section className="py-40 lg:py-60 2xl:py-60-2xl">
            <div className="tw-container">
                <div className="relative w-full flex justify-between items-center mb-20 lg:mb-30 2xl:mb-30-2xl">
                    <h4 className="font-bold">{"Нийтлэл"}</h4>
                    <div className="flex">
                        <Button label={"Бүх нийтлэл"} variants="tertiary" onClick={() => router.push('/blogs')} />

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
            </div>
            <div className="tw-container pr-0 md:pr-0 lg:pr-60 2xl:pr-60-2xl">


                <div className="w-full home-blog-slide">
                    <Swiper
                        navigation={{
                            prevEl: blogSwipePrev.current,
                            nextEl: blogSwipeNext.current,
                        }}
                        breakpoints={{
                            300: {
                                slidesPerView: 2.5,
                                spaceBetween: 5,
                                speed: 500
                            },
                            576: {
                                slidesPerView: 3.5,
                                spaceBetween: 5,
                                speed: 500

                            },
                            768: {
                                slidesPerView: 3.5,
                                spaceBetween: 5,
                                speed: 800

                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 5,

                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 5,

                            },
                            1920: {
                                slidesPerView: 5,
                                spaceBetween: 5,

                            }
                        }}
                        speed={1200}
                        spaceBetween={0}
                        loop={false}
                        pagination={false}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="h-full cursor-pointer"
                    >
                        {blogs?.data.map((blog, index) => {
                            return (
                                <SwiperSlide key={blog?.id} className="pb-[30px]" >
                                    <BlogSingle
                                        key={blog.attributes.title}
                                        title={blog.attributes.title}
                                        date={blog.attributes.date}
                                        imageSrc={blog.attributes.image.data.attributes.url}
                                        slug={blog.attributes.slug}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </div>

            </div>
        </section>
    )
}
export default BlogHome;