import React, { useState, useEffect } from "react";
import Layout from "@components/Common/Layout";
import BookList from "@components/Book/BookList";
import { useRouter } from "next/router";
import { fetchDataFromApi } from "src/utils/api";
import useSWR from "swr";
const maxResult = 25;
const Book = ({ categories, books }: any) => {
    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();

    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    const { data, error, isLoading } = useSWR(
        `/api/books?populate=*&sort=date:desc&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
        fetchDataFromApi,
        {
            fallbackData: books,
        }
    );
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading books...</div>
    }

    return (
        <>
            <BookList
                books={data}
                categories={categories}
            />
            <div className="pb-40 lg:pb-60 2xl:pb-60-2xl">
                {data?.meta?.pagination?.total > maxResult && (
                    <div className="flex space-x-20 items-center justify-center">
                        <button
                            className={`py-10 px-20 bg-primary text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={pageIndex === 1}
                            onClick={() => setPageIndex(pageIndex - 1)}
                        >
                            Өмнөх
                        </button>

                        <span className="font-bold">{`${pageIndex} - ${data && data.meta.pagination.pageCount
                            }`}</span>

                        <button
                            className={`py-10 px-20 bg-primary text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={
                                pageIndex ===
                                (data && data.meta.pagination.pageCount)
                            }
                            onClick={() => setPageIndex(pageIndex + 1)}
                        >
                            Дараах
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
Book.Layout = Layout;
export default Book;

export async function getStaticProps() {
    const categories = await fetchDataFromApi("/api/book-categories?populate=*");

    const books = await fetchDataFromApi("/api/books?populate=*&sort[0]=date:desc");

    return {
        props: { categories, books },
    };
}


