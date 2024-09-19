import { Icon } from "@iconify/react";
import React from "react";
import CustomButton from "../../../../../Shared/button/CustomButton";

const OverviewProfile = () => {
  return (
    <div>
      <div className=" bg-primary w-full h-[205px] rounded-[18px] p-5 relative overflow-hidden">
        <div className=" top-0 left-0 w-full h-full absolute">
          <img src="/images/Union.svg" alt="" className=" w-full h-full" />
        </div>
        <div className=" flex flex-col justify-between h-full">
          <div className="flex items-center text-white">
            <Icon
              className="text-5xl opacity-75 mr-3"
              icon="typcn:weather-partly-sunny"
            />
            <div className="relative">
              <span className="text-[33px] font-bold mr-1">34</span>
              <span className="absolute text-[19px] font-medium">
                <sup className=" text-[13px]">o</sup>c
              </span>
              <p className="text-sm mt-[-8px]">Temperature</p>
            </div>
          </div>

          <div className=" flex items-center justify-end text-white gap-5">
            <div className=" ">
              <div className=" flex items-center justify-between text-white gap-3">
                <Icon
                  className="text-2xl opacity-75"
                  icon="ri:heart-pulse-fill"
                />
                <p className="text-sm font-normal text-white/80">Heart Rate</p>
              </div>
              <div className="relative">
                <span className="text-3xl font-bold mr-1">72</span>
                <span className="text-xs font-medium absolute">bpm</span>
              </div>
            </div>
            <div className="">
              <div className=" flex items-center justify-between text-white gap-3">
                <Icon
                  className="text-2xl opacity-75"
                  icon="fontisto:blood-drop"
                />
                <p className="text-sm font-normal text-white/80">
                  Blood pressure
                </p>
              </div>
              <div className="relative">
                <span className="text-3xl font-bold mr-1">120/80</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative top-[-60px] left-0">
        <div className=" w-[90px] h-[90px] rounded-full bg-primary border-[6px] flex items-center justify-center border-white">
          <h2 className=" text-3xl font-medium text-white">KD</h2>
        </div>

        <div className=" flex items-center justify-between mt-4">
          <div>
            <h3 className=" text-dark-black/60 font-medium text-base">
              #453453
            </h3>
            <h2 className=" text-dark-black font-medium text-[23px]">
              Kari Daughetry
            </h2>
          </div>
          <div className=" flex items-center gap-3">
            <CustomButton className={" h-[33px]"}>
              <Icon
                icon="charm:phone-call"
                className=" text-xl text-white mr-1"
              />{" "}
              Call To
              <Icon
                icon="basil:caret-down-solid"
                className={` text-[20px] ml-3`}
              />
            </CustomButton>
            <CustomButton className={" h-[33px] bg-[#F4EBFF]"}>
              <Icon
                icon="material-symbols:history"
                className=" text-2xl text-primary "
              />
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="mt-[-30px]">
        <div className=" flex items-center gap-1">
          <Icon icon="ep:location" className=" text-base  text-dark-black" />
          <h2 className=" text-base text-dark-black font-medium">
            Woodside StreetTecumseh, SallyCape
          </h2>
        </div>
        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.771103663534!2d76.99275607711007!3d28.886888929272477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2sMandaura%2C%20Haryana%20131103!5e0!3m2!1sen!2sin!4v1669909087902!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="border-0 w-100"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="user map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OverviewProfile;
