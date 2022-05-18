import React from 'react';

const InnerChooseUs = (props) => {
    const {icon, body, title} = props.items;
    return (
        <div className="shadow-lg border-4 border-white cursor-pointer p-10 hover:shadow-xl hover:border-4 hover:border-[#FCD842] ">
            <div >
                <img className="mx-auto w-20" src={icon} alt="asdf" />
                <h1 className="text-xl my-5 font-bold uppercase">{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default InnerChooseUs;