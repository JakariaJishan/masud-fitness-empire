import {
  faBottleWater,
  faDumbbell,
  faSwatchbook
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InnerServices from "./InnerServices";

const Services = () => {
  const demoObj = [
    {
      icon: faSwatchbook,
      title: "PROGRESSION",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      icon: faDumbbell,
      title: "WORKOUT",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: faBottleWater,
      title: "NUTRITION",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5 text-center w-3/4 m-auto ">
      {demoObj.map((items) => <InnerServices key={items.title} items={items}/>)}
    </div>
  );
};

export default Services;
