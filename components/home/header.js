import React from "react";
const Header = () => {
  // w-4/5 mx-5 my-3 absolute top-0 left-0 text-white md:mt-20 lg:mt-36
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
        <div className="  top-0 lg:left-52 absolute  text-white  ">
          <h1 className="text-xl  font-extrabold md:text-5xl lg:text-7xl">
            THE BEST FITNESS <br /> STUDIO IN TOWN
          </h1>
          <p className="text-xs my-3 md:text-lg md:my-10 lg:w-2/3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <button className="font-bold md:text-xl lg:text-xl bg-[#FCD842] text-black px-4 py-1 md:px-10 md:py-3 lg:py-5 lg:px-16 ">
            JOIN US
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
