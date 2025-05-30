import anatomyImg from "../assets/anatonyImg.png";
import lungs from "../assets/lungs.png";
import bone from "../assets/bone.png";
import teeth from "../assets/teeth.png";
export const healthData = [
  {
    type: "anatonyImage",
    value: anatomyImg,
  },
  {
    type: "indicators",
    value: [
      {
        id: "heart",
        name: "Healthy Heart",
        position: { top: "95px", left: "115px" },
        backgroundColor:"lightblue",
        color:"red"
        
      },
      {
        id: "leg",
        name: "Healthy Leg",
        position: { top: "310px", left: "110px" },
        backgroundColor:"lightblue",
        color:"green"
      }
     
    ]
  },
  { 
    type: "healthStatus",
    value: [
      {
        id: "lungs",
        name: "Lungs",
        date: "26 Oct 2021",
        img: lungs,
        percentage:70,
        backgroundColor:"red"
      },
      {
        id: "teeth",
        name: "Teeth",
        date: "26 Oct 2021",
        img: teeth,
        percentage:70,
        backgroundColor:"blue"
      },
      {
        id: "bone",
        name: "Bone",
        date: "26 Oct 2021",
        img: bone,
        percentage:70,
        backgroundColor:"orange"
      },
    ],
  }
];