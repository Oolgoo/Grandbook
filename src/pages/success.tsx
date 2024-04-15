import { fetchDataFromApi } from '@utils/api';
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Success = ({ success }: any) => {
    const p = success?.data?.attributes;
    return (
        <div className='max-w-[800px]'>
            <div className='tw-container'>
                <div className='flex flex-col items-center justify-center p-40'>
                    <h4 className="text-center mb-20">{p?.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: p?.description }} />
                </div>
            </div>
        </div>
    )
}

export default Success;

export async function getStaticProps() {
    const success = await fetchDataFromApi("/api/alert?populate=*");


    return {
        props: { success },
    };
}