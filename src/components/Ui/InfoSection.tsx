
import LinkBtn from "@components/Ui/LinkBtn";
import { useTranslation } from 'next-i18next'

import React, { FC } from "react";
interface InfoSectionProps {
    className?: string;
    title: string;
    description: string;
    handle?: string;
    count?: string;
}
const InfoSection: FC<InfoSectionProps> = ({
    className,
    title,
    description,
    handle,
    count,
}) => {
    const { t } = useTranslation('common')
    return (
        <>
            <div className={`flex items-center justify-center w-full h-full lg:border-r lg:border-primary lg:last:border-r-0 ${className}`}>
                <div className="flex flex-col items-center justify-center text-center w-full">
                    <h5 className="mb-10 lg:mb-30 2xl:mb-30-2xl uppercase">{title}</h5>
                    <div className="mb-10 lg:mb-30 2xl:mb-30-2xl flex items-baseline">
                        {/* <span className="text-[36px] leading-[48px] lg:text-[58px] lg:leading-[100px] font-normal mr-10 lg:mr-10 2xl:mr-10-2xl">{count}</span> */}
                        {/* <p className="mb-0">{description}</p> */}
                    </div>
                    <LinkBtn label={t('btn-more-text')} href={`${handle}`} />
                </div>
            </div>
        </>
    )
}
export default InfoSection;