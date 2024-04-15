import Link from "next/link";
import Image from "next/image";
interface CommentSingleProps {
    className?: string;
    data?: any;
}

const CommentSingle: React.FC<CommentSingleProps> = ({
    data
}) => {
    return (

        <>

            <div className="w-full  relative">
                <div className="w-full h-full relative overflow-hidden rounded">
                    <Image
                        src={data?.attributes?.cover?.data?.attributes.url || 'https://res.cloudinary.com/dn8v9a99m/image/upload/v1694067854/1_D420_B97_5_B6_E_4_CCA_92_C2_E6340_F46_CFBE_7d03702729.jpg'}
                        alt="grand"
                        layout="responsive"
                        width={'1700px'}
                        height={'2200px'}
                        className=" object-cover"
                    />

                </div>
                <div className=" absolute left-0 right-0 bottom-0 p-20 lg:p-20 2xl:p-20-2xl w-full">
                    <div className="p-20 lg:p-20 2xl:p-20-2xl bg-gray-imageBg w-full flex justify-center items-center flex-col rounded">
                        <p className="font-bold mb-20 lg:mb-20 2xl:mb-20-2xl">{data?.attributes?.comment}</p>
                        <h6 className=" text-graphite font-bold">{`"${data?.attributes?.name}"`}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CommentSingle;
