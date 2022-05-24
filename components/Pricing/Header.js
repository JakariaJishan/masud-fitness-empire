import React from "react";

const Header = () => {
  const styles = {
    backgroundImage: `url('/assets/header-img.jpg')`,
    // backgroundRepeat: "no-repeat",
    // // backgroundPosition: "center",
    // backgroundSize: "cover",
  };
  return (
    <div>
      <div style={styles} className="relative bg-top z-0 bg-cover">
        <div className="h-screen">
          <h1 className=" absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-white uppercase text-6xl font-bold">pricing plans</h1>
        </div>
        
        <div className="h-full  w-full z-10 bg-[#14142d] opacity-50 absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default Header;
