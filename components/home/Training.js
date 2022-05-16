import React from "react";
import InnerTraining from "./InnerTraining";

const Training = () => {
  const trainingObj = [
    {
      fire: "yoga training session",
      image: "/assets/training3.jpg",
    },
    {
      fire: "cardio training session",
      image: "/assets/training2.jpg",
    },
  ];
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase my-16">training <span className="text-[#FCD842]">programs</span> </h1>
        <div className="grid grid-col lg:grid-cols-2 text-center w-3/4 mx-auto gap-5 ">
          {trainingObj.map((items) => (
            <InnerTraining key={items.fire} items={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Training;
