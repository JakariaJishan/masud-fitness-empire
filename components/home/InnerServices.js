import React from "react";

const InnerServices = (props) => {
  const { icon, body, title } = props.items;
  return (
    <div>
      <h1>{title}</h1>
      <img src="/assets/alora-griffiths-TuzrzArccvc-unsplash.jpg" layout="fill" alt='{icon}'></img>
    </div>
  ); 
};

export default InnerServices;
