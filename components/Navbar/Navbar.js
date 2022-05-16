import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
<nav className='flex items-center flex-wrap bg-black p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              masud fitness empire
            </span>
          </a>
        </Link>
        <button className=' inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
          {
            !active? <FontAwesomeIcon icon={faHamburger}/> : 'x'
          }
        </button>
        <div  className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                Services
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                Our Classes
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                About Us
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                Block
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                Pricing
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                Contact Us
              </a>
            </Link>
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
