import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center w-3/4 m-auto p-5">
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
      </div>
    </>
  );
};

export default Navbar;
