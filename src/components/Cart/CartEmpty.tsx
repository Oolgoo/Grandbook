import EmptyBagIcon from "@components/Icons/EmptyBag";
import Button from "@components/Ui/Button";
import { useRouter } from "next/router";

const CartEmpty = () => {
    const router = useRouter();
    return (
        <>
            <div className="relative mt-100 2xl:mt-100-2xl">
                <div className="flex flex-col items-center justify-center text-center space-y-20 lg:space-y-20 2xl:space-y-20-2xl">
                    <EmptyBagIcon className=" fill-gray-40 w-40 2xl:w-40-2xl h-40 2xl:h-40-2xl" />
                    <h6 className=" text-gray-40">Таны сагс хоосон байна.</h6>
                    <Button variants="primary" className="w-fit" onClick={() => router.push('/book')} label={`Бүх номын жагсаалт`} />

                </div>
            </div>
        </>
    )
}

export default CartEmpty;