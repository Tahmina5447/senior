import React, { useContext, useState } from "react";
import SectionWrapper from "../../../../../../Shared/SectionWrapper";
import { SidebarContext } from "../../../../../../Context/CustomContext";
import { Icon } from "@iconify/react";
import InnerAssistantAnalysis from "./InnerAssistantAnalysis";
import InnerAssistantDailyOverview from "./InnerAssistantDailyOverview";
import SettingsModal from "./SettingsModal";

const InnerAssistant = () => {
  const { setDeviceInner } = useContext(SidebarContext);
  const [show,setShow] = useState(false)


  return (
    <div className="mt-[30px] mb-12">
      <SectionWrapper>
        <div className="border-b flex items-center justify-between">
          <div className="flex items-center px-[22px] pt-6 pb-[30px] gap-3 ">
            <button
              onClick={() => setDeviceInner("")}
              className="border flex items-center justify-center rounded-full p-2 text-xl text-text-primary/60"
            >
              <Icon icon="fe:arrow-left" />
            </button>
            <h2 className="text-[#2B3674] font-bold text-2xl">
              Home Care Assistant
            </h2>
          </div>
          <button onClick={()=>setShow(true)} className=" text-primary mr-6 hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-1 bg-primary/10 text-[13px] font-medium h-[39px] rounded-[10px] px-4">
            <Icon icon="tabler:settings" className=" text-[18px]" />
            Settings
          </button>
        </div>

        <div className="flex items-start flex-col lg:flex-row justify-between">
            <div className="lg:w-[35%] w-full">
                <InnerAssistantDailyOverview/>
            </div>
            <div className="lg:w-[65%] w-full">
                <InnerAssistantAnalysis/>
            </div>
        </div>
      </SectionWrapper>

      <SettingsModal modalOPen={show} setModalOpen={setShow}/>
    </div>
  );
};

export default InnerAssistant;
