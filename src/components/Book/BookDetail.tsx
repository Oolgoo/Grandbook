


import Link from "next/link";
import { useTranslation } from 'next-i18next'
import Button from "@components/Ui/Button";
import { Router, useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import BookDetailItem from "./Widgets/BookDetailItem";
import Comments from "@components/Comments";
import PlayButtonIcon from "@components/Icons/PlayButton";
import { useState } from "react";
import BookDetailsCarousel from "./Widgets/BookDetailsCarousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@store/cartSlice";
import { getDiscountedPricePercentage } from "@utils/helper";


const BookDetail = ({ books, book }) => {
    const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
    const { t } = useTranslation('common');
    const router = useRouter()

    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();

    const p = book?.data?.[0]?.attributes;


    const notify = () => {
        toast.success("Сагсанд нэмэгдлээ", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        });
    };
    return (
        <>
            <section className="py-20 lg:py-60 2xl:py-60-2xl">
                <ToastContainer />
                <div className="tw-container">

                    <div className="flex flex-col lg:flex-row items-start space-x-0 lg:space-x-40 2xl:space-x-40-2xl">
                        <div className="w-full lg:w-[30%] mb-40 lg:mb-0">
                            {p?.listImage?.data === null ? <>
                                <Image
                                    src={p?.image?.data?.attributes?.url}
                                    alt={p?.title}
                                    layout="responsive"
                                    width={'1700px'}
                                    height={'2700px'}
                                />
                            </> : <>
                                <BookDetailsCarousel images={p?.listImage?.data} />
                            </>}

                        </div>
                        <div className="w-full lg:w-[70%] space-y-20 lg:space-y-20 2xl:space-y-20-2xl">
                            <h4 className="font-bold"> {p?.title}</h4>

                            {p?.salePrice ? <>
                                {p?.salePrice && <>
                                    <div className="flex justify-star items-center space-x-10 lg:space-x-10 2xl:space-x-10-2xl">
                                        <h4 className={` text-green font-bold`}>
                                            {p?.salePrice?.toLocaleString()} ₮
                                        </h4>
                                        <p className="line-through text-gray-60 text-body-text lg:text-body-large-lg 2xl:text-body-large-16-2xl">
                                            &#8377;{p.comparePrice}
                                        </p>
                                        <p className="ml-auto text-body-text lg:text-body-large-lg 2xl:text-body-large-16-2xl text-red">
                                            {getDiscountedPricePercentage(
                                                p.comparePrice,
                                                p.salePrice
                                            )}
                                            %
                                        </p>

                                    </div>
                                </>}
                            </> : <>
                                <h4 className="font-bold text-green"> {p?.comparePrice?.toLocaleString()} ₮</h4>
                            </>}

                            <div
                                className="richText"
                                dangerouslySetInnerHTML={{
                                    __html: p?.description,
                                }}
                            >

                            </div>




                            {!p?.writer ? null : <>
                                <BookDetailItem
                                    label="Зохиолч:"
                                    title={p?.writer}
                                />
                            </>}
                            {!p?.page ? null : <>
                                <BookDetailItem
                                    label="Хуудасны тоо:"
                                    title={p?.page}
                                />
                            </>}

                            {!p?.folder ? null : <>
                                <BookDetailItem
                                    label="Хавтас:"
                                    title={p?.folder}
                                />
                            </>}


                            {!p?.audioLink ? null : <>
                                <Link href={p?.audioLink}>
                                    <a target="_blank" className="underline flex items-center hover:no-underline w-fit">
                                        <div className="w-20 2xl:w-20-2xl h-20 2xl:h-20-2xl mr-10 2xl:mr-10-2xl"><PlayButtonIcon className=" fill-primary" /></div>
                                        <span>Сонсох хувилбар</span>
                                    </a>
                                </Link>
                            </>}


                            {/* <Button variants="primary" className="w-fit mr-20 lg:mr-20 2xl:mr-20-2xl" onClick={() => { router.push('/checkout') }} label={`Захиалах`} /> */}

                            <Button variants={'secondary'} label="+ Сагсанд нэмэх" onClick={() => {

                                dispatch(
                                    addToCart({
                                        ...book?.data?.[0],
                                        selectedSize,
                                        oneQuantityPrice: p.comparePrice,
                                    })

                                );
                                notify();
                            }} />


                        </div>
                    </div>
                    <Comments />
                </div>
            </section>

        </>
    )
}
export default BookDetail;