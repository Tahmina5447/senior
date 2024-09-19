import React from "react";

const AdminDashBoardElderliesTablesAlerts = ({ data }) => {
  return (
    <div className="flex items-center gap-2.5 relative">
        {   data.PROBLEM!=="00" &&
                    <div className=" py-1 px-3 bg-[#5973FF]/10 flex items-center gap-1 rounded-full">
                    <div className=" bg-[#5973FF] h-[15px] w-[15px] rounded-full border-[4px] border-white">
        
                    </div>
                    <h3 className=" text-[#5973FF] font-bold text-[13px]">{data.PROBLEM}</h3>
                </div>
        }
                {   data.WARNING!=="00" &&
                    <div className=" py-1 px-3 bg-Warning/10 flex items-center gap-1 rounded-full">
                    <div className=" bg-Warning h-[15px] w-[15px] rounded-full border-[4px] border-white">
        
                    </div>
                    <h3 className=" text-Warning font-bold text-[13px]">{data.WARNING}</h3>
                </div>
        }
                {   data.CRITICAL!=="00" &&
                    <div className=" py-1 px-3 bg-[#FF5959]/10 flex items-center gap-1 rounded-full">
                    <div className=" bg-[#FF5959] h-[15px] w-[15px] rounded-full border-[4px] border-white">
        
                    </div>
                    <h3 className=" text-[#FF5959] font-bold text-[13px]">{data.CRITICAL}</h3>
                </div>
        }
    </div>
  );
};

export default AdminDashBoardElderliesTablesAlerts;
