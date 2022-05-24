import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="relative ">
        <video
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
          src={"/assets/gym-cinematic-2.mp4"}
          className="w-screen h-full "
        />
        <div className="lg:top-52 mx-5  top-3 lg:left-52 absolute  text-white  ">
          <h1 className="text-xl  font-extrabold md:text-5xl lg:text-7xl">
            THE BEST FITNESS <br /> STUDIO IN TOWN
          </h1>
          <p className="text-xs my-3 md:text-lg md:my-10 lg:w-2/3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <Link href="/membership">
            <button className="btn btn-primary lg:btn-lg font-bold rounded-none">
              JOIN US
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
