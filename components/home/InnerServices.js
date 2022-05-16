import React from "react";

const InnerServices = (props) => {
  const { icon, body, title } = props.items;
  return (
    <div className="bg-[url('/assets/pic1.jpg')]">
      <h1>{title}</h1>
    </div>
  ); 
};

export default InnerServices;
