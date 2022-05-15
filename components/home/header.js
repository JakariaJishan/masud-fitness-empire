import React from "react";
import img from '../assets/powerx-1.png';
const Header = () => {
  const style = {
    backgroundImage: `url('${img}')`
  }
  return (
    <>
      <div
        className="grid grid-cols-2 w-3/4 m-auto "
        styles={style}
      >
        <div>
          <h1 className="text-3xl">
            THE BEST FITNESS <br /> STUDIO IN TOWN
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English
          </p>
          <button>JOIN US</button>
        </div>
        <div>sadf</div>
      </div>
    </>
  );
};

export default Header;
