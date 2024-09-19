import React from "react";
import CustomModal from "../../../../../../Shared/modal/CustomModal";
import { useForm } from "react-hook-form";

const AddNotes = ({ modalOPen, setModalOpen,setNotes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    try {
      // Simulate an API call
      // Replace this with your actual API call
      // await apiCallFunction(data);
  

      const newNote= {
        id: Math.random(),
        time: "09:25 am",
        text: data?.description,
        user: "You",
      }
      setNotes((pre)=>[...pre,newNote])
      reset();
      setModalOpen(false);

      // Display the success toast
    } catch (error) {
      // Handle API call or other errors
      console.error("An error occurred:", error);
    }
  };

  return (
    <CustomModal
      modalOPen={modalOPen}
      setModalOpen={setModalOpen}
      handleSubmit={handleSubmit(onSubmit)}
      width={600}
      title="Create New Note"
      buttonText={"Create Note"}
    >
      <div className="flex flex-col items-start w-full mt-3">
        <label
          htmlFor="otp"
          className="mb-1 font-medium text-[13px] text-[#1B2559]"
        >
          Add Note
         </label>
        <textarea
          className="py-[18px] px-4 text-text-primary placeholder:text-[#A3AED0] h-[85px]  rounded-[16px] w-full text-base outline-none   border-[1px] focus:border-primary"
          name=""
          id=""
          {...register("description")}
        ></textarea>
        <label className="label">
          {errors?.description?.type === "required" && (
            <span className=" text-sm mt-1 text-red-500">{errors?.description?.message}</span>
          )}
        </label>
      </div>
    </CustomModal>
  );
};

export default AddNotes;
