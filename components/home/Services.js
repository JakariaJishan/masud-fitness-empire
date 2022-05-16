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
      id:1,
      image: "/assets/service-1.jpg",
      icon: faSwatchbook,
      title: "PROGRESSION",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      id:2,
      image: "/assets/service-2.jpg",
      icon: faDumbbell,
      title: "WORKOUT",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id:3,
      image: "/assets/service-3.jpg",
      icon: faBottleWater,
      title: "NUTRITION",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
  ];
  return (
    <div className="grid grid-col lg:grid-cols-3 gap-5 text-center w-3/4 mx-auto my-32 ">
      {demoObj.map((items) => <InnerServices key={items.title} items={items}/>)}
    </div>
  );
};

export default Services;
