import React, { ReactNode, useEffect } from 'react';
import { NextSeo } from "next-seo";
import Footer from '@components/Common/Footer';
import Header from '../Header/Header';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {

  return (
    <div className="relative h-full">
      <Header />
      <main className={`relative min-h-screen overflow-hidden mt-[56px] lg:mt-[70px] 2xl:mt-[4.861vw] bg-white`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
