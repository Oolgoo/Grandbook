

const FaqPage = ({ faqData }) => {
    return (
        <>
            <section className="relative my-40 lg:my-60 2xl:my-60-2xl">

                <div className="tw-container">
                    <div className="mb-100 px-0 lg:px-100 2xl:px-100-2xl">
                        <h4 className="text-left lg:text-center mb-40 lg:mb-40 2xl:mb-40-2xl">{'Түгээмэл асуулт'}</h4>
                        <div className="relative">
                            {faqData.map((item, index: any) => {
                                return (
                                    <>
                                        <div className="mb-40 lg:mb-40 2xl:mb-40-2xl" key={index}>
                                            <h5 className="text-left mb-10 lg:mb-10 2xl:mb-10-2xl">{item?.attributes?.title}</h5>
                                            <p className="text-left">
                                                {item?.attributes?.content}
                                            </p>
                                        </div>
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
export default FaqPage;