import { faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

const Services = () => {
  const demoObj = [
    {
      icon: faWheatAwnCircleExclamation,
      title: "PROGRESSION",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      icon: "",
      title: "WORKOUT",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: "",
      title: "NUTRITION",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
  ];
  return <div className="grid grid-cols-3 gap-5 text-center w-3/4 m-auto text-white">

      {
          demoObj.map(items => {
              return (
                  <div key={items.title} className="bg-slate-700 p-10">
                      <FontAwesomeIcon className="text-4xl" icon="fa-brands fa-twitter"/>
                      <h1 className="text-3xl font-bold mt-10 mb-3">{items.title}</h1>
                      <p>{items.body}</p>
                  </div>
              )
          })
      }
  </div>;
};

export default Services;
