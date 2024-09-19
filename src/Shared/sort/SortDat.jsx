import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Popover } from "antd";

const SortDat = ({selected,setSelected,data,width,className}) => {

  const [popupShow, setPopupShow] = useState(false);

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  const content = (
    <div style={{width:width}} className=" w-[135px] p-2 max-h-[150px] overflow-y-scroll">
      {data.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setPopupShow(false);
            setSelected(item)
          }}
          className=" text-sm w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#252F67] flex  py-3 px-5"
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative h-[37px]">
      <Popover
        open={popupShow}
        onOpenChange={handleOpenChange}
        content={content}
        placement="bottomRight"
        trigger="click"
      >
      <button
        style={{width:width}}
        className={` w-[120px] text-[13px] font-medium cursor-pointer px-2 py-2 flex items-center rounded-[10px] justify-between ${className}`}
      >
        <div className="flex items-center gap-[2px]">
         <Icon icon="basil:calendar-outline" className='text-[18px] mt-[-1px]' />
            {selected
                ? selected?.length > 25
                    ? selected?.substring(0, 25) + "..."
                    : selected
                : data[0]}
        </div>
        <Icon icon="basil:caret-down-solid" className={`${popupShow && "rotate-180"} text-[20px]`}/>
      </button>
      </Popover>
    </div>
  );
};

export default SortDat;