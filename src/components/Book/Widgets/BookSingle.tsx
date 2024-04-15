import Link from "next/link";
import Image from "next/image";
import BookRate from "./BookRate";
import PlayButtonIcon from "@components/Icons/PlayButton";
import { getDiscountedPricePercentage } from "@utils/helper";
import s from '../BookSingle.module.css'
interface BookProps {
    className?: string;
    variants?: "default" | "audio";
    data?: any;
}

const BookSingle: React.FC<BookProps> = ({
    className,
    variants = "default",
    data: { attributes: p, id }
}) => {

    return (
        <>
            {variants === "audio" ? <>
                <div className={`${className}`}>
                    <div className="relative w-full ">
                        <Link href={p?.audioLink}>
                            <a className="group w-full "  target="_black">
                                <div className={`block relative  after:z-10 after:inset-0 after:opacity-0 group-hover:after:opacity-40 after:transition-all after:duration-500`}>
                                    <Image
                                        src={p.image.data.attributes.url}
                                        alt={p.title}
                                        layout="responsive"
                                        width={'1700px'}
                                        height={'2500px'}
                                        className="transition-all duration-500 ease-in-out transform object-cover"
                                    />
                                </div>
                                <div className={`px-0 pt-20 lg:pt-20 2xl:pt-20-2xl lg:flex flex-col items-center`}>
                                    <div className="w-full mb-10 lg:mb-10 2xl:mb-10-2xl">
                                        <div className={` text-body-large lg:text-body-large-lg 2xl:text-body-large-16-2xl !font-bold text-center`}>{p.title?.slice(0, 260)}</div>
                                    </div>
                                </div>
                                <div className="absolute top-[30%] left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0 group-hover:opacity-100 bg-[rgba(40,55,71,0.8)] h-[15vw] w-[15vw] rounded-[50%] group-hover:top-[42%] transition-all duration-500 z-20 flex justify-center flex-col w-full">
                                    <PlayButtonIcon className=" fill-white w-40 h-40 2xl:h-40-2xl 2xl:w-40-2xl mx-auto mb-10 2xl:mb-10-2xl" />
                                    <span className="text-white text-center text-body-text-lg lg:text-body-text-lg 2xl:text-body-large-2xl ">Сонсох хувилбар</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

            </> : <>
                <div className="h-[74vh] flex items-center ">
                    <div className="relative w-full">
                        <Link href={`/book/${p?.slug}`}>
                            <a className={`p-[5px] h-[70vh] w-full rounded-[10px] ${s.shadow}`}>
                               <Image
                                src={p.image.data.attributes.url}
                                alt={p.title}
                                layout="responsive"
                                width={'1700px'}
                                height={'2400px'}
                                className={`${s.shadow}   scale-[100%] group-hover:scale-110 hover:scale-110 transition-all duration-300 ease-in-out transform`}
                                />
                                <div className={`px-0 min-h-[130px]  pt-20 lg:pt-20 2xl:pt-20-2xl lg:flex flex-col items-center space-y-10 lg:space-y-10 2xl:space-y-10-2xl`}>
                                    <BookRate />
                                    <div className="w-full">
                                        <div className={` text-body-large-lg lg:text-body-large-lg 2xl:text-body-large-16-2xl !font-bold text-center`}>{p.title?.slice(0, 260)}</div>
                                    </div>

                                    {p?.salePrice ? <>
                                        {p?.salePrice && <>
                                            <div className="flex justify-center items-center space-x-10 lg:space-x-10 2xl:space-x-10-2xl">
                                                <div className={`text-body-large lg:text-body-large-lg 2xl:text-body-large-16-2xl !font-bold text-graphite`}>
                                                    {p?.salePrice?.toLocaleString()} ₮
                                                </div>
                                                <p className="line-through text-gray-60 text-body-large lg:text-body-large-lg 2xl:text-body-large-16-2xl">
                                                    &#8377;{p.comparePrice}
                                                </p>
                                                <p className="ml-auto text-body-large-lg lg:text-body-large-lg 2xl:text-body-large-16-2xl text-red">
                                                    {getDiscountedPricePercentage(
                                                        p.comparePrice,
                                                        p.salePrice
                                                    )}
                                                    %
                                                </p>

                                            </div>
                                        </>}
                                    </> : <>
                                        <div className="flex justify-center items-center space-x-10 lg:space-x-10 2xl:space-x-10-2xl">
                                            <div className={`text-body-large-lg lg:text-body-large-lg 2xl:text-body-large-16-2xl !font-bold text-primary`}>
                                                {p?.comparePrice?.toLocaleString()} ₮
                                            </div>


                                        </div>
                                    </>}




                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </>}
        </>
    );
};
export default BookSingle;
