import Link from "next/link";

import { ResizeImage } from "@helpers/ImageHelper";

import cn from "classnames"
import Button from "@components/Ui/Button";
import DateIcon from "@components/Icons/Date";
import RegisterIcon from "@components/Icons/Register";
import { useRouter } from "next/router";
interface LearningSingleProps {
    variants?: "default" | "small" | "medium" | "large"
    title?: string;
    content?: string
    date?: string;
    imageSrc?: string;
    slug?: string;
    tags?: any;
    locale?: any;
    className?: string
}

const LearningSingle: React.FC<LearningSingleProps> = ({
    variants = "default",
    title,
    content,
    date,
    imageSrc,
    slug,
    tags,
    className = "",
}) => {

    const router = useRouter()

    return (
        <>
            <div className={`${className}`}>
                <div className="relative w-full">
                    <div className="w-full">
                        <div className={` w-full h-[200px] lg:h-[200px] 2xl:h-[13.889vw] block relative`}>
                            <iframe
                                src="https://res.cloudinary.com/dn8v9a99m/video/upload/v1690511154/LearningVideos/video_2160p_rdu8mq.mp4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="px-0 pt-20 lg:pt-20 2xl:pt-20-2xl items-center lg:flex">
                        <div className="w-full space-y-20">
                            <h5 className={` !font-bold text-body-large-lg lg:text-body-large-lg 2xl:text-body-large-16-2xl`}>{title?.slice(0, 60)}</h5>
                            <p>{content}</p>
                            <div className="flex items-center space-x-20">
                                <Button label="Авах" onClick={() => router.push(`/learning/${slug}`)} />
                                <Button variants={'tertiary'} label="Дэлгэрэнгүй" onClick={() => router.push(`/learning/${slug}`)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LearningSingle;
