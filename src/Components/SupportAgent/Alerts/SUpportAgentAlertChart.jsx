import React from "react";
import { Line } from "@ant-design/plots";
import { adminAlertsData } from "../../../assets/admin/data";


const SUpportAgentAlertChart = () => {
  const config = {
    data: adminAlertsData,
    xField: "day",
    yField: "value",
    seriesField: "name",
    color: ["#F4664A", "#FAB515", "#5973FF"],
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: "l(90) 1:#D9D9D9 0:#EBEBEB",
            lineWidth: 1,
            lineDash: [4, 5],
            strokeOpacity: 1,
            cursor: "pointer",
          },
        },
      },
    },
    yAxis: {
      label: {
        formatter: (v) => `${v}`,
      },
      grid: {
        line: {
          style: {
            stroke: "#D9D9D9",
            lineWidth: 0,
            cursor: "pointer",
          },
        },
      },
    },
    legend: false,
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
    tooltip: {
      customContent: (title, items) => { 
        const dataPoint = adminAlertsData.find((point) => point.day === title);
        if (dataPoint) {
          return (
            <div className=" overflow-hidden bg-text-primary rounded-[10px] w-[140px] ">
                <div className=" bg-[#212D67] py-3 text-[13px] font-medium text-[#D1D8FA] px-3">
                    {dataPoint.date}
                </div>

                <div className="flex flex-col gap-3 px-3 py-3">
                    <div className="flex items-center justify-between">
                        <div className=" flex items-center gap-2">
                          <div className="w-[4px] h-[7px] rounded-full bg-[#5973FF]"></div>
                          <h2 className="text-[13px] font-normal text-white">Problem</h2>
                        </div>
                        <h2 className="text-[11px] font-bold text-white">{items[2].data.value}</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className=" flex items-center gap-2">
                          <div className="w-[4px] h-[7px] rounded-full bg-Warning"></div>
                          <h2 className="text-[13px] font-normal text-white">Warning</h2>
                        </div>
                        <h2 className="text-[11px] font-bold text-white">{items[1].data.value}</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className=" flex items-center gap-2">
                          <div className="w-[4px] h-[7px] rounded-full bg-[#FF5959]"></div>
                          <h2 className="text-[13px] font-normal text-white">Critical</h2>
                        </div>
                        <h2 className="text-[11px] font-bold text-white">{items[0].data.value}</h2>
                    </div>
                </div>
            </div>
          )
          ;
        } else {
          return "";
        }
      },
    },
  };

  return (
    <div className="h-[250px] w-full mt-6">
      <Line {...config} />
    </div>
  );
};

export default SUpportAgentAlertChart;
