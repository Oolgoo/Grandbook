import Button from "@components/Ui/Button";
import InputForm from "@components/Ui/InputForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    lastname: "",
    phone: "",
  });

  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (e) => {

    const id = toast.loading("Бүртгэл хийгдэж байна.");
    if (userData.password === confirmPassword) {
      //   alert("Passwords match!");
      // e.preventDefault();
      axios
        .post(
          "https://grandbook-admin.onrender.com/api/auth/local/register",
          userData
        )
        .then((response) => {
          console.log("Registration successful", response.data);

          toast.update(id, {
            render: "Бүртгэлээ",
            type: "success",
            isLoading: false,
            autoClose: 6000,
          });

          router.push('/')
        })
        .catch((error) => {
          console.log(error?.response?.data.error.message, "err message");

          toast.update(id, {
            render: "алдаа",
            type: "error",
            isLoading: false,
            autoClose: 6000,
          });
        });
    } else {
      //   alert("Passwords do not match. Please try again.");
      console.log(userData.password, "userData.password");
      console.log(confirmPassword, "confirmPassword");

      toast.update(id, {
        render: "Нууц үг таарахгүй байна",
        type: "error",
        isLoading: false,
        autoClose: 6000,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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
          Бүртгүүлэх
        </h5>
        <div className="border border-t-gray-main p-20 lg:py-40 2xl:py-40 lg:px-20 2xl:px-20-2xl">
          <form>
            <div className="space-y-20 lg:space-y-20 2xl:space-y-20-2xl">

              <div className="grid grid-cols-2 gap-x-20 lg:gap-x-20 2xl:gap-x-20-2xl">
                <InputForm
                  label="Овог"
                  placeholder="Энд бичнэ үү."
                  type="text"
                  name="lastname"
                  onChange={(e) => handleChange(e)}
                />
                <InputForm
                  label="Нэр"
                  placeholder="Энд бичнэ үү."
                  type="text"
                  name="username"
                  onChange={(e) => handleChange(e)}
                />
                <InputForm
                  label="Утасны дугаар"
                  placeholder="Энд бичнэ үү."
                  type="number"
                  name="phone"
                  onChange={(e) => handleChange(e)}
                />
                <InputForm
                  label="И-Мэйл хаяг"
                  placeholder="Энд бичнэ үү."
                  type="text"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <InputForm
                label="Нууц үг"
                placeholder="Энд бичнэ үү."
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <InputForm
                label="Нууц үгээ давтан оруулна уу"
                placeholder="Энд бичнэ үү."
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <Button label="Илгээх" onClick={() => handleSubmit(0)} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingUp;
