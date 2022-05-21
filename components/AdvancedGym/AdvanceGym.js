import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AdvanceGym = () => {
  return (
    <div>
      <div className="w-3/4 my-10 mx-auto text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className="mx-5">
            <img src="/assets/advancegym.jpg" alt="asdf" width="100%" />
            <p className="my-5 text-gray-500 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <h1 className="capitalize font-bold flex items-center">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="text-[#FCD842] text-2xl mr-2"
              />
              getting stronger body
            </h1>
            <h1 className="capitalize font-bold flex items-center">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="text-[#FCD842] text-2xl mr-2"
              />
              getting stronger body
            </h1>
            <h1 className="capitalize font-bold flex items-center">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="text-[#FCD842] text-2xl mr-2"
              />
              getting stronger body
            </h1>
          </div>
          <div className="">
            <div className="my-10 mx-5 ">
              <h1 className=" font-bold text-5xl uppercase">
                <span className="text-[#FCD842]">class</span> schedule
              </h1>
              <div className="my-20 grid grid-cols lg:grid-cols-2 gap-5">
                <div className=" shadow-xl rounded p-5">
                  <h1 className=" font-bold text-2xl capitalize">monday</h1>
                  <p className="text-[#FCD842] uppercase font-semibold">
                    8:00 am - 9:00 am
                  </p>
                </div>
                <div className=" shadow-xl rounded p-5">
                  <h1 className=" font-bold text-2xl capitalize">tuesday</h1>
                  <p className="text-[#FCD842] uppercase font-semibold">
                    8:00 am - 9:00 am
                  </p>
                </div>
                <div className=" shadow-xl rounded p-5">
                  <h1 className=" font-bold text-2xl capitalize">wednesday</h1>
                  <p className="text-[#FCD842] uppercase font-semibold">
                    8:00 am - 9:00 am
                  </p>
                </div>
                <div className=" shadow-xl rounded p-5">
                  <h1 className=" font-bold text-2xl capitalize">thursday</h1>
                  <p className="text-[#FCD842] uppercase font-semibold">
                    8:00 am - 9:00 am
                  </p>
                </div>
                <div className=" shadow-xl rounded p-5">
                  <h1 className=" font-bold text-2xl capitalize">friday</h1>
                  <p className="text-[#FCD842] uppercase font-semibold">
                    8:00 am - 9:00 am
                  </p>
                </div>
                <div className=" shadow-xl rounded p-5">
                  <h1 className=" font-bold text-2xl capitalize">sunday</h1>
                  <p className="text-[#FCD842] uppercase font-semibold">
                    8:00 am - 9:00 am
                  </p>
                </div>
              </div>
              <div className=" text-center lg:text-right">
                <button className="bg-[#FCD842] px-10 py-3 uppercase font-bold text-xl ">
                  join us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceGym;
