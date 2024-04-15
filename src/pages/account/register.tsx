import React, { useEffect, useMemo, useState } from "react";

import Layout from "@components/Common/Layout";

import { fetchAPI } from "@lib/api";

import RegisterPage from "@components/Account/RegisterPage";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Register = () => {

  const router = useRouter();
  const { data: session } = useSession();

  if (session == null) {
    return (
      <>
        <RegisterPage />
      </>
    );
  } else {
    router.push("/account/profile");
  }

}
Register.Layout = Layout;

export default Register;




