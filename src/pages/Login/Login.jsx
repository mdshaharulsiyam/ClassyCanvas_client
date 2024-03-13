import React, { useState } from "react";
import Input from "../../components/html/Input";
import Button from "../../components/html/Button";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const {
    user,
    signInMethod,
    googleSignInMethod,
    loading: authLoading,
  } = useAuth();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { state } = useLocation();
  const axiosSecure = useAxiosSecure();

  const { mutateAsync: addUser } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/user", data);
      return res?.data;
    },
  });

  const handleDemo = (email, password) => {
    signInMethod(email, password)
      .then((res) => {
        setErrorMsg("");
        setLoading(false);
        navigate("/");
        // handleCheckRoleAndNavigate(res.user.email);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
        console.log(err.message);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.email.value = "";
    e.target.password.value = "";

    signInMethod(email, password)
      .then((res) => {
        setErrorMsg("");
        setLoading(false);
        navigate("/");
        // handleCheckRoleAndNavigate(res.user.email);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);

    googleSignInMethod()
      .then((res) => {
        setErrorMsg("");
        const { email, displayName } = res.user;
        addUser({ email, name: displayName })
          .then((res) => {
            console.log(res.data);
            navigate("/");
            setLoading(false);
            toast.success("You have successfully Logged in!");
          })
          .catch((err) => {
            setLoading(false);
            navigate("/");
            console.error(err);
            setErrorMsg(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <div className="h-screen min-h-[500px] w-[95%] mx-auto grid  grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block  my-[2.5%] min-h-[500px] bg-login relative">
        <p className="text-lg font-clashBold sm:text-xl absolute top-[2%] left-[5%] underline  cursor-pointer text-white">
          ClassyCanvas
        </p>

        <div className="absolute w-full bottom-[10%] left-[5%] text-white">
          <h2 className="text-4xl">
            Buckle Up! <br /> Your ClassyCanvas Journey Starts Here
          </h2>
          <p className="text-sm text-gray-300 mt-2 w-[88%]">
            Strap in for a personalized ClassyCanvas experience. Sign in to discover
            curated collections and exclusive styles just for you
          </p>
        </div>
      </div>
      {/* Login Part */}
      <div className="w-[80%] lg:w-[70%] mx-auto my-[2.5%]  flex flex-col justify-center items-center h-auto">
        <h1 className="text-2xl font-clashBold md:text-3xl">Welcome back!</h1>
        <form
          onSubmit={handleSignIn}
          className="flex flex-col w-full gap-2 mt-6 "
        >
          <Input
            name="email"
            placeholder="Email"
            className="py-2 text-sm md:text-base"
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            className="py-2 text-sm md:text-base"
          />
          {errorMsg && <p className="text-red-600">{errorMsg}</p>}
          <Button className="py-2 mt-3 text-sm text-white md:text-base">
            Connect
          </Button>
          {/* <div className="flex justify-between gap-4">
            <Button
              onClick={() => handleDemo("demouser@gmail.com", "Ornob1200,()")}
              type="button"
              className="flex-1 bg-green-500 py-2 mt-3 text-sm text-white md:text-base"
            >
              Demo User
            </Button>
            <Button
              onClick={() => handleDemo("demoadmin@gmail.com", "Ornob1200,()")}
              type="button"
              className="flex-1 bg-red-500 py-2 mt-3 text-sm text-white md:text-base"
            >
              Demo Admin
            </Button>
          </div> */}
        </form>
        <div className="mt-4 divider">or</div>
        <p className="text-[12px] md:text-sm mb-8">
          Don't have an account?
          <span
            onClick={() => navigate("/signup")}
            className="font-bold underline duration-300 cursor-pointer active:scale-90"
          >
            Sign Up
          </span>
        </p>
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full gap-2 py-2 text-sm duration-300 border cursor-pointer active:scale-95 md:text-base"
        >
          <FcGoogle />
          <p>Continue Wih Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
