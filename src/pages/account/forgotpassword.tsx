import React, { useEffect, useMemo, useState } from "react";
import Layout from "@components/Common/Layout";

import ForgotPassword from "@components/Account/ForgotPassword";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Login = () => {

    const router = useRouter();
    const { data: session } = useSession();


    if (session == null) {
        return (
            <>
                <ForgotPassword />
            </>
        )
    } else {
        router.push("/account/profile");
    }
}
Login.Layout = Layout;

export default Login;




