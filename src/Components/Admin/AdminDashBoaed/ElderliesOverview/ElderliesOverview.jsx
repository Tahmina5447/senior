import React, { useState } from "react";
import ElderliesOverviewPieCharts from "./ElderliesOverviewPieCharts";
import { Icon } from "@iconify/react";
import SortDat from "../../../../Shared/sort/SortDat";
import ElderlyCharts from "./ElderlyCharts";
import { elderyOverview } from "../../../../assets/admin/data";

const ElderliesOverview = () => {
  const [selected, setSelected] = useState();
  const dataDay = ["Last Week", "Last Year"];

  const data = [
    {
      type: "Male",
      value: 470,
    },
    {
      type: "Female",
      value: 210,
    },
  ];

  return (
    <div className="h-full">
      <h2 className=" font-bold text-[24px] text-white">Elderlies Overview</h2>
      <div className=" flex flex-col justify-between h-full">
        <div className=" w-full grid grid-cols-1">
          <div id="add_zoom" className=" flex items-center justify-center">
            <ElderliesOverviewPieCharts data={data} />
          </div>
          <div className=" flex items-center justify-center mt-10">
            <div className=" w-[252px] flex items-center justify-between ">
              <div>
                <p className=" text-base font-medium text-white/70">Male</p>
                <div className="flex items-center gap-2 m-0 p-0">
                  <h2 className=" text-[34px] m-0 font-bold text-white">470</h2>
                  <span className="flex items-center mt-3 text-[13px] font-medium text-white/70">
                    <Icon icon="ph:arrow-up-bold" />
                    13%
                  </span>
                </div>
              </div>
              <div>
                <p className=" text-base font-medium text-white/70">Female</p>
                <div className="flex items-center gap-2 m-0 p-0">
                  <h2 className=" text-[34px] m-0 font-bold text-white">210</h2>
                  <span className="flex items-center mt-3 text-[13px] font-medium text-white/70">
                    <Icon icon="ph:arrow-up-bold" />
                    09%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" w-full flex items-center justify-between">
            <div>
              <h2 className=" text-2xl font-bold text-white">
                102 <span className="text-[13px] font-medium">Elderly</span>
              </h2>
              <p className=" text-[13px] font-medium text-white/70 mt-[-5px]">
                From 12 Oct - 17 Oct
              </p>
            </div>
            <SortDat
              className=" text-white bg-white/10"
              selected={selected}
              setSelected={setSelected}
              data={dataDay}
            />
          </div>

          <div id="add_zoom" className=" grid grid-cols-1 mt-16 mb-9">
            <ElderlyCharts data={elderyOverview} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderliesOverview;
