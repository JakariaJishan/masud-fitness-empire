import React from 'react';

const PersonalDetails = () => {
    return ( <div className=" grid grid-cols lg:grid-cols-2 gap-5">
    <div>
    <div className=" form-control w-full ">
        <label className=" label">
          <span className=" label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className=" input  input-bordered w-full "
        />
      </div>
      <div className=" form-control w-full ">
        <label className=" label">
          <span className=" label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className=" input  input-bordered w-full "
        />
      </div>
    </div>
    <div>
    <div className=" form-control w-full ">
        <label className=" label">
          <span className=" label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className=" input  input-bordered w-full "
        />
      </div>
      <div className=" form-control w-full ">
        <label className=" label">
          <span className=" label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className=" input  input-bordered w-full "
        />
      </div>
    </div>
  </div>
    );
};

export default PersonalDetails;