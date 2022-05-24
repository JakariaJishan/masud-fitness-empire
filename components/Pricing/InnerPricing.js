import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InnerPricing = (props) => {
  const { price, title, image } = props.items;
  const styles = {
    background: `url('${image}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="relative text-white p-12   z-10 group" style={styles}>
        <div className="z-100">
          <p className="text-[#FCD842] font-semibold uppercase">
            billed monthly
          </p>
          <h1 className="font-bold text-3xl uppercase ">{title}</h1>
          <p className="text-[#FCD842] text-6xl my-5 font-bold">{price}</p>
          <div className="flex justify-center items-center">
            <div className="leading-8 text-left">
              <p>
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                <span className="capitalize ">mobile-optimized</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                <span className="capitalize ">best hosting</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                <span className="capitalize ">free custom</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                <span className="capitalize ">outstanding</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                <span className="capitalize ">happy customers</span>
              </p>
            </div>
          </div>
        </div>
        <button className="btn btn-primary rounded-none mt-10 font-bold">
          purchase
        </button>
        <div className="h-full -z-50 w-full bg-[#14142d]   group-hover:bg-[#111223] opacity-50 absolute top-0 left-0"></div>
      </div>
    </>
  );
};

export default InnerPricing;
