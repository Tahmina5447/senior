import { Progress, Space } from "antd";
import React from "react";

const TodayAlerts = () => {
  return (
    <div className=" bg-primary py-[30px] rounded-[20px] relative px-[22px] overflow-hidden">
      <img src="/images/round/round1.svg" alt="" className=' absolute top-0 left-[-20px] '/>
      <img src="/images/round/round2.svg" alt="" className=' absolute top-[0px] left-[-20px] '/>
       <img src="/images/round/round3.svg" alt="" className=' absolute top-0 left-[-20px] '/>

       <img src="/images/round/round4.svg" alt="" className=' absolute bottom-0 right-[-20px] '/>
      <img src="/images/round/round5.svg" alt="" className=' absolute bottom-[0px] right-[-20px] '/>
       <img src="/images/round/round6.svg" alt="" className=' absolute bottom-0 right-[-20px] '/>


      <div className=" flex md:items-center justify-between gap-3 flex-col md:flex-row">
        <div>
          <span className=" text-[18px] font-medium text-white/80">
            Today Alerts
          </span>
          <h2 className=" text-[40px] font-bold text-white">62</h2>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 md:gap-14 gap-5">
          <div className=" text-white flex items-center gap-2">
            <Space wrap>
              <Progress
                strokeColor={"white"}
                type="circle"
                percent={16}
                strokeWidth={10}
                size={60}
              />
            </Space>
            <div>
              <span className="text-[17px] font-normal text-white/80">
                Problem
              </span>
              <h2 className=" text-white font-bold text-3xl">12</h2>
            </div>
          </div>
          <div className=" text-white flex items-center gap-2">
            <Space wrap>
              <Progress
                strokeColor={"white"}
                type="circle"
                percent={74}
                strokeWidth={10}
                size={60}
              />
            </Space>
            <div>
              <span className="text-[17px] font-normal text-white/80">
                Warning
              </span>
              <h2 className=" text-white font-bold text-3xl">45</h2>
            </div>
          </div>
          <div className=" text-white flex items-center gap-2">
            <Space wrap>
              <Progress
                strokeColor={"white"}
                type="circle"
                percent={10}
                strokeWidth={10}
                size={60}
              />
            </Space>
            <div>
              <span className="text-[17px] font-normal text-white/80">
                Critical
              </span>
              <h2 className=" text-white font-bold text-3xl">5</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayAlerts;
