import { Icon } from "@iconify/react";
import { Modal } from "antd";
import React from "react";
import CustomButton from "../button/CustomButton";

const CustomModal = ({
  modalOPen,
  setModalOpen,
  width,
  className,
  title,
  children,
  handleSubmit=(e)=>{e.preventDefault()},
  buttonText,
}) => {

  const modalStyle = {
    padding: 0, // Set padding to 0 for the Modal component
  };
  return (
    <div>
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={width}
        className={` ${className}`}
        style={modalStyle}
      >
        <div className="z-[50000000]">
          <div className=" flex items-center justify-between px-9 pt-6 pb-5">
            <h2 className=" text-[24px] font-[700] text-text-primary">
              {title}
            </h2>
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div className="w-full relative top-0 left-0 mb-3  h-[2px] bg-[#E8E9EE] mr-[-520px]">

          </div>
          <form onSubmit={handleSubmit} className="w-full mt-[0px] px-9 pb-9">
            <div className="">{children}</div>
            <div className="mt-[38px] flex items-center gap-5">
              <CustomButton onClick={()=>setModalOpen(false)} className={" w-full"}>{buttonText}</CustomButton>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="font-[500] text-[14px] h-[40px] w-full hover:border-primary hover:text-primary duration-300 px-5 rounded-[10px] bg-transparent text-[#666D90] border border-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
