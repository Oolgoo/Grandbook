import React, { useEffect, useMemo, useState } from "react";
import Layout from "@components/Common/Layout";

import { GET_ALL_LEARNING_SLUGS, GET_INDIVIDUAL_LEARNINGS } from '@graphql/queries';
import client from "@lib/ApiClient";
import LearningDetail from "@components/Learning/LearningDetail";


const LearningMore = ({ post }: any) => {

    return (
        <>
            <LearningDetail post={post} />
        </>
    )
}
LearningMore.Layout = Layout;

export default LearningMore;


export async function getStaticPaths() {
    const { data } = await client.query({ query: GET_ALL_LEARNING_SLUGS });
    const paths = data?.trainings?.data?.map((post) => {
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
        query: GET_INDIVIDUAL_LEARNINGS,
        variables: { slug: params?.slug }
    });
    const attrs = data?.trainings?.data[0].attributes;

    // const html = await serialize(attrs?.description);
    return {
        props: {
            post: {
                title: attrs?.title,
                content: attrs?.content,

            },

        }
    }
}
