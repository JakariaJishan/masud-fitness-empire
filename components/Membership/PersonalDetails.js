import React from "react";

const PersonalDetails = () => {
  return (
    <div className=" grid grid-cols-2 gap-5 my-10">
      <div >
        <div className=" form-control w-full ">
          <label className=" label">
            <span className=" label-text font-semibold">First Name</span>
          </label>
          <input
            type="text"
            className=" input rounded-none  input-bordered w-full "
          />
        </div>
        <div className=" form-control w-full ">
          <label className=" label">
            <span className=" label-text font-semibold">Email</span>
          </label>
          <input
            type="text"
            className=" input rounded-none  input-bordered w-full "
          />
        </div>
        
      </div>
      <div>
      <div className=" form-control w-full ">
          <label className=" label">
            <span className=" label-text font-semibold">Last Name</span>
          </label>
          <input
            type="text"
            className=" input rounded-none  input-bordered w-full "
          />
        </div>
        <div className=" form-control w-full ">
          <label className=" label">
            <span className=" label-text font-semibold">Mobile Number</span>
          </label>
          <input
            type="text"
            className=" input rounded-none  input-bordered w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
