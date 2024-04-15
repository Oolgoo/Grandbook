import PdfIcon from "@components/Icons/Pdf";
import Link from "next/link";

interface ButtonPdfProps {
    label?: string;
    className?: string;
    handle?: string;
}

const ButtonPdf: React.FC<ButtonPdfProps> = ({
    label,
    className,
    handle
}) => {
    return (
        <>
            <Link href={`${handle}`} passHref>
                <a target="_blank" className="group relative flex items-center bg-gray-90 rounded-full pl-10 lg:pl-20 2xl:pl-20-2xl h-30 lg:h-[30px] 2xl:h-30-2xl w-[75px] lg:w-[90px] 2xl:w-[4.688vw]">

                    <span className="text-graphite leading-3">{label}</span>
                    <div className="bg-primary h-30 lg:h-[30px] 2xl:h-30-2xl w-30 lg:w-[30px] 2xl:w-30-2xl rounded-full flex justify-center items-center absolute right-0 transition-all duration-300 ease-in-out group-hover:translate-x-10">
                        <PdfIcon fillColor="#fff" className="w-3 lg:w-3 2xl:w-[0.833vw] h-3 lg:h-3 2xl:h-[0.833vw]" />
                    </div>
                </a>
            </Link>
        </>
    )
}
export default ButtonPdf;