import React, { useState } from "react";
import SectionWrapper from "../../../../../Shared/SectionWrapper";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import CustomErrorToast from "../../../../../Shared/Tosat/CustomErrorToast";
import CustomSelect from "../../../../../Shared/sort/CustomSelect";

const Tags = () => {
  const [tags, setTags] = useState("");
  const [selected, setSelected] = useState("Add as Elderly Tag");
  const dataSelete = ["Add as Elderly Tag", "Add ad System Tags"];
  const [data, setData] = useState([
    {
      id: 1,
      title: "High blood sugar",
      category: "elderly",
    },
    {
      id: 2,
      title: "low blood pressure",
      category: "elderly",
    },
    {
      id: 3,
      title: "UWB/BLE tracking systems",
      category: "system",
    },
    {
      id: 4,
      title: "Real-time location systems",
      category: "system",
    },
    {
      id: 5,
      title: "RFID reader",
      category: "system",
    },
  ]);


  const addTags = (e) => {
    e.preventDefault()
    if (!tags) {
      toast.custom((t) => (
        <CustomErrorToast t={t} text={"Please add a tags"} title={"Error"} />
      ));
    } else {
      setData((pre) => [...pre, { id: Math.random(), title: tags,category:selected==="Add as Elderly Tag" ? "elderly" : "system" }]);
      setTags("");
    }
  };

  const removeTags = (id) => {
    const finalTags = data.filter((item) => item.id !== id);
    setData(finalTags);
  };

  return (
    <SectionWrapper>
      <div className=" p-5">
        <div className=" flex items-center justify-between">
          <h2 className=" text-2xl font-bold text-dark-black">Tags</h2>
          <div className="">
          <CustomSelect width={"max-w-[520px]"} className={"w-full py-[8px] px-3 outline-none border-none text-primary bg-primary/10 rounded-[10px]"} selected={selected} setSelected={setSelected} data={dataSelete} />
          </div>
        </div>

        <div className=" py-6">
          <form action="" onSubmit={addTags}>
            <input
              className="py-[18px] text-sm px-4 text-text-primary placeholder:text-[#A3AED0] h-[40px]  rounded-[16px] w-full outline-none   border-[1px] focus:border-primary"
              type={"text"}
              placeholder={"Type And Press ‘Enter’ To Add "}
              id="otp"
              value={tags}
              onChange={(e)=>setTags(e.target.value)}
            />
          </form>
        </div>
      {/* ======Elderly category tags======= */}
        <div className="max-h-[120px] overflow-y-auto">
          <div className=" flex items-center gap-2">
            <div className=" bg-[#4683C4]/20 w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <div className=" bg-[#4683C4] w-[15px] h-[15px] rounded-full border-[3px] border-white"></div>
            </div>
            <h2 className=" text-[13px] font-bold text-[#4683C4]">
              Elderly Tags
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {data.filter(it=>it.category==="elderly").map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#4683C4] rounded-full h-[37px] px-3"
                >
                  <span className="text-[13px] font-bold text-white">
                    {item.title}
                  </span>
                  <button onClick={() => removeTags(item.id)}>
                    <Icon icon="mi:close" className="text-[17px] text-white" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {/* ======system category tags======= */}
        <div className=" mt-5 max-h-[120px] overflow-y-auto">
          <div className=" flex items-center gap-2">
            <div className=" bg-[#662466]/20 w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <div className=" bg-[#662466] w-[15px] h-[15px] rounded-full border-[3px] border-white"></div>
            </div>
            <h2 className=" text-[13px] font-bold text-[#662466]">
            System Tags
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {data.filter(it=>it.category==="system").map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#662466] rounded-full h-[37px] px-3"
                >
                  <span className="text-[13px] font-bold text-white">
                    {item.title}
                  </span>
                  <button onClick={() => removeTags(item.id)}>
                    <Icon icon="mi:close" className="text-[17px] text-white" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Tags;
