



import { useRouter } from 'next/router'
import React, { useEffect, useRef } from "react";
import { useTranslation, Trans } from 'next-i18next'
import Button from "@components/Ui/Button";
import gsap from 'gsap';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Mousewheel, Keyboard, EffectFade, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import ButtonIcon from "@components/Ui/ButtonIcon";
import Image from "next/image";


export default function Home({ homes }) {

  const router = useRouter()
  const { t } = useTranslation('common');
  useEffect(() => {
    gsap.fromTo('#menu-action1',
      { opacity: 0, y: 0 },
      { opacity: 1, y: "-50%", duration: 1.1, ease: "power1.out" });
    gsap.fromTo('.image-action1',
      { opacity: 0, width: '100%', scale: 1.2 },
      { opacity: 1, width: '100%', scale: 1, duration: 2.1, ease: "power1.out" });

  }, []);
  const blogSwipePrev = useRef(null)
  const blogSwipeNext = useRef(null)
  return (
    <>
      <section className=" relative w-full overflow-hidden border-b-0 border-t-gray-main home-swiper-cover tw-container">
        <div className="relative flex h-full">

          <div className="absolute z-10 right-0 bottom-0">
            <div className=" space-x-[2px] lg:space-x-[2px] 2xl:space-x-[0.139vw] flex lg:flex">
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <Swiper
              navigation={{
                prevEl: blogSwipePrev.current,
                nextEl: blogSwipeNext.current,
              }}
              effect={'fade'}
              speed={200}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              modules={[Navigation, Mousewheel, Keyboard, Autoplay, EffectFade, Pagination]}
              className="h-full"

            >
              {homes?.data?.map((item, index) => {
                return (
                  <>
                    <SwiperSlide key={index}>
                      <div className="relative">
                        <div className="w-full">
                          <div className="relative h-[500px] lg:h-[480px] 2xl:h-[33.333vw] w-full custom-home-cover">
                            <Image
                              src={item?.attributes?.image?.data?.attributes?.url}
                              alt="grandbook"
                              layout="fill"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })}
            </Swiper>
          </div>

          <div className="w-full block lg:hidden">
            <Swiper
              navigation={{
                prevEl: blogSwipePrev.current,
                nextEl: blogSwipeNext.current,
              }}

              speed={1200}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Mousewheel, Keyboard, Autoplay, EffectFade, Pagination]}
              className="h-full"

            >
              {homes?.data?.map((item, index) => {
                return (
                  <>
                    <SwiperSlide key={index}>
                      <div className="relative">
                        <div className="w-full">
                          <div className="relative h-[540px] lg:h-[540px] 2xl:h-[37.500vw] w-full custom-home-cover">
                            <Image
                              src={item?.attributes?.MobileImg?.data?.attributes?.url}
                              alt="grandbook"
                              layout="fill"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })}
            </Swiper>
          </div>
        </div>

      </section>


    </>
  );
};



