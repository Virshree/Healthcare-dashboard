import teeth from '../assets/teeth.png';
import hands from '../assets/hands.png';

export const calendarData = [
    {
      type: "calendar",
      month: "October",
      year: 2021,
      days: [
        {
          dayOfWeek: "Mon",
          date: 25,
          appointments: [
            { time: "10:00", available: true },
            { time: "11:00", available: true },
            { time: "12:00", available: true },
          ],
        },
        {
          dayOfWeek: "Tues",
          date: 26,
          appointments: [
            { time: "08:00", available: true },
            { time: "09:00", available: true },
            { time: "10:00", available: true },
          ],
        },
        {
          dayOfWeek: "Wed",
          date: 27,
          appointments: [
            { time: "12:00", available: true },
            { time: "13:00", available: true },
          ],
        },
        {
          dayOfWeek: "Thurs",
          date: 28,
          appointments: [
            { time: "10:00", available: true },
            { time: "11:00", available: true },
          ],
        },
        {
          dayOfWeek: "Fri",
          date: 29,
          appointments: [
            { time: "14:00", available: true },
            { time: "16:00", available: true },
          ],
        },
        {
          dayOfWeek: "Sat",
          date: 30,
          appointments: [
            { time: "12:00", available: true },
            { time: "15:00", available: true },
          ],
        },
        {
          dayOfWeek: "Sun",
          date: 31,
          appointments: [
            { time: "09:00", available: true },
            { time: "10:00", available: true },
            { time: "11:00", available: true },
          ],
        },
      ],
    },
    {
      type: "featuredAppointments",
      appointments: [
        {
          id: "dentist",
          type: "Dentist",
          time: "09:00-11:00",
          doctor: "Cameron Williamson",
          icon: teeth,
          backgroundColor: "blue",
          color:"white",
        },
        {
          id: "physio",
          type: "Physiotherapy Appointment",
          time: "11:00-12:00",
          doctor: "Kevin Dones",
          icon: hands,
          backgroundColor: "lightblue",
          color:"white",
        },
      ],
    },
  ];