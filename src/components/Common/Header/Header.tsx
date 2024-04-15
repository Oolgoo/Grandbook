import Image from "next/image";
import React, { useState, useEffect } from "react";
import MobileMenu from "./widgets/MobileMenu";
import Link from "next/link";

import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import DesktopFixedMenu from "./widgets/DesktopFixedMenu";
import BagIcon from "@components/Icons/Bag";
import UserIcon from "@components/Icons/User";
import { SessionContext, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";


const Header = () => {

  const { cartItems } = useSelector((state: any) => state.cart);

  const [sticky, setSticky] = useState("");
  const { t } = useTranslation("common");
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const [searchShow, setSearchShow] = useState(false);
  const toggleSearchShow = () => {
    setSearchShow(!searchShow);
  };
  const router = useRouter();
  const { pathname } = router;

  const { data: session } = useSession();
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass =
      scrollTop >= 70
        ? "!h-[56px] lg:!h-[50px] 2xl:!h-[3.472vw] transition-all duration-500 ease-in-out"
        : "transition-all duration-500 ease-in-out";
    setSticky(stickyClass);
  };

  useEffect(() => {
    if (session == null) return;
  }, [session]);
  const classes = `z-40 lg:z-[21] py-0 lg:py-5 2xl:py-5-2xl bg-white w-full  flex ${sticky}`;

  return (
    <>
      <div
        className={`${classes} bg-primary fixed top-0 left-0 right-0 h-[56px] lg:h-70 2xl:h-70-2xl shadow-md`}
      >
        <div className="tw-container bg-transparent overflow-visible">
          <div className="relative hidden lg:flex items-center justify-between">
            <div className="flex duration-300 ease-in-out transform scale-100 hover:scale-110">
              <Link href={"/"}>
                <a className="block w-100 lg:w-100 2xl:w-100-2xl">
                  <Image
                  className=""
                    src={
                      // "https://res.cloudinary.com/diew5t3ao/image/upload/v1688451392/book-logo_zmkit3.svg"
                      "https://res.cloudinary.com/dn8v9a99m/image/upload/v1689813385/grandbook-logo-white_syryui.png"
                    }
                    layout="responsive"
                    width={"150px"}
                    height={"40px"}
                  />
                </a>
              </Link>
            </div>

            <div className="overflow-hidden relative">
              <DesktopFixedMenu props />
            </div>

            <div className=" relative">
              <ul className="flex space-x-40 lg:space-x-40 2xl:space-x-40-2xl">
                {session ? (
                  <>
                    <ul className="flex ">
                      <li className="flex items-center justify-between cursor-pointer">
                        <Link href="/account/profile">
                          <div
                          // className={` text-body-text lg:text-body-text-lg 2xl:text-body-large-2xl text-graphite flex items-center transition-all duration-300 hover:text-[#00D4FF]`}
                          >
                            <UserIcon className="mr-10 lg:mr-10 2xl:mr-10-2xl w-20 lg:w-20 2xl:w-20-2xl h-20 lg:h-20 2xl:h-20-2xl" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <a href={"/"} onClick={() => signOut()}>
                          <div
                            className={` text-body-text lg:text-body-text-lg 2xl:text-body-large-2xl text-white flex items-center transition-all duration-300 hover:text-[#00D4FF]`}
                          >
                            {`Гарах`}
                          </div>
                        </a>
                      </li>
                    </ul>
                  </>
                ) : (
                  <li className="flex items-center justify-between">
                    <Link href={"/account/login"} passHref>
                      <a
                        className={` text-body-text lg:text-body-large-lg 2xl:text-body-large-16-2xl text-white flex items-center transition-all duration-300 hover:text-[#00D4FF]`}
                      >
                        <UserIcon className="mr-10 lg:mr-10 2xl:mr-10-2xl w-20 lg:w-20 2xl:w-20-2xl h-20 lg:h-20 2xl:h-20-2xl" />
                        {`Нэвтрэх`}
                      </a>
                    </Link>
                  </li>
                )}

                <li className="flex items-center justify-between">
                  <Link href={"/cart"} passHref>
                    <a
                      className={`relative text-body-text lg:text-body-large-lg 2xl:text-body-large-16-2xl text-white flex items-center transition-all duration-300 hover:text-[#00D4FF]`}
                    >
                      <BagIcon className="mr-10 lg:mr-10 2xl:mr-10-2xl w-20 lg:w-20 2xl:w-20-2xl h-20 lg:h-20 2xl:h-20-2xl fill-white" />
                      {cartItems.length > 0 && (
                        <div className="absolute -top-5 2xl:-top-5-2xl left-10 2xl:left-10-2xl w-15 2xl:w-15-2xl h-15 2xl:h-15-2xl text-body-text lg:text-body-text 2xl:text-body-text-2xl text-white bg-red rounded-full flex items-center justify-center">
                          {cartItems.length}
                        </div>
                      )}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative grid grid-cols-3 lg:hidden items-center justify-between">
            <div
              className="relative cursor-pointer z-20 flex"
              onClick={() => {
                toggleShow();
              }}
            >
              <div
                className={
                  show ? "burger-menu-btn" : "burger-menu-btn is--inactive"
                }
              ></div>
            </div>
            <div className="flex justify-center">
              <Link href={"/"}>
                <a className="block w-100">
                  <Image
                    src={
                      // "https://res.cloudinary.com/diew5t3ao/image/upload/v1688451392/book-logo_zmkit3.svg"
                      "https://res.cloudinary.com/dn8v9a99m/image/upload/v1689813385/grandbook-logo-white_syryui.png"
                    }
                    layout="responsive"
                    width={"150px"}
                    height={"40px"}
                  />
                </a>
              </Link>
            </div>
            <div className="flex justify-end relative">
              <Link href={"/cart"} passHref>
                <a
                  className={`relative text-body-text lg:text-body-text-lg 2xl:text-body-text-2xl text-white flex items-center transition-all duration-300 hover:text-[#00D4FF]`}
                >
                  <BagIcon className="w-20 lg:w-20 2xl:w-20-2xl h-20 lg:h-20 2xl:h-20-2xl fill-white" />
                  {cartItems.length > 0 && (
                    <div className="absolute -top-5 left-10 w-15 h-15 text-body-text text-white  bg-red rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </div>
                  )}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header-pop-menu fixed top-0 z-20 block lg:hidden">
        <div
          className={
            show
              ? "fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-graphite text-[#00D4FF] visible"
              : "invisible opacity-0"
          }
          onClick={() => {
            toggleShow();
          }}
        ></div>
        <div
          className={`side-drawer fixed left-0 h-screen bg-white transform z-10 transition-all duration-500 ease-in-out w-full ${show ? "open translate-x-0 visible" : "-translate-x-full invisible"
            }`}
        >
          <MobileMenu toggleShow={toggleShow} />
        </div>
      </div>
    </>
  );
};

export default Header;
