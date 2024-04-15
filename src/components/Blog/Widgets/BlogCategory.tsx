
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { useTranslation } from 'next-i18next'

const BlogCategory = ({ blogcatData }) => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const [isSelected, setIsSelected] = useState(null);


    return (
        <>
            <div className="flex space-x-[4px] lg:space-x-20 px-20 lg:px-0">
                <Link href={'/blogs'}>
                    <a className={` ${isSelected === true ? "bg-black" : "bg-gray-90"} first:bg-red first:text-white text-graphite px-20 lg:px-20 2xl:px-20-2xl py-1 lg:py-1 2xl:py-[0.208vw] hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out`}>
                        <span>{`${t("all-news")}`}</span>
                    </a>
                </Link>
                {blogcatData?.data?.map((item, index) => {
                    return (
                        <>
                            <Link key={index} href={'/blogs'}>
                                <a className={` ${isSelected === true ? "bg-black" : "bg-gray-90"} first:bg-red first:text-white text-graphite px-20 lg:px-20 2xl:px-20-2xl py-1 lg:py-1 2xl:py-[0.208vw] hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out`}>
                                    <span>{item.attributes.title}</span>
                                </a>
                            </Link>
                        </>
                    )
                })}
            </div>

        </>
    )
}
export default BlogCategory;