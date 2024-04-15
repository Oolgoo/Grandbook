import React from 'react'
import Button from "@components/Ui/Button";
import InputForm from "@components/Ui/InputForm";
import Link from "next/link";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
function ForgotPassword() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const onSubmit = async (e) => {

    // const id = toast.loading("Хүлээж байна.");
    // e.preventDefault();
    axios
      .post('https://grandbook-admin.onrender.com/api/auth/forgot-password', {
        email: email, // user's email
      })
      .then(response => {
        console.log('Your user received an email');
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
    // const result: any = await signIn("credentials", {
    //   redirect: false,
    //   email: email,
    //   password: password,
    // });
    // if (result.ok) {
    //   //   router.replace("cvlist");

    //   toast.update(id, {
    //     render: "Нэвтэрлээ",
    //     type: "success",
    //     isLoading: false,
    //     autoClose: 6000,
    //   });
    //   router.push('/')
    //   return;
    // }
    // else{
    //   toast.update(id, {
    //     render: "алдаа",
    //     type: "error",
    //     isLoading: false,
    //     autoClose: 6000,
    //   });
    // }
  };
  return (
    <div>
      <>
        <section className="py-40 lg:py-100 2xl:py-100-2xl">
          <div className="tw-container">
            <div className="relative mx-auto w-full max-w-full lg:max-w-[500px] 2xl:max-w-[34.722vw]">
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
                  Нууц үг сэргээх
                </h5>
                <div className="border border-t-gray-main p-20 lg:py-40 2xl:py-40 lg:px-20 2xl:px-20-2xl">
                  <form onSubmit={onSubmit}>
                    <div className=" space-y-20 lg:space-y-20 2xl:space-y-20-2xl">
                      <InputForm
                        label="Цахим хаяг"
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

                      <div className="flex items-start justify-between">
                        <Button label="Илгээх" onClick={() => onSubmit(0)} />
                        <Link href={"/account/login"}>
                          <a className=" underline text-body-text lg:text-body-text 2xl:text-body-text-2xl">
                            <span>Нэвтрэх</span>
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
            </div>
          </div>
        </section>
      </>
    </div>
  )
}

export default ForgotPassword
