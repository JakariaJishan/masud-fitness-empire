import React, { useState } from "react";

const Membership = () => {
    const [load, setLoad] = useState(false)
  return (
    <div>
      <ul className="steps">
        <li className="step step-primary">Register</li>
        <li className={`step ${load == true ? 'step-primary' : ''} transition ease-in delay-700`}>Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
      <button className="btn btn-primary" onClick={(e) => setLoad(true)}>click</button>
    </div>
  );
};

export default Membership;
