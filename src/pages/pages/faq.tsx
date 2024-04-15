import React from "react";
import AboutUs from "@components/About/AboutUs";
import Layout from "@components/Common/Layout";

import CHead from "@components/CHead";
import { fetchAPI } from "@lib/api";

import FaqPage from "@components/Faq/FaqPage";


const aboutUs = ({ faqData }) => {

    return (
        <>
            <FaqPage
                faqData={faqData}
            />

        </>
    );
};

aboutUs.Layout = Layout;

export default aboutUs;

export async function getStaticProps({ locale }) {
    const [faqData] = await Promise.all([
        fetchAPI(`/api/faqs?populate=*`),
    ])

    return {
        props: {
            faqData: faqData?.data,

        },
        revalidate: 1
    }
}
