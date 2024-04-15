
import Layout from "@components/Common/Layout";
import CHead from "@components/CHead";
import InputForm from "@components/Ui/InputForm";
import Button from "@components/Ui/Button";
import CheckoutPage from "@components/Checkout/CheckoutPage";
import { fetchDataFromApi } from "@utils/api";


const Checkout = ({ success }) => {

    return (
        <>
            <CHead>
                <title>{`${process.env.NEXT_PUBLIC_SITE_TITLE}`}</title>
                <meta name="description" content={`${process.env.NEXT_PUBLIC_SITE_DESCR}`} />
            </CHead>
            <div className="relative bg-white">
                <CheckoutPage success={success} />
            </div>

        </>
    )
};

Checkout.Layout = Layout;
export default Checkout;


export async function getStaticProps() {
    const success = await fetchDataFromApi("/api/alert?populate=*");


    return {
        props: { success },
    };
}