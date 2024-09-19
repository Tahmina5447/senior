import React, { useEffect, useState } from "react";
import InnerAssistantAnalysisCharts from "./InnerAssistantAnalysisCharts";
import { InnerAssistantAnalysisChartsDataWeekly, InnerAssistantAnalysisChartsDataYearly } from "../../../../../../assets/supportAgentData/AdminDashBoardChart";
import InnerAssistantAnalysisAvg from "./InnerAssistantAnalysisAvg";
import { Icon } from "@iconify/react";

const InnerAssistantAnalysis = () => {
  const [chartData,setChartData] = useState(InnerAssistantAnalysisChartsDataWeekly) 
  const [active, setActive] = useState(1);
  const tabData = [
    {
      id: 1,
      title: "Weekly",
    },
    {
      id: 2,
      title: "Monthly",
    },
  ];

  useEffect(()=>{
    if(active===1){
        setChartData(InnerAssistantAnalysisChartsDataWeekly)
    }
    if(active===2){
        setChartData(InnerAssistantAnalysisChartsDataYearly)
    }
  },[active])

  return (
    <div className=" border-l h-[700px]">
      <div className="py-[18px] px-6 border-b flex items-center justify-between">
        <h2 className=" text-2xl font-semibold text-text-primary">
            Analysis
        </h2>
        <div className=" w-[160px] bg-primary/20 rounded-[9px] p-1">
          {tabData.map((tab) => (
            <button
              onClick={() => setActive(tab.id)}
              key={tab.id}
              className={` w-[75px] py-2 px-5 font-normal text-[12px] rounded-[9px] ${
                tab.id === active
                  ? " bg-text-primary text-white"
                  : "text-primary"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="py-[18px] px-6 ">
        <h2 className=" text-lg font-semibold text-text-primary flex items-center gap-1">
          <Icon
              className=" text-2xl text-primary"
              icon="ri:walk-fill"
            />
          Activity
        </h2>

        <div className="py-5">
            <InnerAssistantAnalysisCharts data={chartData}/>
        </div>

        <div className="py-5">
            <InnerAssistantAnalysisAvg/>
        </div>
      </div>
    </div>
  );
};

export default InnerAssistantAnalysis;
