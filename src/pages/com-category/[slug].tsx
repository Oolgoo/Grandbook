import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "@utils/api";
import Layout from "@components/Common/Layout";

import useSWR from "swr";
import { useRouter } from "next/router";
import BookSingle from "@components/Book/Widgets/BookSingle";
import BookTitle from "@components/Book/Widgets/BookTitle";
import BookCategory from "@components/Book/Widgets/BookCategory";
import SectionTitle from "@components/Ui/SectionTitle";
import CommentSingle from "@components/Comments/CommentSingle";
import CommentCategory from "@components/Comments/CommentCategory";
const maxResult = 20;

const Category = ({ categories, books, slug }) => {

    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();

    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    const { data, error, isLoading } = useSWR(
        `/api/all-comments?populate=*&[filters][comment_category][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
        fetchDataFromApi,
        {
            fallbackData: books,
        }
    );

    return (
        <>
            <section className="relative my-40 lg:my-60 2xl:my-60-2xl">
                <div className="tw-container">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-40 2xl:mb-40-2xl">
                        <SectionTitle label={'Сэтгэгдэлүүд'} />
                        <CommentCategory categories={categories} />
                    </div>
                </div>
                <div className="tw-container px-20 md:px-20-md lg:px-60 2xl:px-60-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-20 2xl:gap-20-2xl">
                        {data && data.data?.map((item) => {
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

    );
};

export default Category;
Category.Layout = Layout;
export async function getStaticPaths() {
    const category = await fetchDataFromApi("/api/comment-categories?populate=*");
    const paths = category?.data?.map((c) => ({
        params: {
            slug: c?.attributes?.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
    const categories = await fetchDataFromApi("/api/comment-categories");
    const category = await fetchDataFromApi(
        `/api/comment-categories?filters[slug][$eq]=${slug}`
    );
    const books = await fetchDataFromApi(
        `/api/all-comments?populate=*&[filters][comment_category][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
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