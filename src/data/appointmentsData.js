
import { Brain ,ActivitySquare,Heart,Eye} from 'lucide-react';


export const appointmentData = {
    upcomingAppointments: [
      {
        day: "Thursday",
        items: [
          {
            id: "checkup",
            title: "Health checkup complete",
            time: "11:00 AM",
            icon: ActivitySquare,
          },
          {
            id: "eye",
            title: "Ophthalmologist",
            time: "14:00 PM",
            icon: Eye,
          },
        ],
      },
      {
        day: "Saturday",
        items: [
          {
            id: "cardio",
            title: "Cardiologist",
            time: "12:00 AM",
            icon: Heart ,
          },
          {
            id: "neuro",
            title: "Neurologist",
            time: "16:00 PM",
            icon: Brain,
          },
        ],
      },
    ],
    activityData: {
      totalAppointments: 3,
      weeklyData: [
        {
          day: "Mon",
          height: 70 ,
        },
        {
          day: "Tues",
          height: 50 ,
        },
        {
          day: "Wed",
          height: 60 ,
        },
        {
          day: "Thurs",
          height: 30 ,
        },
        {
          day: "Fri",
          height: 40 ,
        },
        {
          day: "Sat",
          height: 80 ,
        },
        {
          day: "Sun",
          height: 40 ,
        },
      ],
    },
  }
  