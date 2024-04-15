import React, { useState, useMemo } from "react";
import Layout from "@components/Common/Layout";
import Button from "@components/Ui/Button";
import Link from "next/link";

import DeliveryPage from "@components/Delivery/DeliveryPage";

import CartEmpty from "@components/Cart/CartEmpty";
import { useSelector } from "react-redux";
import CartItem from "@components/Cart/CartItem";
import { useRouter } from "next/router";
import { fetchDataFromApi, makePaymentRequest } from "@utils/api";

const Cart = ({ services }) => {

    const [loading, setLoading] = useState(false);
    const { cartItems } = useSelector((state: any) => state.cart);


    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.comparePrice,
            0
        );
    }, [cartItems]);


    const router = useRouter()

    return (
        <>
            <div className="tw-container">
                <div className="relative mx-auto w-full max-w-full lg:max-w-[1160px] 2xl:max-w-[80.556vw]">
                    <div className="relative py-40 lg:py-60 2xl:py-60-2xl">
                        {cartItems.length > 0 && (
                            <>
                                <div className="flex flex-row border-b border-b-gray-border mb-20 lg:mb-40 2xl:mb-40-2xl pb-20 lg:pb-20 2xl:pb-20-2xl">
                                    <h5 className=" uppercase font-bold">Миний сагс</h5>
                                    <p className="ml-5 lg:ml-5 2xl:ml-5-2xl">{`(${cartItems.length})`}</p>
                                </div>
                                <div className="flex flex-col md:flex-row lg:flex-row justify-between">
                                    <div className="w-full lg:w-[calc(100%-360px)] 2xl:w-[calc(100%-25vw)] bg-white p-0 mr-40 lg:mr-100 2xl:mr-100-2xl mb-40 lg:mb-100 2xl:mb-100-2xl">

                                        <div className="relative grid grid-cols-1">
                                            {cartItems.map((item) => (
                                                <CartItem key={item.id} data={item} />
                                            ))}

                                        </div>
                                    </div>
                                    <div className="w-full lg:w-[360px] 2xl:w-[25vw] h-fit bg-white">
                                        <div className=" border-dashed border-b border-b-gray-border pb-20 lg:pb-20 2xl:pb-20-2xl mb-40">
                                            <h5 className=" uppercase">Захиалгын мэдээлэл</h5>
                                        </div>


                                        <div className="flex justify-between items-center mb-20 lg:mb-20 2xl:mb-20-2xl">
                                            <p className="font-bold">Төлөх дүн:</p>
                                            <p className="font-bold">{subTotal.toLocaleString()} ₮</p>
                                        </div>

                                        <Button variants="primary" className="w-full bg-graphite" onClick={() => { router.push('/checkout') }} label={`Захиалах`} />
                                        <p className="mt-10 text-red text-body-text lg:text-body-text 2xl:text-body-text-2xl">2-оос дээш ном худалдан авалтад Хүргэлт хийгдэнэ !</p>
                                    </div>

                                </div>


                            </>
                        )}
                        {cartItems.length < 1 && (
                            <>
                                <CartEmpty />
                            </>
                        )}
                    </div>

                </div>
            </div>
            <DeliveryPage services={services} className="  lg:border-b-0 lg:border-r-0" />


        </>
    )
}
Cart.Layout = Layout;

export default Cart;

export async function getStaticProps() {

    const services = await fetchDataFromApi("/api/services?populate=*");


    return {
        props: { services },
    };
}


