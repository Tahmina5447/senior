import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Popover } from "antd";

const AlartsSort = ({ selected, setSelected, data, width, bg }) => {

  const [popupShow, setPopupShow] = useState(false);

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  // =====Action button Edit Reset Delete=====
  const content = (
    <div className=" w-[195px] p-2">
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
    <div className="relative">
      <Popover
        open={popupShow}
        onOpenChange={handleOpenChange}
        content={content}
        placement="bottomRight"
        trigger="click"
      >
        <button
          style={{ width: width, background: bg }}
          className={` bg-primary/10 w-[110px] text-primary font-medium cursor-pointer px-2 py-2 flex items-center rounded-[10px] justify-between ${
            !selected && " text-primary"
          } ${bg ? " bg-text-primary/10" : ""}`}
        >
          <span className="flex items-center gap-[1px]">
            <Icon icon="basil:sort-outline" className=" text-lg" />
            {selected
              ? selected?.length > 25
                ? selected?.substring(0, 25) + "..."
                : selected
              : data[0]}
          </span>
          <Icon
            icon="basil:caret-down-solid"
            className={`${popupShow && "rotate-180"} text-[20px]`}
          />
        </button>
      </Popover>
    </div>
  );
};

export default AlartsSort;
