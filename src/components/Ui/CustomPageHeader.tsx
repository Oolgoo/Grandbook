import { ResizeImage } from "@helpers/ImageHelper";
import Link from "next/link";
import React from "react";
import { useTranslation, Trans } from 'next-i18next'
import Button from "./Button";
import { Router, useRouter } from "next/router";
interface CustomPageHeaderProps {
    className?: string;
    title?: string;
    img?: string;
    homeLabel?: string;
    breadcrumb?: string;
    breadcrumbUrl?: string;
    b1ClassName?: string;
    b2ClassName?: string;
    btnLabel?: string;
}

const CustomPageHeader: React.FC<CustomPageHeaderProps> = ({
    title = "Бидний тухай",
    homeLabel = "Нүүр хуудас",
    breadcrumb = "Хууль эрх зүй",
    breadcrumbUrl,
    className,
    b1ClassName,
    b2ClassName = "text-gray-40",
    btnLabel
}) => {
    const router = useRouter()
    const { t } = useTranslation('common');
    return (
        <div className={`relative w-full overflow-hidden py-20 lg:py-40 2xl:py-40-2xl flex`}>

            <div className="tw-container">
                <div className="flex justify-between">
                    <div className="flex flex-col">

                        <div className="flex mt-0 lg:mt-5 2xl:mt-5-2xl">
                            <Link href="/">
                                <a className="relative pr-20 lg:pr-30 2xl:pr-30-2xl mr-10 lg:mr-10 2xl:mr-10-2xl after:absolute after:bg-gray-40 after:top-2/4 after:-translte-y-2/4 after:right-0 after:w-4 after:h-px">
                                    <span className="text-gray-40 block text-body-text lg:text-body-text 2xl:text-body-text-2xl font-light transition-all duration-200 hover:text-graphite ">{`${t("homepage_title")}`}</span>
                                </a>
                            </Link>

                            <Link href={`${breadcrumbUrl}`} passHref>
                                <a>
                                    <span className={`${b2ClassName} block text-body-text lg:text-body-text 2xl:text-body-text-2xl transition-all duration-200 hover:text-graphite`}>{breadcrumb}</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* <div>
                        <Button variants="primary" onClick={() => router.push('/blogs')} label={`${btnLabel}`} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default CustomPageHeader;