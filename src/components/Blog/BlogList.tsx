import React, { useEffect, useState } from "react";
import BlogSingle from "./Widgets/BlogSingle";
import { useRouter } from "next/router";
import SectionTitle from "@components/Ui/SectionTitle";
import PageHeader from "@components/Ui/PageHeader";

const BlogList = ({ data }) => {

  return (
    <>
      <section className="relative">
        <PageHeader type="secondary" />
        {/* <div className="tw-container">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-40 2xl:mb-40-2xl">
            <SectionTitle label={'Бүх нийтлэл'} />
          </div>
        </div> */}

        <div className="pb-40 p-[20px] lg:pb-40 2xl:pb-40-2xl">
          <div className="tw-container p-[20px] md:px-20 lg:px-40 2xl:px-40-2xl">
            <div className={`border-t p-[20px] border-l border-l-gray-main border-t-gray-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 `}>
              {data?.data?.map((item) => {
                return (
                  <>
                    <BlogSingle
                      key={item.attributes?.title}
                      title={item.attributes?.title}
                      date={item.attributes?.date}
                      slug={item.attributes?.slug}
                      imageSrc={item.attributes?.image.data.attributes.url}
                      className="border-r border-r-gray-main border-b border-b-gray-main border-t-gray-main p-15 lg:p-15 2xl:p-15-2xl"
                    />
                  </>
                )
              })}
            </div>


          </div>
        </div>
      </section>
    </>
  );
};
export default BlogList;
