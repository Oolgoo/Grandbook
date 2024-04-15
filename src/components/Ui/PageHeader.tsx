
import React, { useEffect } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import Image from "next/image";
import classNames from 'classnames';
import gsap from "gsap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, EffectFade } from "swiper";
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from "next/link";
interface PageHeaderProps {
    className?: string;
    type?: 'primary' | 'secondary';
    data?: {
        title?: string;
        subTitle?: string;
        image?: any;
        button?: any;
    },
    defaultTitle?: string;
    defaultSubTitle?: string;
    defaultImage?: any;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    type = "primary",
    data = {
        title: 'Нийтлэл',
        subTitle: 'Нүүр хуудас',
        image: {
            data:
                [
                    {
                        attributes: {
                            url: 'https://res.cloudinary.com/dxt9yn3u0/image/upload/v1710394760/download_7_4aa8eeabb5.jpg'
                        }
                    }
                ]


        }
    },
    defaultTitle,
    defaultSubTitle,
    defaultImage = 'https://res.cloudinary.com/dxt9yn3u0/image/upload/v1710235060/page_cover_hdp_873638bf04.png'

}) => {
    const router = useRouter()
    const { locale } = useRouter()
    const classes = classNames({
        '': true,
        ' h-[50vh] lg:h-screen 2xl:h-screen': type === 'primary',
        'h-[120px] lg:h-[160px] 2xl:h-[11.111vw]': type === 'secondary'
    })
    useEffect(() => {
        gsap.fromTo("#cover-img-anim1", { opacity: 0, scale: 1 }, { opacity: 1, scale: 1.1, duration: 1.5, ease: "power1.out" })
    }, [])
    return (
        <>
            <section className={`relative w-full overflow-hidden bg-white ${classes}`}>
                <div className={`absolute bottom-0 left-0 right-0 w-full z-[1] px-20 lg:px-40 2xl:px-40-2xl ${type === 'primary' ? 'py-40 lg:py-[150px] 2xl:py-[10.417vw]' : 'py-20 lg:py-30 2xl:py-30-2xl'}`}>
                    <div className="flex items-end">
                        <div className="flex items-end">
                            <h5 className=" text-h3 lg:text-h3-lg 2xl:text-h3-2xl text-graphite capitalize text-left !leading-none">{data?.title || defaultTitle}</h5>
                            <h5 className=" text-body-large lg:text-h5-lg 2xl:text-h4-2xl text-graphite capitalize ml-5 lg:ml-10 2xl:ml-10-2xl">{'/'}</h5>

                        </div>
                        {/* <Link href={'/'}>
                            <a className="text-white">
                                Нүүр хуудас
                            </a>

                        </Link> */}
                        <p className="text-graphite text-left ml-5 lg:ml-10 lg:mb-5">{data?.subTitle || defaultSubTitle}</p>
                    </div>
                </div>
            </section>
        </>

    )
}
export default PageHeader;