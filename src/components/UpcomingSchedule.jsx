import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

function UpcomingSchedule({ appointsmentsData }) {

  return (
    <div className=" rounded-2xl w-full bg-white-100 shadow mt-10 p-5 ">
      <h2 className="text-xl font-semibold mb-4">The Upcoming Schedule</h2>
      <div className="space-y-6">
        {appointsmentsData?.upcomingAppointments?.map((item, index) => (
          <div key={index}>
            <span className="text-sm text-gray-500 mb-2">On {item.day}</span>

            <div className="space-x-4 grid grid-cols-2">
              {item?.items?.map((info, id) => (
                <SimpleAppointmentCard  
                  key={id}
                  title={info.title}
                  time={info.time}
                  icon={info.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingSchedule;
