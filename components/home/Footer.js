import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#171426] mt-20 text-white  body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
           
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                NEED HELP?
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="text-center">©{new Date().getFullYear()} Jakaria Jishan. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default Footer;
