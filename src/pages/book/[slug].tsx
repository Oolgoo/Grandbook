import React, { useEffect, useMemo, useState } from "react";
import Layout from "@components/Common/Layout";
import BookDetail from "@components/Book/BookDetail";
import { fetchDataFromApi } from "@utils/api";


const BookMore = ({ book, books }: any) => {

    return (
        <>
            <BookDetail books={books} book={book} />
        </>
    )
}
BookMore.Layout = Layout;

export default BookMore;


export async function getStaticPaths() {
    const books = await fetchDataFromApi("/api/books?populate=*");
    const paths = books?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const book = await fetchDataFromApi(
        `/api/books?populate=*&filters[slug][$eq]=${slug}`
    );
    const books = await fetchDataFromApi(
        `/api/books?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            book,
            books,
        },
    };
}


