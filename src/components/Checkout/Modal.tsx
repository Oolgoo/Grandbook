import ModalCloseIcon from "@components/Icons/ModalClose";

const Modal = ({ toggleModal, props }) => {

    return (
        <>
            <div className=" fixed inset-0 w-full h-full bg-black/30 z-40">

            </div>
            <div className="w-[calc(100%-40px)] lg:w-[600px] 2xl:w-[41.667vw] h-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white z-50 p-20 2xl:p-20-2xl ">
                <div className="w-20 2xl:w-20-2xl h-20 2xl:h-20-2xl cursor-pointer" onClick={() => (toggleModal())}>
                    <ModalCloseIcon />
                </div>
                {/* <Button variants="primary" onClick={() => router.push('/blogs')} label={`${t("blog_back")}`} /> */}


                <h4 className="text-green text-center my-20 lg:my-20 2xl:my-20-2xl">{props?.data?.attributes?.title}</h4>
                <div className="flex justify-center flex-col px-0 lg:px-100 mb-0 2xl:mb-40-2xl">
                    {props?.data?.attributes?.description}

                </div>
            </div>

        </>
    )
}
export default Modal;