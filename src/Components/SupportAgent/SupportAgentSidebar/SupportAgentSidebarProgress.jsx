import React from "react";
import AdminRingProgress from "./AdminRingProgress";

function SupportAgentSidebarProgress() {


  return (
    <div className="mt-2 grid grid-cols-3 gap-4 flex-wrap">
      <div className="flex items-center flex-col gap-2 relative">
        <div className="flex items-center justify-center w-[60px] h-[60px]">
          <AdminRingProgress percent={20} color={["#ffffffb3", "#ffffff1a"]} />
        </div>
        <span className=" text-white/90 font-medium text-[13px] m-0 p-0">
          Problem
        </span>
        <span className=" absolute top-[15px] md:top-[17px] left-[25px] xl:left-[32px] text-white/90 font-[700] text-[19px] m-0 p-0">
          {12}
        </span>
      </div>
      <div className="flex items-center flex-col gap-2 relative">
        <div className="flex items-center justify-center w-[60px] h-[60px]">
          <AdminRingProgress percent={50} color={["#ffffffb3", "#ffffff1a"]} />
        </div>
        <span className=" text-white/90 font-medium text-[13px] m-0 p-0">
          Warning
        </span>
        <span className=" absolute top-[15px] md:top-[17px] left-[24px] xl:left-[30px] text-white/90 font-[700] text-[19px] m-0 p-0">
          45
        </span>
      </div>
      <div className="flex items-center flex-col gap-2 relative">
        <div className="flex items-center justify-center w-[60px] h-[60px]">
          <AdminRingProgress percent={10} color={["#ffffffb3", "#ffffff1a"]} />
        </div>
        <span className=" text-white/90 font-medium text-[13px] m-0 p-0">
            Critical
        </span>
        <span className=" absolute top-[15px] md:top-[17px] left-[24px] xl:left-[30px] text-white/90 font-[700] text-[19px] m-0 p-0">
          05
        </span>
      </div>
    </div>
  );
}

export default SupportAgentSidebarProgress;
