import FacebookIcon from "@components/Icons/Facebook";
import InstagramIcon from "@components/Icons/Instagram";

import TwitterIcon from "@components/Icons/Twitter";
import YoutubeIcon from "@components/Icons/Youtube";
import { getTranslate } from "@helpers/transHelper";
import { useTranslation } from 'next-i18next'
import Link from "next/link";
interface SocialProps {
    className?: string;
}
const Social: React.FC<SocialProps> = ({ className = "" }) => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className={`${className} flex flex-col`}>

                <div className="flex items-center space-x-20 lg:space-x-40 2xl:space-x-40-2xl">

                    <Link href={'https://www.facebook.com/GrandbookPublishing?mibextid=LQQJ4d'} passHref>
                        <a
                            aria-label="footer-menu"
                            className="group"
                            target={"_blank"}
                        >
                            <div className="w-30 h-30 lg:w-30 lg:h-30 2xl:w-30-2xl 2xl:h-30-2xl">
                                <FacebookIcon fillColor="#fff" strokeColor="#fff" />
                            </div>

                        </a>
                    </Link>
                    <Link href={'https://www.youtube.com/@GerelGrandbook'} passHref>
                        <a
                            aria-label="footer-menu"
                            className="group"
                            target={"_blank"}
                        >
                            <div className="w-30 h-30 lg:w-30 lg:h-30 2xl:w-30-2xl 2xl:h-30-2xl">
                                <YoutubeIcon className={``} />
                            </div>

                        </a>
                    </Link>
                    <Link href={'https://www.instagram.com/grandbook_publishing/?fbclid=IwAR0mylVjCsHDL0xh_yXIXjBTsw5Mh5Cd4WAN-Xz1iRQXYacXcFIrjfW6aiU'} passHref>
                        <a
                            aria-label="footer-menu"
                            className=" group"
                            target={"_blank"}
                        >
                            <div className="w-30 h-30 lg:w-30 lg:h-30 2xl:w-30-2xl 2xl:h-30-2xl">
                                <InstagramIcon className=" fill-white" />
                            </div>

                        </a>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Social;
