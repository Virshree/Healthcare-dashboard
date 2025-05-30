import React from "react";
import { healthData } from "../data/healthData";

import HealthCareStatus from "./HealthCareStatus";
function AnatomySection() {
  // console.log("healthData",healthData);
  const antanomy = healthData?.find(
    (item) => item.type === "anatonyImage"
  )?.value;
  const indicator =
    healthData?.find((item) => item.type === "indicators")?.value || [];
  // console.log(indicator);

  const healthStatus=healthData?.find((item)=>(item.type==="healthStatus"))?.value || [];
  
  return (
    <div className=" bg-gray-100 w-[350px]  rounded-xl grid grid-cols-2">
     
        <div className="relative flex">
          <img src={antanomy} alt="logo" className=" " />
          {indicator?.map((item, index) => (
            <span
              className="absolute  font-semibold text-xl"
              key={index.id}
              style={{ top: item.position.top, left: item.position.left,backgroundColor:item.backgroundColor,color:item.color,padding:"5px",borderRadius:"5px",width:"150px" }}
            >
              {item.name}
            </span>
          ))}
         
          {/* Add more indicators as per your image */}
         
          <div className="ml-[350px] ">
          <HealthCareStatus healthStatus={healthStatus}/>
          </div>
         
        </div>
        
      
    </div>
  );
}

export default AnatomySection;
