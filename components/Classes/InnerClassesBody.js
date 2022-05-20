import React from 'react';

const InnerClassesBody = (props) => {
    const { fire, image } = props.items;
    const styles = {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
    return (
      <div className="relative mx-auto text-center cursor-pointer">
        <img
          src={image}
          style={styles}
          alt="asdf"
          height="500px"
          width="500px"
          className=""
        />
        <div
          className=" absolute top-full  left-1/2  -translate-x-1/2 -translate-y-1/2  font-bold  text-black bg-[#FCD842] px-10 py-3 uppercase flex justify-between items-center"
          
        >
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
      </div>
    );
  };

export default InnerClassesBody;