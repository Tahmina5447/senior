import { Icon } from "@iconify/react";
import React from "react";

const DailyOverviewBar = () => {
  const data = [
    {
      type: "Normal Activity",
      value: "7%",
    },
    {
      type: "Sedentary",
      value: "26%",
    },
    {
      type: "Wandering at Day",
      value: "3%",
    },
    {
      type: "Sedentary",
      value: "26%",
    },
    {
      type: "Wandering at Night",
      value: "5%",
    },
    {
      type: "Normal Activity",
      value: "33%",
    },
  ];

  return (
    <div>
      <div className="flex items-center w-full gap-1">
        {data.map((item, index) => (
          <div
            key={index}
            style={{ width: item.value }}
            className={`h-[83px] rounded-sm  relative group
                  ${item.type === "Normal Activity" && "bg-[#9A4BFF]"}
                  ${item.type === "Sedentary" && "bg-[#00D192]"}
                  ${item.type === "Wandering at Day" && "bg-[#FF8A35]"}
                  ${item.type === "Wandering at Night" && "bg-[#888888]"}
              `}
          >
            <div className=' bg-text-primary rounded-[10px] z-20 p-2.5  text-white absolute top-[-10px] left-1 group-hover:flex items-center gap-2 duration-300 hidden '>
              <div className={`h-2 w-2 rounded-full 
                                ${item.type === 'Normal Activity' && 'bg-[#9A4BFF]'}
                                ${item.type === 'Sedentary' && 'bg-Average'}
                                ${item.type === 'Wandering at Day' && 'bg-[#FF8A35]'}
                                ${item.type === 'Wandering at Night' && 'bg-[#888888]'}
                                `}></div>
              <p className='text-white text-[13px]'>{item.type}</p>

            </div>
          </div>
        ))}
      </div>

      <div className=" mt-2">
        <div className=" bg-[#000000]/10 w-full h-[1px]"></div>
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-1 mt-2 relative">
            <Icon icon="lucide:sun" className=" text-[#969BB3] text-[16px]" />
            <h2 className=" text-[13px] font-medium text-[#49517A]">06:00</h2>
            <div className=" absolute top-[-9px] left-0 bg-[#000000]/10 w-[1px] h-[15px]"></div>
          </div>
          <div className=" flex items-center gap-1 mt-2 relative">
            <Icon
              icon="mdi:weather-night"
              className=" text-[#969BB3] text-[16px]"
            />
            <h2 className=" text-[13px] font-medium text-[#49517A]">18:00</h2>
            <div className=" absolute top-[-9px] left-[50%] bg-[#000000]/10 w-[1px] h-[15px]"></div>
          </div>
          <div className=" flex items-center gap-1 mt-2 relative">
            <Icon icon="lucide:sun" className=" text-[#969BB3] text-[16px]" />
            <h2 className=" text-[13px] font-medium text-[#49517A]">06:00</h2>
            <div className=" absolute top-[-9px] right-0 bg-[#000000]/10 w-[1px] h-[15px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOverviewBar;
