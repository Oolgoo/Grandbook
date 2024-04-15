import React, { useEffect, useMemo, useState } from "react";
import Layout from "@components/Common/Layout";

import { GET_ALL_LEARNING } from "@graphql/queries";
import LearningList from "@components/Learning/LearningList";
import client from "@lib/ApiClient";
const Learnning = ({ learnningAllData }: any) => {

    return (
        <>
            {/* <LearningList
                learnningAllData={learnningAllData}
            /> */}
        </>
    )
}
Learnning.Layout = Layout;
export default Learnning;
export async function getStaticProps({ locale }) {

    const learnningAllData = client.query({
        query: GET_ALL_LEARNING,
    });


    const responses = await Promise.all([learnningAllData])
    return {
        props: {
            learnningAllData: responses[0].data?.trainings?.data,


        },
        revalidate: 1
    }
}


