import { useRouter } from 'next/router';
import { menuSocial, SiteHeader } from "@data/HeaderData";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from '@components/Ui/Button';


const MobileMenu = ({ toggleShow }) => {
    const router = useRouter();
    return (
        <>

            <div className="scrollbar-hide h-screen overflow-y-scroll overflow-x-hidden absolute left-0 right-0 pt-[56px] pb-[56px] px-20 flex flex-col">

                <ul className="internal-nav-links list-none ml-0 py-40">
                    {SiteHeader.menu.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center justify-between py-[15px] lg:py-10 2xl:py-10-2xl border-b border-t-gray-main hover:bg-sky-300 transition-shadow">
                                <Link href={item.path} passHref>
                                    <a onClick={() => (toggleShow())} className={` ${router.pathname === item.path ? " !text-graphite" : ''} text-[16px] leading-[120%]  relative text-graphite transition-all duration-300 flex items-center justify-between w-full uppercase`}>
                                        {item.label}
                                    </a>
                                </Link>

                            </li>
                        )
                    })}
                </ul>
                {/* <ul className="external-nav-links flex items-center justify-between list-none ml-0">
                    {menuSocial.map((item, index) => (
                        <li key={index} className="mr-6 last-of-type:mr-0">
                            <Link href={item.link}>
                                <a className="w-6 h-6" dangerouslySetInnerHTML={{ __html: item.icon }}>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul> */}
            </div>
        </>
    )
}

export default MobileMenu;