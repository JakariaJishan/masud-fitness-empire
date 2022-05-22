import { useRouter } from "next/router";
import React, { useState } from "react";
import BankPayment from "./BankPayment";
import PersonalDetails from "./PersonalDetails";

const Form = () => {
  const [load, setLoad] = useState(0);
  const router = useRouter()
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
        <div>
            <p>1</p>
            <h1>{formTitles[load]}</h1>
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
          }else{
              setLoad((curr) => curr+1)
          }
        }}
      >
        next
      </button>
    </div>
  );
};

export default Form;
