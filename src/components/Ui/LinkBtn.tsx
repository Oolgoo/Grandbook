import LnkArrow from "@components/Icons/LnkArrow";
import Link from "next/link";
export interface LinkBtnProps {
  className?: string;
  href: string;
  label: string;
}
const LinkBtn: React.FC<LinkBtnProps> = ({ className, href, label }) => {
  return (
    <Link href={href}>
      <a className={`group bg-primary text-white py-20 md:py-20-md lg:py-30 2xl:py-30-2xl px-20 md:px-20-md lg:px-30 2xl:px-30-2xl text-body-large-lg 2xl:text-body-large-16-2xl inline-flex justify-center items-center w-full max-w-[200px] lg:max-w-[250px] 2xl:max-w-[13.021vw] transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 ${className}`}>
        {label}
        <LnkArrow className="ml-10 lg:ml-20 2xl:ml-20-2xl w-[21px] lg:w-[21px] 2xl:w-[1.094vw] h-[14px] lg:h-[14px] 2xl:h-[0.729vw] align-middle transition-all duration-200 ease-in-out translate-x-0 group-hover:translate-x-2 " />
      </a>
    </Link>
  );
};
export default LinkBtn;
// cubic-bezier(.4,0,.2,1)