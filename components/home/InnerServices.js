import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InnerServices = (props) => {
  const { icon, body, title, id, image } = props.items;
  console.log(id);
  const styles = {
    background: `url('${image}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <div
        className="relative text-white p-12  cursor-pointer z-10 group"
        style={styles}
      >
        <div className="z-100">
          <FontAwesomeIcon className="text-5xl mt-10 group-hover:text-[#FCD842]" icon={icon} />
          <h1 className="font-extrabold text-3xl my-4 group-hover:text-[#FCD842]">{title}</h1>
          <p>{body}</p>
        </div>
        <div className="h-full -z-50 w-full bg-[#0C0C15] group-hover:bg-[#111223] opacity-50 absolute top-0 left-0"></div>
      </div>
    </>
  );
};

export default InnerServices;
