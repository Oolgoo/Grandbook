import DeleteIcon from "@components/Icons/Delete";
import Image from "next/image"
import QuantitySelector from "./QuantitySelector";

import Counter from "./counter";
import { updateCart, removeFromCart } from "@store/cartSlice";
import { useDispatch } from "react-redux";

type CartItemProps = {
    variants?: "cart" | "checkout",
    item?: any;
    data?: any;
};
const CartItem: React.FC<CartItemProps> = ({ data, variants = "cart" }) => {
    const p = data.attributes;
    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(updateCart(payload));
    };
    return (
        <>
            <div className="relative bg-white overflow-hidden mb-20 lg:mb-20 2xl:mb-20-2xl last:mb-0 border-b border-b-gray-border last:border-b-0 pb-20 lg:pb-20 2xl:pb-20-2xl">
                {variants === "cart" && (
                    <>
                        <div className="flex">
                            <div className="relative">
                                <div className={`w-100 lg:w-[150px] 2xl:w-[10.417vw] border border-gray-border p-5 lg:p-5 2xl:p-5-2xl`}>
                                    <Image
                                        src={p?.image?.data?.attributes?.url}
                                        alt={''}
                                        layout="responsive"
                                        width={'140px'}
                                        height={'200px'}
                                        className=" object-cover"
                                    />
                                </div>
                            </div>
                            <div className="pl-20 lg:pl-20 2xl:pl-20-2xl flex flex-col justify-between w-full">
                                <div className={`flex justify-between items-start`}>
                                    <div className="w-full max-w-full lg:max-w-[80%] mb-0 lg:mb-10 2xl:mb-10-2xl pr-20 lg:pr-20 2xl:pr-20-2xl">
                                        <h5 className="font-bold mb-5 lg:mb-10 2xl:mb-10-2xl">{p?.title}</h5>
                                        <span className="bg-yellow px-15 py-5 text-body-text lg:text-body-text 2xl:text-body-text-2xl">{p?.book_category?.data?.attributes?.title}</span>

                                        <div className="justify-start flex lg:hidden mt-10 lg:mt-10 2xl:mt-10-2xl">
                                            <div className={`text-body-large lg:text-body-large-lg 2xl:text-body-large-16-2xl !font-bold text-graphite`}>
                                                {p?.comparePrice?.toLocaleString()} ₮
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-center hidden lg:flex">
                                        <div className={`text-body-large lg:text-body-large-lg 2xl:text-body-large-16-2xl text-graphite font-bold`} >
                                            {p?.comparePrice?.toLocaleString()} ₮
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row lg:flex-row items-center lg:items-center justify-between space-x-20 lg:space-x-40 2xl:space-x-40-2xl">

                                    <div className="flex items-center justify-start lg:justify-end w-full mb-0 lg:mb-0 text-black/[0.5]">
                                        <p className="mr-10 lg:mr-10 2xl:mr-10-2xl text-black/[0.5]">Тоо ширхэг:</p>

                                        <select
                                            className="hover:text-graphite cursor-pointer outline-none text-body-text 2xl:text-body-text-2xl"
                                            onChange={(e) => updateCartItem(e, "quantity")}
                                        >
                                            {Array.from(
                                                { length: 10 },
                                                (_, i) => i + 1
                                            ).map((q, i) => {
                                                return (
                                                    <option
                                                        key={i}
                                                        value={q}
                                                        selected={data.quantity === q}
                                                    >
                                                        {q}
                                                    </option>
                                                );
                                            })}
                                        </select>


                                    </div>
                                    <button className="flex items-center text-black/[0.5] group transition-all duration-300" onClick={() =>
                                        dispatch(removeFromCart({ id: data.id }))
                                    }>
                                        <div className="w-30 2xl:w-30-2xl h-30 2xl:h-30-2xl p-5 lg:p-5 2xl:p-5-2xl">
                                            <DeleteIcon className=" fill-graphite" />
                                        </div>
                                        <p className="text-black/[0.5] group-hover:text-graphite">Устгах</p>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </>
                )}
                {variants === "checkout" && (
                    <>
                        <div className="flex">
                            <div className="relative">
                                <div className={`w-60 lg:w-60 2xl:w-60-2xl border border-gray-border p-5 lg:p-5 2xl:p-5-2xl`}>
                                    <Image
                                        src={p?.image?.data?.attributes?.url}
                                        alt={''}
                                        layout="responsive"
                                        width={'120px'}
                                        height={'180px'}
                                        className=" object-cover"
                                    />
                                </div>
                            </div>
                            <div className="pl-20 lg:pl-20 2xl:pl-20-2xl flex flex-col justify-between w-full">
                                <div className={`flex justify-between items-start`}>
                                    <div className="w-full !max-w-full lg:max-w-[80%] mb-0 lg:mb-10 2xl:mb-10-2xl">
                                        <p className="font-bold">{p?.title}</p>
                                        <span className="bg-yellow px-5 py-[2px] text-[10px]">{p?.book_category?.data?.attributes?.title}</span>

                                        <div className="justify-end flex mt-10">
                                            <p className={` text-graphite font-bold`}>
                                                {p?.comparePrice?.toLocaleString()} ₮
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default CartItem;