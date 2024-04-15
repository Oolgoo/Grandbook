import React, { useEffect, useMemo, useState } from "react";
import BlogList from "@components/Blog/BlogList";
import Layout from "@components/Common/Layout";

import { fetchAPI } from "@lib/api";
import LoginPage from "@components/Account/LoginPage";
import AccountPage from "@components/Account/AccountPage";
import ProfilePage from "@components/Account/ProfilePage";
import { getSession, useSession } from "next-auth/react";
const Profile = (data) => {

  return (
    <>
      <ProfilePage data={data} />
    </>
  );
};
Profile.Layout = Layout;

export default Profile;



export const getServerSideProps = async (context, props) => {
  const session = await getSession(context);
  // Check if session exists or not, if not, redirect
  if (session == null) {
    return {
      redirect: {
        destination: "/auth/not-authenticated",
        permanent: true,
      },
    };
  }

  const apiUrl = "https://grandbook-admin.onrender.com";
  const authToken = session;

  try {
    const response = await fetch(`${apiUrl}/api/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken?.jwt}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching user data");
    }

    const data = await response.json();
    return {
      props: {
        profile: data,
      },
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      props: {
        profile: null,
      },
    }
  }
};
