import React from 'react';

const About = () => {
    return (
        <div className="grid grid-col lg:grid-cols-2 gap-20 w-3/4 mx-auto">
            <div>
                <img src="/assets/about.jpg" alt="about"   />
            </div>
            <div>
                <h1 className="text-[#F2F2F3] text-6xl font-extrabold uppercase">about us</h1>
                <h1 className="text-[#FCCA42] text-3xl font-extrabold uppercase my-3">we are here to dream!</h1>
                <h1 className=" text-4xl text-black font-extrabold uppercase">our team is here to serve you.</h1>
                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
};

export default About;