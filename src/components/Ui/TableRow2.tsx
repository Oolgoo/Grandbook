import Link from "next/link";
import React, { FC } from "react";
import PdfIcon from "@components/Icons/Pdf";
import { useTranslation, Trans } from 'next-i18next'

interface TableRow2Props {
    className?: string;
    title?: string;
    legalType?: string;
    legalNumber?: string;
    legalDate?: string;
    handle?: string;
    btnLabel?: string;
}

const TableRow2: FC<TableRow2Props> = ({
    className,
    title,
    legalType,
    legalNumber,
    legalDate,
    handle,
    btnLabel
}) => {
    const { t } = useTranslation('common');

    return (
        <div className={`${className} border-b border-gray-90 mb-10 2xl:mb-10-2xl py-10 2xl:py-10-2xl px-0 lg:px-20 2xl:px-20-2xl`}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-x-0 lg:space-x-30 2xl:space-x-30-2xl space-y-10 lg:space-y-0">
                <Link href={`${handle}`}>
                    <a className="w-full lg:w-[50%]" target="_blank">
                        <div className=" text-body-text lg:text-body-text-lg 2xl:text-body-text-2xl">{title}</div>
                    </a>
                </Link>

                <span className=" text-gray-40 lg:w-fit">
                    {legalDate}
                </span>
                <div className="flex items-center w-auto justify-end">
                    <Link href={`${handle}`} passHref>
                        <a target="_blank" className="group relative flex items-center bg-gray-90 rounded-full pl-20 lg:pl-20 2xl:pl-20-2xl min-w-[95px] lg:min-w-[100px] 2xl:min-w-[6.944vw] h-30 lg:h-[30px] 2xl:h-30-2xl">

                            <span className="text-graphite">{t("show_more")}</span>
                            <div className="bg-primary h-30 lg:h-[30px] 2xl:h-30-2xl w-30 lg:w-[30px] 2xl:w-30-2xl rounded-full flex justify-center items-center absolute right-0 transition-all duration-300 ease-in-out group-hover:translate-x-10">
                                <PdfIcon fillColor="#eee" className="w-3 lg:w-3 2xl:w-[0.833vw] h-3 lg:h-3 2xl:h-[0.833vw]" />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TableRow2;