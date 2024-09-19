import React, { useEffect, useState } from "react";
import SortDat from "../../../Shared/sort/SortDat";
import AlertsOverviewCharts from "./AlertsOverviewCharts";
import CustomBar from "./CustomBar";
import { AlertsOverviewMonth, AlertsOverviewWeek } from "../../../assets/supportAgentData/AdminDashBoardChart";

const AlertsOverview = () => {
  const [selected, setSelected] = useState("Last Week");
  const [chartData, setChartData] = useState(AlertsOverviewWeek)
  const data = ["Last Week", "Last Month"];

  const alertsData = [
    {
      type: "Problem",
      value: "6,458",
    },
    {
      type: "Warning",
      value: "3,102",
    },
    {
      type: "Critical",
      value: "1,003",
    },
  ];


  useEffect(() => {
    if (selected === "Last Week") {
      setChartData(AlertsOverviewWeek)
    }
    if (selected === "Last Month") {
      setChartData(AlertsOverviewMonth)
    }
  }, [selected])

  return (
    <div  >
      <div className=" flex md:items-center md:flex-row flex-col gap-2 justify-between">
        <h2 className=" text-2xl font-bold text-text-primary">
          Alerts Overview
        </h2>
        <SortDat className={" bg-primary/10 text-primary"} selected={selected} setSelected={setSelected} data={data} />
      </div>
      <div id='add_zoom' className=" flex items-start lg:flex-row gap-5 flex-col justify-between mt-8">
        <div className="lg:w-[30%] w-full ml-5">
          <div>
            <h3 className=" text-[13px] font-medium text-text-secondary">
              Total Alert
            </h3>
            <h2 className=" text-[22px] font-bold text-text-primary">10,563</h2>
            <CustomBar />
          </div>
          <div className="mt-9 flex flex-col gap-5">
            {alertsData.map((alert, index) => (
              <div key={index} className=" flex items-start gap-2">
                {alert.type === "Problem" && (
                  <div className={` w-2 h-2 rounded-full bg-[#5C76FF]`}></div>
                )}
                {alert.type === "Warning" && (
                  <div className={` w-2 h-2 rounded-full bg-[#F3A713]`}></div>
                )}
                {alert.type === "Critical" && (
                  <div className={` w-2 h-2 rounded-full bg-[#F83333]`}></div>
                )}
                <div className="mt-[-4px]">
                  <h3 className="text-[12px] font-medium text-[#A3AED0]">{alert.type}</h3>
                  <h3 className="text-[18px] font-bold text-dark-black">{alert.value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[70%] w-full">
          <AlertsOverviewCharts data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default AlertsOverview;
