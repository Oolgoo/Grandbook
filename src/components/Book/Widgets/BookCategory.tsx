import ActiveLink from "../../Ui/ActiveLink";
import React from "react";

interface BookCategoryProps {
    categories?: any;
}

const BookCategory: React.FC<BookCategoryProps> = ({
    categories
}) => {


    return (
        <>
            <div className="justify-start lg:justify-end flex flex-wrap">

                <ActiveLink
                    href={`/book`}
                    children={'Бүгд'}
                    className="mr-20 lg:mr-20 2xl:mr-20-2xl mb-10 lg:mb-0 text-graphite text-body-text lg:text-body-text-lg cursor-pointer 2xl:text-body-text-2xl border-0 rounded-none relative disabled:bg-transparent disabled:text-primary disabled:after:bg-neutral hover:text-graphite before:bg-graphite before:absolute before:w-full before:h-px before:left-0 before:scale-x-0 before:transition-transform before:duration-300 before:top-[calc(100%+2px)]   before:origin-top-left-full-2/4 hover:before:scale-x-100 hover:before:origin-top-left-0-2/4 hover:before:bg-graphite"
                />
                {categories?.data.map((category) => {
                    return (
                        <>
                            <ActiveLink
                                key={category.id}
                                href={`/category/${category?.attributes?.slug}`}
                                children={category?.attributes?.title}
                                className="last:mr-0 mr-20 lg:mr-20 2xl:mr-20-2xl mb-10 lg:mb-0 text-graphite text-body-text lg:text-body-text-lg cursor-pointer 2xl:text-body-text-2xl border-0 rounded-none relative disabled:bg-transparent disabled:text-primary disabled:after:bg-neutral hover:text-graphite before:bg-graphite before:absolute before:w-full before:h-px before:left-0 before:scale-x-0 before:transition-transform before:duration-300 before:top-[calc(100%+2px)]   before:origin-top-left-full-2/4 hover:before:scale-x-100 hover:before:origin-top-left-0-2/4 hover:before:bg-graphite"
                            />
                        </>
                    )
                })}


            </div>
        </>
    )
}
export default BookCategory;