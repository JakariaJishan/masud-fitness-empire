import { useRouter } from "next/router";
import React, { useState } from "react";
import BankPayment from "./BankPayment";
import MembershipCreated from "./MembershipCreated";
import PersonalDetails from "./PersonalDetails";

const Form = () => {
  const [load, setLoad] = useState(0);
  const router = useRouter();
  const displayPage = () => {
    if (load === 0) {
      return <PersonalDetails />;
    } else if (load === 1) {
      return <BankPayment />;
    } else {
      return <MembershipCreated/>;
    }
  };
  const formTitles = ["Personal Details", "Bank Payment", "membership Created"];
  return (
    <div className="w-3/4 mx-auto py-20">
      <div className="flex justify-between items-center text-center ">
        <div className="">
          <p className="bg-[#FCD842] w-6   mx-auto rounded-full text-white font-bold">
            1
          </p>
          <h1 className="font-bold">{formTitles[0]}</h1>
        </div>

        <div
          className={` ${
            load >= 1 ? "border-[#FCD842]" : "border-[#AFAFAF]"
          }  w-full -mt-12 border-t-4  border-dotted `}
        ></div>

        <div className="">
          <p
            className={`${
              load >= 1 ? "bg-[#FCD842]" : "bg-[#AFAFAF]"
            } w-6 mx-auto rounded-full text-white font-bold`}
          >
            2
          </p>
          <h1
            className={`${
              load >= 1 ? "text-[#000]" : "text-[#AFAFAF]"
            } font-bold `}
          >
            {formTitles[1]}
          </h1>
        </div>

        <div
          className={` ${
            load >= 2 ? "border-[#FCD842]" : "border-[#AFAFAF]"
          }  w-full -mt-12 border-t-4  border-dotted `}
        ></div>

        <div className="">
          <p
            className={`${
              load >= 2 ? "bg-[#FCD842]" : "bg-[#AFAFAF]"
            } w-6 mx-auto rounded-full text-white font-bold`}
          >
            3
          </p>
          <h1
            className={`${
              load >= 2 ? "text-[#000]" : "text-[#AFAFAF]"
            } font-bold `}
          >
            {formTitles[2]}
          </h1>
        </div>
      </div>

      <div>{displayPage()}</div>
      <div className="float-right my-10">
        <button
          className="btn btn-primary my-5 rounded-none mr-5  "
          disabled={load == 0}
          onClick={() => setLoad((curr) => curr - 1)}
        >
          prev
        </button>

      
        <button
          className="btn btn-primary rounded-none my-5  "
          onClick={() => {
            if (load === formTitles.length - 1) {
              alert("FORM SUBMITTED");
              router.push('/')
            } else {
              setLoad((curr) => curr + 1);
            }
          }}
        >
          {load=== formTitles.length - 1? 'submit': 'next'}
        </button>
      </div>
    </div>
  );
};

export default Form;
