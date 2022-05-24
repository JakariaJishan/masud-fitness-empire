import Link from "next/link";
import React from "react";
const InnerTraining = (props) => {
  const { fire, image } = props.items;
  const styles = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="relative mx-auto ">
      <img
        src={image}
        style={styles}
        alt="asdf"
        height="500px"
        width="500px"
        className=""
      />
      <Link href="/classes">
        <div className=" absolute bottom-5 left-0 font-bold md:text-xl lg:text-xl bg-[#FCD842] text-black px-4 py-1 md:px-8 md:py-3 lg:py-5 lg:px-8 uppercase flex cursor-pointer justify-between items-center">
          {fire}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-5 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default InnerTraining;
