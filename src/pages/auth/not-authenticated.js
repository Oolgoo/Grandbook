import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotAuthenticated() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
    // setTimeout(() => {
    router.push("/");
    // }, 1);
  }, []);

  return (
    <div className="min-h-[70vw] ">
      <Head>
        <title></title>
      </Head>
      <div className="text-center">
        {" "}
        {/* <h1>Session байхгүй тул Home руу үсэрж байна.</h1> */}
      </div>
    </div>
  );
}
