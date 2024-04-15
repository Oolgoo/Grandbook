import React from "react";
import Layout from "@components/Common/Layout";
import BlogDetail from "@components/Blog/BlogDetail";


import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from '@graphql/queries';
import { serialize } from 'next-mdx-remote/serialize';
import client from "@lib/ApiClient";


const BlogMore = ({ post }: any) => {

    return (
        <>
            <BlogDetail post={post} />
        </>
    )
}
BlogMore.Layout = Layout;

export default BlogMore;



export async function getStaticPaths() {
    const { data } = await client.query({ query: GET_ALL_SLUGS });
    const paths = data?.blogs?.data.map((post) => {
        return {
            params: { slug: post?.attributes?.slug }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params, locale }) {
    const { data } = await client.query({
        query: GET_INDIVIDUAL_POST,
        variables: { slug: params?.slug }
    });
    const attrs = data?.blogs?.data[0].attributes;

    const html = await serialize(attrs?.content);
    return {
        props: {
            post: {
                title: attrs?.title,
                content: html,
                image: attrs?.image,
                date: attrs?.date
            },

        }
    }
}