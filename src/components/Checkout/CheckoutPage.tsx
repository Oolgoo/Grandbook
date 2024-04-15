import React, { useState, useMemo } from "react";

import ArrowBackIcon from "@components/Icons/ArrowBack";
import Button from "@components/Ui/Button";
import InputForm from "@components/Ui/InputForm";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useSelector } from "react-redux";
import CartItem from "@components/Cart/CartItem";
import { makePaymentRequest } from "@utils/api";
import { ToastContainer, toast } from "react-toastify";
import TextArea from "@components/Ui/TextArea";
import Modal from "./Modal";

const CheckoutPage = ({ success }) => {

    const [showModal, setShowModal] = useState(false);

    const [depFirstName, setDepFirstName] = useState("");
    const [depLastName, setDepLastName] = useState("");
    const [depEmail, setDepEmail] = useState("");
    const [depPhone, setDepPhone] = useState("");
    const [depAddress, setDepAddress] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    const { cartItems } = useSelector((state: any) => state.cart);

    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.comparePrice,
            0
        );
    }, [cartItems]);


    const toggleModal = () => {
        setShowModal(!showModal)
    }
    async function handlePayment() {
        setShowModal(!showModal)
        setLoading(true);
        try {
            const res = await makePaymentRequest("/api/orders", {
                books: cartItems,
                firstName: depFirstName,
                lastName: depLastName,
                email: depEmail,
                phone: depPhone,
                address: depAddress,
            });


        } catch (error) {
            setLoading(false);
            console.log(error);
        }
        finally {
            setLoading(false)
        }

    };
    const router = useRouter()

    return (
        <>
            <section className=" relative h-full min-h-screen">

                <div className={showModal ? 'block' : 'hidden'}>
                    <Modal props={success} toggleModal={handlePayment} />
                </div>
                <div className="tw-container">
                    <div className="relative mx-auto w-full max-w-full lg:max-w-[1160px] 2xl:max-w-[80.556vw]">

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]  2xl:grid-cols-[1fr_25vw] gap-x-20 lg:gap-x-40 2xl:gap-x-40-2xl">
                            <div className="relative border-0 lg:border-r border-r-gray-main min-h-full lg:min-h-screen pt-20 lg:pt-40 2xl:pt-40-2xl pr-0 lg:pr-40 2xl:pr-40-2xl">
                                <div className="mb-40 lg:mb-40 2xl:mb-40-2xl w-fit">
                                    <Link
                                        href="/cart"
                                    >
                                        <a className="flex items-center">
                                            <div className="h-15 lg:h-10 2xl:h-10-2xl w-15 lg:w-10 2xl:w-10-2xl mr-5 lg:mr-5 2xl:mr-5-2xl">
                                                <ArrowBackIcon className=" stroke-primary" />
                                            </div>
                                            <p className="block text-primary">
                                                Сагсруу буцах
                                            </p>
                                        </a>
                                    </Link>
                                </div>
                                <h5 className="text-left mb-20 lg:mb-40 2xl:mb-40-2xl">
                                    Захиалга өгөх
                                </h5>

                                <InputForm placeholder="Oвог" onChange={(e) => setDepFirstName(e.target.value)} value={depFirstName} />
                                <InputForm placeholder="Нэр" onChange={(e) => setDepLastName(e.target.value)} value={depLastName} />
                                <InputForm
                                    placeholder="И-Мэйл хаяг"
                                    onChange={(e) => setDepEmail(e.target.value)}
                                    value={depEmail}
                                    type="email"
                                />
                                <InputForm placeholder="Утасны дугаар" onChange={(e) => setDepPhone(e.target.value)} value={depPhone} />
                                <TextArea placeholder="Хаяг байршил" onChange={(e) => setDepAddress(e.target.value)} value={depAddress} />

                                <Button
                                    variants="primary"
                                    className="w-fit"
                                    onClick={() => handlePayment()}
                                    label={`Илгээх`}
                                />
                                {/* <div className="w-20 2xl:w-20-2xl h-20 2xl:h-20-2xl" onClick={() => (toggleModal())}>
                    df
                </div> */}
                            </div>
                            <div className="relative mt-100 mb-100 lg:mb-100 lg:mt-40 2xl:mt-40-2xl">
                                <div className="relative grid grid-cols-1">
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} data={item} variants="checkout" />
                                    ))}
                                </div>
                                <div className="h-px w-full border-b border-t-gray-main border-dashed my-10 lg:my-10 2xl:my-10-2xl"></div>
                                <div className="flex justify-between items-center mb-20 lg:mb-20 2xl:mb-20-2xl">
                                    <h5 className="font-bold ">Нийт дүн:</h5>
                                    <h5 className="font-bold ">{subTotal.toLocaleString()} ₮</h5>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default CheckoutPage;