import React, { useEffect, useMemo, useState } from "react";
import BlogList from "@components/Blog/BlogList";
import Layout from "@components/Common/Layout";

import { fetchAPI } from "@lib/api";
import LoginPage from "@components/Account/LoginPage";
import AccountPage from "@components/Account/AccountPage";
const Account = () => {

    return (
        <>
            <AccountPage />
        </>
    )
}
// Account.Layout = Layout;

export default Account;




