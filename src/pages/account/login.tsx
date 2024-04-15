import React, { useEffect, useMemo, useState } from "react";
import BlogList from "@components/Blog/BlogList";
import Layout from "@components/Common/Layout";

import { fetchAPI } from "@lib/api";
import LoginPage from "@components/Account/LoginPage";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Login = ({ blogs }: any) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session == null) {
    return (
      <>
        <LoginPage />
      </>
    );
  } else {
    router.push("/account/profile");
  }
};
Login.Layout = Layout;

export default Login;

