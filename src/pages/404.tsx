import React from "react";
import dynamic from "next/dynamic";


const NotFound = dynamic(() => import("@components/Ui/NotFound"));

import CHead from "@components/CHead";

function NotFoundPage() {
  return (
    <>
      <CHead>
        <title>{`404 | Page not found`}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_SITE_DESCR} />
      </CHead>
      <NotFound
        title={'404'}
        label={'404'}
        handle="/"
      />
    </>
  );
}


export default NotFoundPage;
