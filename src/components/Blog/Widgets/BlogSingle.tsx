import Link from "next/link";
import BlogTag from "@components/Ui/BlogTag";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import cn from "classnames"
import Image from "next/image";
import ClockIcon from "@components/Icons/Clock";
import CalendarIcon from "@components/Icons/Calendar";
import DateIcon from "@components/Icons/Date";
import s from "../Blog.module.css"
interface BlogProps {
  variants?: "default" | "small" | "medium" | "large"
  title?: string;
  date?: string;
  imageSrc?: any;
  slug?: string;
  tags?: any;
  locale?: any;
  className?: string
}

const BlogSingle: React.FC<BlogProps> = ({
  variants = "default",
  title,
  date,
  imageSrc,
  slug,
  tags,
  className = "",
}) => {
  const imgClasses = cn({
    "group block overflow-hidden": true,
    "h-[320px] lg:h-[340px] 2xl:h-[23.611vw]": variants === "default",
    "h-[320px] lg:h-[320px] 2xl:h-[22.222vw] ": variants === "small",
    "h-[320px] lg:h-[320px] 2xl:h-[22.222vw]  ": variants === "medium",
    "h-[500px] lg:h-[640px] 2xl:h-[44.444vw]": variants === "large",
  })

  return (
    <>
      <div className={`${s.shadow} p-[5px] h-[60vh] w-full rounded-[10px] lg:h-[80vh]`}>
        <div className="relative w-full">
          <Link href={`/blogs/${slug}`} passHref>
            <a className="group relative w-full">
              <div className={` block bg-black relative w-full`}>
                <Image
                  src={imageSrc}
                  alt="grandbook"
                  layout="responsive"
                  width={'1700px'}
                  height={'2500px'}
                  className="scale-[101%] group-hover:scale-110 transition-all duration-500 ease-in-out transform object-cover"
                />
              </div>
              <div className="px-0 pt-20 lg:pt-15 2xl:pt-15-2xl pb-0 lg:pb-20 2xl:pb-20-2xl items-center lg:flex">
                <div className="w-full">
                  <div className="flex items-center mb-10 lg:mb-10 2xl:mb-10-2xl ">
                    {/* <CalendarIcon className="w-15 2xl:w-15-2xl h-15 2xl:h-15-2xl mr-5 2xl:mr-5-2xl" strokeColor="#666" /> */}
                    <div className="w-20 lg:w-20 2xl:w-20-2xl h-20 lg:h-20 2xl:h-20-2xl mr-5 lg:mr-10 2xl:mr-10-2xl">
                      <DateIcon strokeColor="#666" fillColor="#666" />
                    </div>
                    <p className={` text-gray-40`}>{date}</p>
                  </div>
                  <h5 className={``}>{title?.slice(0, 260)}</h5>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default BlogSingle;
