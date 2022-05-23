import React from "react";

const BankPayment = () => {
  return (
    <div className="my-10">
      <div className="border-2 border-[#AFAFAF] p-10">
        <div className="lg:flex justify-between items-center">
          <div className="flex justify-between items-center ">
            <input
              type="radio"
              name="radio-3"
              className="radio radio-primary"
              checked
            />
            <div className="ml-5">
              <h1 className="text-2xl font-bold capitalize">credit card</h1>
              <p>Safe money transfer using your bank account.</p>
            </div>
          </div>
          <div className="text-right flex justify-end items-center my-3">
            <img src="/assets/card1.png" alt="asd" width="40px" />
            <img
              src="/assets/card2.png"
              alt="asd"
              width="40px"
              className="mx-2 "
            />
            <img src="/assets/card3.png" alt="asd" width="40px" />
          </div>
        </div>
        <div className="mt-20">
          <div className=" form-control w-full  relative">
            <label className=" label">
              <span className=" label-text  text-[#AFAFAF] uppercase">
                Card Number
              </span>
            </label>
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              className=" input rounded-none  input-bordered w-full "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#AFAFAF] absolute bottom-2 right-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <div className="grid grid-cols lg:grid-cols-2 gap-3 mt-10">
            <div className=" form-control w-full  relative">
              <label className=" label">
                <span className=" label-text  text-[#AFAFAF] uppercase">
                  name on Card
                </span>
              </label>
              <input
                type="text"
                className=" input rounded-none  input-bordered w-full "
              />
            </div>
            <div>
                <div className="grid grid-cols lg:grid-cols-2 gap-3">
                <div className=" form-control w-full  relative">
              <label className=" label">
                <span className=" label-text  text-[#AFAFAF] uppercase">
                  expire date
                </span>
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className=" input rounded-none  input-bordered w-full "
              />
            </div>
            <div className=" form-control w-full  relative">
              <label className=" label">
                <span className=" label-text  text-[#AFAFAF] uppercase">
                  cvv code
                </span>
              </label>
              <input
                type="text"
                className=" input rounded-none  input-bordered w-full "
              />
            </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-[#AFAFAF] p-10 mt-10">
      <div className="lg:flex justify-between items-center">
          <div className="flex justify-between items-center ">
            <input
              type="radio"
              name="radio-3"
              className="radio radio-primary"
              checked
            />
            <div className="ml-5">
              <h1 className="text-2xl font-bold capitalize">PayPal</h1>
              <p>You will be redirected to PayPal website to complete your purchase securely.</p>
            </div>
          </div>
          <div className="text-right flex justify-end items-center my-3">
            <img src="/assets/paypal.png" alt="asd" width="100px" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankPayment;
