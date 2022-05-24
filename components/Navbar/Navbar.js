import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className=" bg-black   ">
        <div className="w-3/4 mx-auto flex items-center flex-wrap p-3">
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide">
                <img src="/assets/masudbrave.png" alt="" />
              </span>
            </a>
          </Link>
          <button
            className=" inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            {!active ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link href="/">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white ">
                  Home
                </a>
              </Link>
              <Link href="#service">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  Services
                </a>
              </Link>
              <Link href="#classes">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  Our Classes
                </a>
              </Link>
              <Link href="#about">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  About Us
                </a>
              </Link>
              <Link href="#blog">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  Blog
                </a>
              </Link>
              <Link href="/pricing">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  Pricing
                </a>
              </Link>
              <Link href="#contact">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* row nav bar */}
      {/* <div className="flex justify-between items-center w-3/4 m-auto p-5">
        <div>logo</div>
        <div>
          <ul className="flex justify-center items-center ">
            <li className="mr-5 text-lg font-semibold hover:underline">
              <Link href="/#">
                <a>Home</a>
              </Link>
            </li>
            <li className="mr-5 text-lg font-semibold hover:underline">
              <Link href="/#">
                <a>Services</a>
              </Link>
            </li>
            <li className="mr-5 text-lg font-semibold hover:underline">
              <Link href="/#">
                <a>Our Classes</a>
              </Link>
            </li>
            <li className="mr-5 text-lg font-semibold hover:underline">
              <Link href="/#">
                <a>About Us</a>
              </Link>
            </li>
            <li className="mr-5 text-lg font-semibold hover:underline">
              <Link href="/#">
                <a>Blog</a>
              </Link>
            </li>
            <li className="mr-5 text-lg font-semibold hover:underline">
              <Link href="/#">
                <a>Pricing</a>
              </Link>
            </li>
            <li className="mr-5 text-lg font-semibold hover:underline">
              <Link href="/#">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
