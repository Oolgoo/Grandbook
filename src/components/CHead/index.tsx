import Head from 'next/head'
import React from 'react'

const CHead = ({ children }) => {

    return (
        <Head>
            <link rel="icon" href="/favicon.png" />
            {children}
        </Head>
    )
}

export default CHead
