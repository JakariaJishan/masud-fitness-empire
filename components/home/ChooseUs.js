import React from "react";
import InnerChooseUs from "./InnerChooseUs";
const ChooseUs = () => {
  const chooseusObj = [
    {
      icon: '/assets/gift1.png',
      title: "free fitness training",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
        icon: '/assets/gift2.png',
        title: "tons of cardio and trength",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
        icon: '/assets/gift3.png',
        title: "no commmitment membership",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold uppercase my-16">
        training <span className="text-[#FCD842]">programs</span>{" "}
      </h1>
      <div className="grid grid-col lg:grid-cols-3 text-center w-3/4 mx-auto gap-5  ">
        {chooseusObj.map((items) => (
          <InnerChooseUs  key={items.title} items={items} />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
