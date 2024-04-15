import HomePage from "@components/Common/Home";
import BlogHome from '@components/Blog/BlogHome';
import Layout from "@components/Common/Layout";
import CHead from "@components/CHead";
import BookHome from "@components/Book/BookHome";
import LearningHome from "@components/Learning/LearningHome";
import DeliveryPage from "@components/Delivery/DeliveryPage";

import { fetchDataFromApi } from "@utils/api";
import AllComments from "@components/Comments/AllComments";

const Home = ({ commentData, categories }: any) => {

    return (
        <>
            <CHead>
                <title>{`${process.env.NEXT_PUBLIC_SITE_TITLE}`}</title>
                <meta name="description" content={`${process.env.NEXT_PUBLIC_SITE_DESCR}`} />
            </CHead>
            <div className="relative">
                <AllComments data={commentData} categories={categories} />
            </div>
        </>
    )
};

Home.Layout = Layout;
export default Home;

export async function getStaticProps() {
    const categories = await fetchDataFromApi("/api/comment-categories?populate=*");

    const commentData = await fetchDataFromApi("/api/all-comments?sort[0]=createdAt:desc&populate=*");

    return {
        props: {
            commentData: commentData?.data,
            categories
        },
    };
}
