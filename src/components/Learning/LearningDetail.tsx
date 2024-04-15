
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { useTranslation } from 'next-i18next'
import Button from "@components/Ui/Button";
import { Router, useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";


import Comments from "@components/Comments";
const LearningDetail = ({ post }) => {

    const { t } = useTranslation('common');
    const router = useRouter()

    return (
        <>
            <section className="py-60 lg:py-60 2xl:py-60-2xl">
                <div className="tw-container">
                    <div className="w-full space-y-20">
                        <h3 className="font-bold"> {post?.title}</h3>
                        <p>{post?.content}</p>
                        {/* <p
                            dangerouslySetInnerHTML={{
                                __html: post?.description,
                            }}
                        /> */}
                        <div className={` w-full h-[500px] block relative`}>
                            <iframe
                                src="https://res.cloudinary.com/dn8v9a99m/video/upload/v1690511154/LearningVideos/video_2160p_rdu8mq.mp4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <Button label="Авах" />

                    </div>


                </div>
            </section>

        </>
    )
}
export default LearningDetail;