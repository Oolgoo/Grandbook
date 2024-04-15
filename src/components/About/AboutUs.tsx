import { useRouter } from "next/router";
import { useTranslation, Trans } from 'next-i18next'
import Image from "next/image";

const AboutUs = ({ aboutData, aboutService }) => {
    const { t } = useTranslation('common');
    const { locale } = useRouter();

    return (
        <>
            <section className="relative my-40 lg:my-100 2xl:my-100-2xl">

                <div className="tw-container mb-40 lg:mb-40 2xl:mb-40-2xl">
                    <div className="px-0 lg:px-100 2xl:px-100-2xl">
                        <h4 className="text-left lg:text-center mb-40 lg:mb-40 2xl:mb-40-2xl">{aboutData.attributes.title}</h4>
                        <div
                            className="text-[14px] lg:text-[24px] 2xl:text-[1.667vw] leading-[140%] text-left lg:text-center"
                            dangerouslySetInnerHTML={{
                                __html: aboutData.attributes.content,
                            }}
                        />
                    </div>
                </div>

                

   
      
      
      



                <div className="flex flex-wrap items-stretch justify-center gap-8 text-center sm:flex">
    {aboutService.map((item, index) => {
        return (
            <div key={index} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/5">
                <div className="flex flex-col h-full w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex-shrink-0">
                    <Image
                        src={item?.attributes?.icon?.data?.attributes?.url}
                        alt="grandbook"
                        width={100}
                        height={100}
                    />
                    </div>
                    <h3 className="flex-1 py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white animate-pulse">
                        {item?.attributes?.title}
                    </h3>
                    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                        {item?.attributes?.content}
                    </p>
                </div>
            </div>
        );
    })}
</div>

            </section>
        </>
        
    );
};
export default AboutUs;
