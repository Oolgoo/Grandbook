import SectionTitle from "@components/Ui/SectionTitle";

import CommentSingle from "./CommentSingle";
import CommentCategory from "./CommentCategory";

const AllComments = ({ data, categories }) => {

    return (
        <>
            <section className="relative my-40 lg:my-60 2xl:my-60-2xl">
                <div className="tw-container">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-40 2xl:mb-40-2xl">
                        <SectionTitle label={'Сэтгэгдлүүд'} />
                        <CommentCategory categories={categories} />
                    </div>
                </div>
                <div className="tw-container px-20 md:px-20-md lg:px-60 2xl:px-60-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-20 2xl:gap-20-2xl">
                        {data && data?.map((item) => {
                            return (
                                <>
                                    <CommentSingle
                                        key={item?.id}
                                        data={item}
                                    />
                                </>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}
export default AllComments;