import { useEffect, useRef, useState } from "react";
import { Router, useRouter } from "next/router";
import { useTranslation } from 'next-i18next'
import LearningSingle from "./Widgets/LearningSingle";
import SectionTitle from "@components/Ui/SectionTitle";
const LearningList = ({ learnningAllData }) => {

    const { t } = useTranslation('common')

    const router = useRouter()

    return (
        <>
            <section className="relative my-40 lg:my-60 2xl:my-60-2xl">
                <div className="tw-container-middle">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-40 2xl:mb-40-2xl">
                        <SectionTitle label={'Бүх сургалтууд'} />
                    </div>
                </div>
                <div className="tw-container-middle px-0 md:px-20-md lg:px-60 2xl:px-60-2xl ">

                    <div className="w-full relative">

                        <div className="border-t border-l-0 md:border-l lg:border-l border-t-gray-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                            {learnningAllData?.map((item) => {
                                return (
                                    <>
                                        <LearningSingle
                                            key={item.attributes.title}
                                            title={item.attributes.title}
                                            date={item.attributes.date}
                                            imageSrc={item.attributes.image?.data?.attributes.url}
                                            slug={item.attributes.slug}
                                            // price={item.attributes.price}

                                            className=" border-t-gray-main border-r-0 md:border-r lg:border-r border-b p-20 lg:p-20 2xl:p-20-2xl"

                                        />
                                    </>
                                )
                            })}
                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}
export default LearningList;