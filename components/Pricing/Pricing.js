import React from "react";
import InnerPricing from "./InnerPricing";
const Pricing = () => {
  const demoObj = [
    {
      id: 1,
      image: "/assets/service-1.jpg",
      title: "advance plan",
      price: "$140",
    },
    {
      id: 2,
      image: "/assets/service-2.jpg",
      title: "basic plan",
      price: "$120",
    },
    {
      id: 3,
      image: "/assets/service-3.jpg",
      title: "beginers",
      price: "$90",
    },
  ];
  return (
    <div className="w-3/4 mx-auto my-10 ">
      <h1 className="text-3xl font-bold uppercase my-16 text-center text-[#FCD842]">
        choose the offer <span className="text-black">that suits you</span>{" "}
      </h1>
      <div className="grid grid-col lg:grid-cols-3 gap-5 text-center ">
        {demoObj.map((items) => (
          <InnerPricing key={items.title} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
