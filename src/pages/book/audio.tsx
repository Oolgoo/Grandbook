
import BookAudioList from "@components/Book/BookAudioList";
import React, { useState, useEffect } from "react";
import Layout from "@components/Common/Layout";

import { useRouter } from "next/router";
import { fetchDataFromApi } from "src/utils/api";


const Audio = ({ books }: any) => {

    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading books...</div>
    }
    return (
        <>
            <BookAudioList
                books={books}
            />
        </>
    )
}
Audio.Layout = Layout;
export default Audio;

export async function getStaticProps() {
    const categories = await fetchDataFromApi("/api/book-categories?populate=*");

    const books = await fetchDataFromApi("/api/books?populate=*&filters[audioBook][$eq]=true");

    return {
        props: { categories, books },
    };
}


