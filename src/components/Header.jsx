import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section className="bg-blue-900 text-white">
      <div className="container mx-auto">
        <nav className="flex items-center py-6">
          <Link href="/">
            {/* <img className="h-10" src="images/logo.svg" alt="Logo" width="auto" /> */}
            <h1>Logo</h1>
          </Link>
          <div className="lg:hidden ml-auto">
            <button className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex items-center space-x-6 ml-auto">
            <li>
              <Link className="text-sm hover:text-gray-400" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-gray-400" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-gray-400" href="/service">
                Service
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-gray-400" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-gray-400" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="hidden lg:block">
            <Link
              href="/login"
              className="text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg m-2"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-6">
            <a className="mr-auto text-3xl font-semibold leading-none" href="#">
              <img
                className="h-10"
                src="metis-assets/logos/metis/metis.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                <a
                  className="block text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 py-2 px-4"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 py-2 px-4"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 py-2 px-4"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 py-2 px-4"
                  href="#"
                >
                  Features
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-6 border-t border-gray-100">
              <a
                className="block text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 mb-2 rounded"
                href="#"
              >
                Sign Up
              </a>
              <a
                className="block text-sm text-blue-600 hover:text-blue-700 py-2 px-4 font-semibold border border-blue-200 hover:border-blue-300 rounded"
                href="#"
              >
                Log In
              </a>
            </div>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-sm text-gray-600">
              <span>Get in Touch</span>
              <a
                className="text-blue-600 hover:text-blue-600 underline"
                href="#"
              >
                info@example.com
              </a>
            </p>
            <a className="inline-block px-2" href="#">
              <img src="metis-assets/icons/facebook-blue.svg" alt="Facebook" />
            </a>
            <a className="inline-block px-2" href="#">
              <img src="metis-assets/icons/twitter-blue.svg" alt="Twitter" />
            </a>
            <a className="inline-block px-2" href="#">
              <img
                src="metis-assets/icons/instagram-blue.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
