"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import { Toaster } from "react-hot-toast";
export default function Home() {
  const router = useRouter();
  let emailRef,
    passwordRef = useRef();


  const handelSubmit = async (e) => {
    e.preventDefault();
    let email = emailRef.value;
    let password = passwordRef.value;
    if (IsEmpty(email)) {
      ErrorToast("Email Required!");
    } else if (IsEmail(email)) {
      ErrorToast("Email address is not valid!");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required!");
    } else {
      let res = await axios.post("api/user/login", { email, password });
      if (res.data.status === "success") {
        SuccessToast("Login Success!");
        router.replace("/dashboard");
      } else {
        ErrorToast("Email or Password Wrong!");
      }
    }
  };
  

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header/>
      <section className="py-12 h-screen flex justify-center items-center">
        <div className="container  mx-auto">
          <div className="flex max-w-md mx-auto flex-col text-center">
            <h1>Log IN</h1>

            <form
  onSubmit={handelSubmit}
  className="mt-8 p-4 bg-gray-100 rounded-lg"
>
  <span className="text-sm text-gray-500">Sign In</span>
  <h4 className="mb-4 text-2xl">Join our community</h4>
  <div className="flex mb-4 px-4 bg-gray-200 rounded">
    <input
      className="w-full py-2 text-sm placeholder-gray-300 font-semibold bg-gray-200 outline-none"
      type="email"
      placeholder="name@email.com"
      ref={(input) => (emailRef = input)}
    />
    <svg
      className="h-4 w-4 ml-2 my-auto text-gray-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      />
    </svg>
  </div>
  <div className="flex mb-4 px-4 bg-gray-200 rounded">
    <input
      className="w-full py-2 text-sm placeholder-gray-300 font-semibold bg-gray-200 outline-none"
      type="password"
      placeholder="Enter your password"
      ref={(input) => (passwordRef = input)}
    />
    <button className="ml-2">
      <svg
        className="h-4 w-4 my-auto text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    </button>
  </div>
  <button
    type="submit"
    className="block w-full p-2 text-center text-sm text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg"
  >
    Sign In
  </button>
</form>

          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
