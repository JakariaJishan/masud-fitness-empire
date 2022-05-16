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
          className="w-screen h-full"
        />
        <div className="grid lg:grid-cols-2  absolute top-0 left-0 text-white">
          <div className="m-5">
            <h1 className="text-xl  font-extrabold">
              THE BEST FITNESS <br /> STUDIO IN TOWN
            </h1>
            <p className="text-xs my-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </p>
            <button className="btn">JOIN US</button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
