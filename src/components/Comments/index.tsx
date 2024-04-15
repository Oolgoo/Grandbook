import Button from "@components/Ui/Button";
import InputForm from "@components/Ui/InputForm";
import TextArea from "@components/Ui/TextArea";

const Comments = () => {
    return (
        <>
            <section className=" border-t border-t-gray-main mt-40 lg:mt-40 2xl:mt-40-2xl py-100 lg:py-100 2xl:py-100-2xl">
                <div className="tw-container-small max-w-full lg:max-w-[600px] 2xl:max-w-[41.667vw]">
                    <h5 className="mb-20 lg:mb-20 2xl:mb-20-2xl">Сэтгэгдэл</h5>
                    <div>
                        <InputForm placeholder="Нэр" />
                        <TextArea placeholder="Сэтгэгдэл бичих..." name="df" typeof="text" />
                        <Button label="Илгээх" />
                    </div>
                    <div className="mt-60 lg:mt-60 2xl:mt-60-2xl">
                        <div className=" border-b border-t-gray-main py-20 lg:py-20 2xl:py-20-2xl">
                            <div className="flex justify-between items-center mb-5 lg:mb-5 2xl:mb-5-2xl">
                                <p className="font-bold">Gganb</p>
                                <p>2023-09-02</p>
                            </div>
                            <p>Гүн үйл гэдэг нь аливаа ажил мэргэжлийг ямар нэгэн өөр зүйлд сатааралгүйгээр, гүн төвлөрч, оюун ухаан, танин мэдэхүйн</p>
                        </div>
                        <div className=" border-b border-t-gray-main py-20 lg:py-20 2xl:py-20-2xl">
                            <div className="flex justify-between items-center mb-5 lg:mb-5 2xl:mb-5-2xl">
                                <p className="font-bold">Gganb</p>
                                <p>2023-09-02</p>
                            </div>
                            <p>Гүн үйл гэдэг нь аливаа ажил мэргэжлийг ямар нэгэн өөр зүйлд сатааралгүйгээр, гүн төвлөрч, оюун ухаан, танин мэдэхүйн</p>
                        </div>
                        <div className=" border-b border-t-gray-main py-20 lg:py-20 2xl:py-20-2xl">
                            <div className="flex justify-between items-center mb-5 lg:mb-5 2xl:mb-5-2xl">
                                <p className="font-bold">Gganb</p>
                                <p>2023-09-02</p>
                            </div>
                            <p>Гүн үйл гэдэг нь аливаа ажил мэргэжлийг ямар нэгэн өөр зүйлд сатааралгүйгээр, гүн төвлөрч, оюун ухаан, танин мэдэхүйн</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Comments;