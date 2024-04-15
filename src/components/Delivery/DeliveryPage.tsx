import Image from "next/image";
interface DeliveryProps {
    variants?: "home" | "cart";
    services?: any;
    className?: string;
}
const DeliveryPage: React.FC<DeliveryProps> = ({

    services,
    variants = "home",
    className

}) => {
    return (
        <>
            {variants === "home" ? <>
                <section className={`${className} border-t border-t-gray-main py-40 lg:py-0`}>
                    <div className="tw-container p-20 lg:p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-3">

                            {services?.data?.map((item, index: any) => {
                                return (
                                    <>
                                        <div key={index} className="space-y-10 lg:space-y-20 2xl:space-y-20-2xl flex flex-col justify-start items-center border-r border-r-gray-main border-l border-l-gray-main border-b border-b-gray-main lg:border-r-0 lg:border-b-0 first:border-t first:border-t-gray-main lg:first:border-t-0 px-20 lg:px-40 2xl:px-40-2xl py-20 lg:py-40 2xl:py-40-2xl">
                                            <div className="relative w-30 lg:w-40 2xl:w-40-2xl h-30 lg:h-40 2xl:h-40-2xl">
                                                <Image
                                                    src={item.attributes.icon.data.attributes.url}
                                                    alt="grandbook"
                                                    layout="fill"
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h5 className="text-center">{item?.attributes?.title}</h5>
                                            <p className="text-center">
                                                {item?.attributes?.content}
                                            </p>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </section>
            </> : <>
                <section className={`${className} border-t-0 lg:border-t lg:border-t-gray-main py-40 lg:py-40 lg:mt-60 px-20 lg:px-40 2xl:px-40-2xl`}>
                    <div className="tw-container p-0 lg:p-0">
                        <div className="flex flex-col md:flex-row lg:flex-row">

                            {services?.data?.map((item, index: any) => {
                                return (
                                    <>
                                        <div key={index} className="flex flex-col items-center space-y-10 lg:space-y-20 2xl:space-y-20-2xl py-20 md:p-20 lg:p-20 2xl:p-20-2xl">
                                            <div className="relative w-30 lg:w-30 2xl:w-30-2xl h-30 lg:h-30 2xl:h-30-2xl">
                                                <Image
                                                    src={item.attributes.icon.data.attributes.url}
                                                    alt="grandbook"
                                                    layout="fill"
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-center font-bold mb-10 lg:mb-20 2xl:mb-20-2xl">{item?.attributes?.title}</p>
                                                <p className="text-center">
                                                    {item?.attributes?.content}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </section>
            </>}
        </>
    )
}
export default DeliveryPage;