import Button from "@components/Ui/Button";
import CustomPageHeader from "@components/Ui/CustomPageHeader";
import InputForm from "@components/Ui/InputForm";
import { useTranslation, Trans } from 'next-i18next'
import Link from "next/link";
import SingIn from "./SingIn";
import SingUp from "./SingUp";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const RegisterPage = (req, res) => {
    const { t } = useTranslation('common');
    return (
        <>
            <section className="py-40 lg:py-100 2xl:py-100-2xl">
                <div className="tw-container">
                    <div className="relative mx-auto w-full max-w-full lg:max-w-[800px] 2xl:max-w-[55.556vw]">
                        <SingUp />
                    </div>

                </div>
            </section>
        </>
    )
}

export default RegisterPage;