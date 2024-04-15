import React from "react";
import BlogList from "@components/Blog/BlogList";
import Layout from "@components/Common/Layout";
import { fetchDataFromApi } from "@utils/api";

const Blogs = ({ blogs }: any) => {
    return (
        <>
            <BlogList
                data={blogs}
            />
        </>
    )
}
Blogs.Layout = Layout;

export default Blogs;

export async function getStaticProps() {
    const blogs = await fetchDataFromApi("/api/blogs?sort[0]=date:desc&populate=*");

    return {
        props: { blogs },
    };
}


