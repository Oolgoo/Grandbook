import Button from "@components/Ui/Button";
import InputForm from "@components/Ui/InputForm";
import Link from "next/link";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const onSubmit = async (e) => {

    const id = toast.loading("Хүлээж байна.");
    // e.preventDefault();
    const result: any = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    if (result.ok) {
      //   router.replace("cvlist");

      toast.update(id, {
        render: "Нэвтэрлээ",
        type: "success",
        isLoading: false,
        autoClose: 6000,
      });
      router.push('/')
      return;
    }
    else {
      toast.update(id, {
        render: "алдаа",
        type: "error",
        isLoading: false,
        autoClose: 6000,
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="relative">
        <h5 className="text-center mb-40 lg:mb-40 2xl:mb-40-2xl uppercase">
          Нэвтрэх
        </h5>
        <div className="border border-t-gray-main p-20 lg:py-40 2xl:py-40 lg:px-20 2xl:px-20-2xl">
          <form onSubmit={onSubmit}>
            <div className=" space-y-20 lg:space-y-20 2xl:space-y-20-2xl">
              <InputForm
                label="Нэвтрэх нэр"
                placeholder="Энд бичнэ үү."
                id="email"
                name="email"
                type="email"
                value={email}
                // onChange={e => { setEmail(e.currentTarget.email); }}
                onKeyUp={(event) => {
                  setEmail(event);
                }}
                // value={password}
                onChange={(e) => {
                  setEmail(e.target.value);

                }}
              />
              <InputForm
                label="Нууц үг"
                placeholder="Энд бичнэ үү."
                id="password"
                name="password"
                type="password"
                //                             value={password}
                // onChange={e => { setPassword(e.currentTarget.password); }}
                onKeyUp={(event) => {
                  setPassword(event);
                }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="flex items-start justify-between">
                <Button label="Илгээх" onClick={() => onSubmit(0)} />
                <Link href={"/account/forgotpassword"}>
                  <a className=" underline text-body-text lg:text-body-text 2xl:text-body-text-2xl">
                    <span>Нууц үг сэргээх</span>
                  </a>
                </Link>
              </div>
              <Link href={"/account/register"}>
                <a className="underline text-body-text lg:text-body-text 2xl:text-body-text-2xl">
                  <span>Бүртгүүлэх</span>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SingIn;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  // Check if session exists or not, if not, redirect
  if (session) {
    return {
      redirect: {
        destination: "/cvlist",
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
};
