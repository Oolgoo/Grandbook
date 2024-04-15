import HomePage from "@components/Common/Home";
import BlogHome from '@components/Blog/BlogHome';
import Layout from "@components/Common/Layout";
import CHead from "@components/CHead";
import BookHome from "@components/Book/BookHome";
import LearningHome from "@components/Learning/LearningHome";
import DeliveryPage from "@components/Delivery/DeliveryPage";
import Script from 'next/script'
import { fetchDataFromApi } from "@utils/api";

const Home = ({ homes, books, services, blogs, homeLearningData }: any) => {

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-P4VDV8QMM9" />

      <Script id="google-analytics">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
   
           gtag('config', 'G-P4VDV8QMM9');
        `}
      </Script>

      <CHead>
        <title>{`${process.env.NEXT_PUBLIC_SITE_TITLE}`}</title>
        <meta name="description" content={`${process.env.NEXT_PUBLIC_SITE_DESCR}`} />
      </CHead>
      <div className="relative">
        <HomePage homes={homes} />
        <BookHome books={books} />
        {/* <LearningHome homeLearningData={homeLearningData} /> */}
        <BlogHome blogs={blogs} />
        <DeliveryPage services={services} />
      </div>
    </>
  )
};

Home.Layout = Layout;
export default Home;

export async function getStaticProps() {
  const homes = await fetchDataFromApi("/api/homes?populate=*");
  const books = await fetchDataFromApi("/api/books?populate=*&filters[type][$eq]=feature&sort[0]=date:desc");
  const services = await fetchDataFromApi("/api/services?populate=*");
  const blogs = await fetchDataFromApi("/api/blogs?sort[0]=date:desc&populate=*");
  const homeLearningData = await fetchDataFromApi("/api/trainings?populate*&sort[0]=date:asc");


  return {
    props: { homes, books, services, blogs },
  };
}
