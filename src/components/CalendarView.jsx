import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

function CalendarView({ calendarData }) {
  const calendar = calendarData?.find((item) => item.type === "calendar");
  const appointment = calendarData?.find(
    (item) => item.type === "featuredAppointments"
  );
  
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {calendar.month}
        {calendar.year}
      </h2>
      <div className="flex gap-5">
      <span><MoveLeft/></span>
      <span><MoveRight/></span>
      </div>
     
      </div>
      <div className="grid grid-cols-7  gap-4 mb-6 ">
        {calendar?.days?.map((item, index) => (
          <div
            className="bg-gray-100  rounded-lg text-center text-sm grid grid-row-2"
            key={index}
          >
            <span className="font-medium text-gray-600 ">{item.dayOfWeek}</span>
            <span className="font-semibold text-gray-800">{item.date}</span>
            <div className="mt-2">
              {item?.appointments?.map((appointment, index) => (
                <div key={index}>{appointment.time}</div>
              ))}
            </div>
          </div>
        ))}
        <div className="grid  grid-cols-2 w-max">
          {appointment?.appointments?.map((item, index) => (
            <div
              className="grid  bg-white p-4 rounded-xl   m-2 shadow-md gap-4"
              key={index}
              style={{ backgroundColor: `${item.backgroundColor}` ,color:`${item.color}`}}
            >
              {/* Text Info */}
              <div className="flex flex-col justify-center  ">
                <div className="flex relative ">
                  <p className=" text-xl font-semibold">
                    {item.type}
                  </p>
                  <img
                    src={item.icon}
                    alt="logo"
                    className="absolute  top-0 right-0 w-14 bg-transparent p-2 m-2"
                  />
                </div>
                <p className="text-md ">{item.time}</p>
                <p className="text-xl ">Dr.{item.doctor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
