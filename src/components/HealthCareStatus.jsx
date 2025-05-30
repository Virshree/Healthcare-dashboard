import React from "react";

function HealthCareStatus({ healthStatus }) {
  return (
  
      <div className="p-4 flex flex-wrap    ">
        {healthStatus?.map((part, index) => (
          <div key={part.id} className="p-4 w-[200px]   bg-gray-100 m-5 rounded-lg shadow-md">
            <div className=" flex ">
              <img src={part.img} alt="logo" className="w-14 " />
              <h4 className="text-xl font-bold m-2">{part.name}</h4>
            </div>

            <p className="text-md text-gray-500 mt-1">Date:{part.date}</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2 relative">
              <div
                className="transition-all duration-500 h-2 rounded-full"
                style={{
                  width:`${part.percentage}%`,
                  backgroundColor: `${part.backgroundColor}`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
  
  );
}

export default HealthCareStatus;
