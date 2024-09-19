import React, { useState } from "react";
import CustomModal from "../../../../../../Shared/modal/CustomModal";
import { Slider } from "antd";

const SettingsModal = ({ modalOPen, setModalOpen }) => {

    const [Buffer,setBuffer] = useState(20)
    const [Working,setWorking] = useState(54)
    const [Height,setHeight] = useState(24)


  const handleSubmit = () => {
    setModalOpen(false);
  };

  const onChange1 = (value) => {
    setBuffer(value)
  };


  const onChange2 = (value) => {
    setWorking(value)
  };

  const onChange3 = (value) => {
    setHeight(value)
  };


  return (
    <CustomModal
      modalOPen={modalOPen}
      setModalOpen={setModalOpen}
      handleSubmit={handleSubmit}
      width={590}
      title="Settings"
      buttonText={"Save Changes"}
    >
      <div className=" flex items-center flex-col gap-4 mt-10">
        <div className="w-full">
          <label
            htmlFor=""
            className=" text-[13px] font-medium text-text-primary"
          >
            Buffer Times
          </label>
          <div className=" flex items-center justify-between gap-4">
            <Slider
              defaultValue={Buffer}
              className="custom-slider w-full"
              onChange={onChange1}
              styles={{
                track: {
                  background: 'transparent',
                },
                tracks: {
                  background: `#252F67`,
                  borderRadius:"10px",
                },
              }}
            />
            <h2 className=" text-xl font-medium text-primary w-[100px]">
              1m {Buffer}s
            </h2>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor=""
            className=" text-[13px] font-medium text-text-primary"
          >
            Working Distance
          </label>
          <div className=" flex items-center justify-between gap-4">
            <Slider
              defaultValue={Working}
              className="custom-slider w-full"
              onChange={onChange2}
              styles={{
                track: {
                  background: 'transparent',
                },
                tracks: {
                  background: `#252F67`,
                  borderRadius:"10px",
                },
              }}
            />
            <h2 className=" text-xl font-medium text-primary w-[100px]">
              {(Working/10).toFixed(1)} M
            </h2>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor=""
            className=" text-[13px] font-medium text-text-primary"
          >
            Installation Height
          </label>
          <div className=" flex items-center justify-between gap-4">
            <Slider
              defaultValue={Height}
              className="custom-slider w-full"
              onChange={onChange3}
              styles={{
                track: {
                  background: 'transparent',
                },
                tracks: {
                  background: `#252F67`,
                  borderRadius:"10px",
                },
                handle:{
                    background: `#252F67`,
                    width:"10px"
                }
              }}

            />
            <h2 className=" text-xl font-medium text-primary w-[100px]">
            {(Height/10).toFixed(1)} M
            </h2>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default SettingsModal;
