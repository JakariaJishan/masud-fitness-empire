import { useRouter } from "next/router";
import React, { useState } from "react";
import BankPayment from "./BankPayment";
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
      return "congo ";
    }
  };
  const formTitles = ["Personal Details", "Bank Payment", "membership Created"];
  return (
    <div className="w-3/4 mx-auto py-20">
      <div className="flex justify-between items-center text-center">
          <div className="">
            <p className="bg-[#FCD842] w-6   mx-auto rounded-full ">1</p>
            <h1 className="font-bold">{formTitles[0]}</h1>
          </div>
          <div className="h-1 -mt-10 border-dotted border-1  w-full "></div>

        <div>
          <p>2</p>
          <h1>{formTitles[1]}</h1>
        </div>
        <div className="h-3  w-full bg-red-800"></div>

        <div>
          <p>3</p>
          <h1>{formTitles[2]}</h1>
        </div>
      </div>

      <div>{displayPage()}</div>

      <button
        className="btn btn-primary my-5  btn-lg"
        disabled={load == 0}
        onClick={() => setLoad((curr) => curr - 1)}
      >
        prev
      </button>
      <button
        className="btn btn-primary my-5  btn-lg"
        onClick={() => {
          if (load === formTitles.length - 1) {
            alert("FORM SUBMITTED");
            // router.push('/')
          } else {
            setLoad((curr) => curr + 1);
          }
        }}
      >
        next
      </button>
    </div>
  );
};

export default Form;
