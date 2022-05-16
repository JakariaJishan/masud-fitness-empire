import React from "react";
import InnerTraining from "./InnerTraining";

const Training = () => {
  const trainingObj = [
    {
      fire: "yoga training session",
      image: "/assetes/training1.jpg",
    },
    {
      fire: "cardio training session",
      image: "/assetes/training2.jpg",
    },
  ];
  return <div>
      {
          trainingObj.map(items => {
              <InnerTraining items={items}/>
          })
      }
  </div>;
};

export default Training;
