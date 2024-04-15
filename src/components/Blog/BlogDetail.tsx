import CustomPageHeader from "@components/Ui/CustomPageHeader";
import { ResizeImage } from "@helpers/ImageHelper";
import { Top } from "@data/BlogData";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import ClockIcon from "@components/Icons/Clock";
import BlogTags from "@components/Ui/BlogTag";
import { useTranslation } from 'next-i18next'
import Button from "@components/Ui/Button";
import { Router, useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import DateIcon from "@components/Icons/Date";

const BlogDetail = ({ post }) => {

    const { t } = useTranslation('common');
    const router = useRouter()
    { console.log(post) }
    return (
        <>
            <section className="relative">
                <div className="py-60 lg:py-60 2xl:py-60-2xl">
                    <div className="tw-container-middle">
                        <div className="relative mb-20 lg:mb-40 2xl:mb-40-2xl ">
                            <div className="flex justify-between items-start mb-10 lg:mb-20 2xl:mb-20-2xl">
                                <div className="text-graphite items-center flex">

                                    <div className="w-20 lg:w-20 2xl:w-20-2xl h-20 lg:h-20 2xl:h-20-2xl mr-5 lg:mr-10 2xl:mr-10-2xl">
                                        <DateIcon strokeColor="#666" fillColor="#666" />
                                    </div>
                                    <div className="text-body-text lg:text-body-large-lg 2xl:text-body-large-16-2xl text-gray-40">{post.date}</div>
                                </div>

                            </div>
                            <h4 className="w-full font-bold text-left text-graphite mb-20 lg:mb-40 2xl:mb-40-2xl">
                                {post.title}
                            </h4>


                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <div className="relative block h-[300px] w-full lg:w-[460px] 2xl:w-[31.944vw] lg:h-[460px] 2xl:h-[31.944vw] overflow-hidden mr-0 lg:mr-40 2xl:mr-40-2xl mb-40 lg:mb-0 rounded-[8px] lg:rounded-[8px] 2xl:rounded-[0.556vw]">

                                <Image
                                    src={post.image?.data?.attributes?.url}
                                    alt={post.title}
                                    layout="fill"
                                    className=" object-cover"

                                />
                            </div>
                            <div className="relative w-full lg:w-[calc(100%-460px)] 2xl:w-[calc(100%-31.944vw)] blog-detail-img">
                                {/* <div
                                    className="richText text-graphite"
                                    dangerouslySetInnerHTML={{
                                        __html: post?.content,
                                    }}
                                >

                                </div> */}
                                <MDXRemote {...post.content} />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
export default BlogDetail;