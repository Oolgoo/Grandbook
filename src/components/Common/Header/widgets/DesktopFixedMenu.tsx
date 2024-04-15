import { useRouter } from 'next/router';
import { menuSocial, SiteHeader } from "@data/HeaderData";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTranslation, Trans } from 'next-i18next'
import UserIcon from '@components/Icons/User';
import BagIcon from '@components/Icons/Bag';


const DesktopFixedMenu = ({ props }) => {
    const { t } = useTranslation('common')
    const { locale, locales, push, asPath } = useRouter();
    const router = useRouter();

    return (
        <>
            <ul className="flex space-x-40 lg:space-x-40 2xl:space-x-40-2xl">
                {SiteHeader.menu.map((item, index) => {
                    return (
                        <li key={index} className="flex items-center justify-between">
                            <Link href={item.path} passHref>
                                <a className={` text-body-text lg:text-body-large-lg 2xl:text-body-large-16-2xl text-white hover:opacity-50 transition-all duration-300 ${router.pathname === item.path ? "" : null}`}>
                                    {item.label}
                                </a>
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </>
    )
}

export default DesktopFixedMenu;
