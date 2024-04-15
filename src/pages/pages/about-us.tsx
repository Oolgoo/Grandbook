import React from "react";
import AboutUs from "@components/About/AboutUs";
import Layout from "@components/Common/Layout";

import CHead from "@components/CHead";
import { fetchAPI } from "@lib/api";



const aboutUs = ({ about, aboutService }) => {

    return (
        <>
            <AboutUs
                aboutData={about}
                aboutService={aboutService}
            />

        </>
    );
};

aboutUs.Layout = Layout;

export default aboutUs;

export async function getStaticProps({ locale }) {
    const [about, aboutService] = await Promise.all([
        fetchAPI(`/api/about?populate=*`),
        fetchAPI(`/api/about-services?populate=*`),
    ])

    return {
        props: {
            about: about?.data,
            aboutService: aboutService.data,

        },
        revalidate: 1
    }
}
