import React from "react";
import sample from "../assets/bg-video.mp4";
const Header = () => {
  return (
    <>
      <video className="videoTag" src={sample} autoPlay loop muted></video>
    </>
  );
};

export default Header;
