import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "@utils/api";
import Layout from "@components/Common/Layout";

import useSWR from "swr";
import { useRouter } from "next/router";
import BookSingle from "@components/Book/Widgets/BookSingle";
import BookTitle from "@components/Book/Widgets/BookTitle";
import BookCategory from "@components/Book/Widgets/BookCategory";
const maxResult = 20;

const Category = ({ categories, category, books, slug }) => {

    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();

    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    const { data, error, isLoading } = useSWR(
        `/api/books?populate=*&[filters][book_category][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
        fetchDataFromApi,
        {
            fallbackData: books,
        }
    );

    return (
        <>
            <section className="relative my-40 lg:my-60 2xl:my-60-2xl">
                <div className="tw-container">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-40 lg:mb-40 2xl:mb-40-2xl">
                        <BookTitle label={category?.data?.[0]?.attributes?.title} count={books?.meta?.pagination?.total} />
                        <BookCategory categories={categories} />

                    </div>
                </div>
                <div className="tw-container">

                    <div className="w-full relative">
                        <div className="border-t border-l-0 md:border-l lg:border-l lg:border-l-gray-main border-t-gray-main grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-30 lg:gap-x-30 2xl:gap-x-30-2xl gap-y-60 lg:gap-y-60 2xl:gap-y-60-2xl !border-0 ">
                            {data?.data?.map((book) => (
                                <BookSingle
                                    key={book?.id}
                                    data={book}
                                    className="border-t-gray-main border-r-0 md:border-r md:border-r-gray-main lg:border-r border-b border-b-gray-main !border-0"
                                />
                            ))}
                        </div>
                    </div>

                    {/* PAGINATION BUTTONS START */}
                    {data?.meta?.pagination?.total > maxResult && (
                        <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                            <button
                                className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                                disabled={pageIndex === 1}
                                onClick={() => setPageIndex(pageIndex - 1)}
                            >
                                Previous
                            </button>

                            <span className="font-bold">{`${pageIndex} of ${data && data.meta.pagination.pageCount
                                }`}</span>

                            <button
                                className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                                disabled={
                                    pageIndex ===
                                    (data && data.meta.pagination.pageCount)
                                }
                                onClick={() => setPageIndex(pageIndex + 1)}
                            >
                                Next
                            </button>
                        </div>
                    )}
                    {/* PAGINATION BUTTONS END */}
                    {isLoading && (
                        <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                            {/* <img src="/logo.svg" width={150} /> */}
                            <span className="text-2xl font-medium">Loading...</span>
                        </div>
                    )}
                </div>
            </section>


        </>

    );
};

export default Category;
Category.Layout = Layout;
export async function getStaticPaths() {
    const category = await fetchDataFromApi("/api/book-categories?populate=*");
    const paths = category?.data?.map((c) => ({
        params: {
            slug: c.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
    const categories = await fetchDataFromApi("/api/book-categories");
    const category = await fetchDataFromApi(
        `/api/book-categories?filters[slug][$eq]=${slug}`
    );
    const books = await fetchDataFromApi(
        `/api/books?populate=*&[filters][book_category][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
    );

    return {
        props: {
            categories,
            category,
            books,
            slug,
        },
    };
}