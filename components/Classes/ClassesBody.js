import React from 'react';
import InnerClassesBody from './InnerClassesBody';

const ClassesBody = () => {
    const classesObj = [
        {
          fire: "yoga training session",
          image: "/assets/training3.jpg",
        },
        {
          fire: "cardio training session",
          image: "/assets/training2.jpg",
        },
      ];
      return (
        <>
          <div className="my-20">
            <div className="grid grid-col lg:grid-cols-3 text-center w-3/4 mx-auto gap-5 ">
              {classesObj.map((items) => (
                <InnerClassesBody key={items.fire} items={items} />
              ))}
            </div>
          </div>
        </>
      );
    };
    
export default ClassesBody;