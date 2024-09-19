import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Popover } from "antd";

const CustomSelect = ({ selected, setSelected, data, className, width}) => {

  const [popupShow, setPopupShow] = useState(false);

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  const content = (
    <div className={`p-2 max-h-[150px] overflow-y-scroll ${width}`}>
      {data.map((item, index) => (
        <button
          type="button"
          disabled={item === "Sort"}
          key={index}
          onClick={() => {
            setPopupShow(false);
            setSelected(item)
          }}
          className={`text-sm w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#252F67] flex  py-3 px-5 ${item === "Sort" ? " cursor-not-allowed" : ""}`}
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative w-full">
      <Popover
        open={popupShow}
        onOpenChange={handleOpenChange}
        content={content}
        placement="bottomRight"
        trigger="click"
      >
        <button
          type="button"
          className={`w-full py-[18px] px-4  placeholder:text-[#A3AED0]  flex items-center justify-between ${!selected && " text-primary"
            } ${className}`}
        >

          <div className="flex items-center gap-[1px]">
            {selected
              ? selected?.length > 25
                ? selected?.substring(0, 25) + "..."
                : selected
              : data[0]}
          </div>
          <Icon icon="basil:caret-down-solid" className={`${popupShow && "rotate-180"} text-[20px]`} />
        </button>
      </Popover>
    </div>
  );
};

export default CustomSelect;