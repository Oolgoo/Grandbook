import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Layout from "@components/Common/Layout/Layout";

const BookDetailsCarousel = ({ images }) => {

    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.map((img) => (
                    <img
                        key={img.id}
                        src={img?.attributes?.url}
                        alt={'grandbook'}
                    />
                ))}

            </Carousel>
        </div>
    );
};

export default BookDetailsCarousel;