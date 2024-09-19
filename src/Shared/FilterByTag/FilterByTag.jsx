import { Icon } from "@iconify/react";
import { Popover } from "antd";
import React, { useState } from "react";
import CustomerTags from "./CustomerTags";
import ElderlySystemTags from "./ElderlySystemTags";

const FilterByTag = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState("");
  const tabsData = [
    {
      id: 1,
      value: "Customer Tags",
    },
    {
      id: 2,
      value: "System Tags",
    },
  ];

  const tagData = [
    {
      id: 1,
      title: "High blood sugar",
      value: "12",
    },
    {
      id: 2,
      title: "Cancer",
      value: "06",
    },
    {
      id: 3,
      title: "Diabetes Mellitus",
      value: "22",
    },
    {
      id: 4,
      title: "Osteoporosis",
      value: "04",
    },
    {
      id: 5,
      title: "Hypertension",
      value: "32",
    },
  ];

  const SystemTagData =[
    {
        id:1,
        title:"No pir sensor",
        value:"12",
    },
    {
        id:2,
        title:"Need mesh unit",
        value:"06",
    },
    {
        id:3,
        title:"Low number of switches",
        value:"22",
    },
]

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  // =====Action button Edit Reset Delete=====
  const content = (
    <div  className=" m-0 p-0 rounded-md overflow-hidden  w-[300px] bg-white shadow-shadowOne">
      <div className="flex items-center justify-between bg-[#E6F1FE] rounded-lg">
        {tabsData.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(item.id)}
            className={`py-3 px-3 text-[11px] font-[500] w-full transition-all duration-300 ${
              item.id === active
                ? "bg-primary text-white"
                : " bg-transparent text-secondary"
            }`}
          >
            {item.value}
          </button>
        ))}
      </div>
      <div className=" w-full px-4 pt-3">
        <div className=" w-full relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Search Tags"}
            className="text-[13px] font-medium outline-none w-full h-[37px]  py-[9px] px-3 pr-10 flex items-center justify-between border-[1px] focus:border-primary rounded-[10px]"
          />
          <Icon
            icon="material-symbols:search"
            className=" text-2xl text-[#B8BBCC] absolute top-[8px] right-[7px]"
          />
        </div>
      </div>

      <div className=" p-4">
            {
              active === 1 ? (
                <div className="flex flex-col gap-3 mt-3">
                {tagData.map((item, i) => (
                    <CustomerTags key={i} item={item}/>
                ))}
              </div>
              ) : (
                <div className="flex flex-col gap-3 mt-3">
                {SystemTagData.map((item, i) => (
                    <ElderlySystemTags key={i} item={item}/>
                ))}
              </div>
              )
            }
          </div>
    </div>
  );
  return (
    <div id="filter_tag">
      <Popover
        open={popupShow}
        onOpenChange={handleOpenChange}
        content={content}
        placement="bottomRight"
        trigger="click"
        id="filter_tag"
      >
        <button
        id="filter_tag"
          className={` bg-primary/10 w-[144px] h-[40px] text-primary font-medium cursor-pointer px-2 py-2 flex items-center rounded-[10px] justify-between `}
        >
          <span className="flex items-center gap-[1px] text-[13px] font-medium">
            <Icon icon="mingcute:filter-line" className=" text-lg" /> Filter By
            Tag
          </span>
          <Icon icon="basil:caret-down-solid" className={` text-[20px]`} />
        </button>
      </Popover>
    </div>
  );
};

export default FilterByTag;
