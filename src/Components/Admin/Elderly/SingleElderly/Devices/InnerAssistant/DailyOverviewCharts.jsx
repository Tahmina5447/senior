import { Icon } from "@iconify/react";
import { Progress } from "antd";
import React from "react";

const DailyOverviewCharts = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-2 lg:grid-cols-1 gap-y-6">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex justify-center text-primary ">
            <Icon
              className="absolute top-4 text-2xl"
              icon="grommet-icons:restroom-men"
            />
          </div>
          <Progress
            type="circle"
            showInfo={false}
            percent={20}
            size={55}
            strokeWidth={13}
            strokeColor={"#9A4BFF"}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#969BB3] text-base font-medium">
             Normal Activity
          </span>
          <span className="text-[#9A4BFF] text-[22px] font-semibold -mt-1">
            9hr 15m
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex justify-center  ">
              <img src="/images/icon/noun-sitting-2.svg" alt="" className="absolute top-4 text-2xl"/>
          </div>
          <Progress
            type="circle"
            showInfo={false}
            percent={60}
            size={55}
            strokeWidth={13}
            strokeColor={"#00D192"}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#969BB3] text-base font-medium">
            Sedentary
          </span>
          <span className="text-[#00D192] text-[22px] font-semibold -mt-1">
            13hr 45m
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex justify-center text-[#FF8A35] ">
              <img src="/images/icon/noun-night-run-1.svg" alt="" className="absolute top-4 text-2xl"/>
          </div>
          <Progress
            type="circle"
            showInfo={false}
            percent={5}
            size={55}
            strokeWidth={13}
            strokeColor={"#FF8A35"}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#969BB3] text-base font-medium">
            Wandering at Day
          </span>
          <span className="text-[#FF8A35] text-[22px] font-semibold -mt-1">
            20m
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex justify-center text-[#888888] ">
              <img src="/images/icon/noun-night-run-3.svg" alt="" className="absolute top-4 text-2xl"/>
          </div>
          <Progress
            type="circle"
            showInfo={false}
            percent={10}
            size={55}
            strokeWidth={13}
            strokeColor={"#888888"}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#969BB3] text-base font-medium">
            Wandering at Night
          </span>
          <span className="text-[#888888] text-[22px] font-semibold -mt-1">
            35m
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyOverviewCharts;
