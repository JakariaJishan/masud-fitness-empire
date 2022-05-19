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
      <div style={styles} className="bg-top bg-cover">
        <div className="h-96">
          <h1 className="">our classes</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
