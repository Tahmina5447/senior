import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomToast from "../Tosat/CustomToast";
import CustomModal from "../modal/CustomModal";
import CustomInput from "../input/CustomInput";
import CustomSelect from "../sort/CustomSelect";

const EditTags = ({ item, setModalOpen, modalOPen }) => {
  const [selected, setSelected] = useState("");
  const data = ["Select An Existing Tag", "Osteoporosis","Diabetes Mellitus","High blood sugar"];


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: item.title,
    },
  });

  const onSubmit = (data) => {
    try {
      // Simulate an API call
      // Replace this with your actual API call
      // await apiCallFunction(data);
      // Display the success toast
      setModalOpen(false);
      toast.custom((t) => (
        <CustomToast t={t} text="Changes has been successfully made" />
      ));
    } catch (error) {
      // Handle API call or other errors
      console.error("An error occurred:", error);
      toast.error("An error occurred while creating a new admin.");
    }
  };
  return (
    <CustomModal
      modalOPen={modalOPen}
      setModalOpen={setModalOpen}
      handleSubmit={handleSubmit(onSubmit)}
      width={590}
      title="Edit Tag "
      buttonText={"Save Changes"}
    >
      <CustomInput
        label={"Rename Tag"}
        type={"text"}
        register={register("firstName", {
          required: {
            value: true,
            message: "Please enter first name",
          },
        })}
        error={errors.firstName}
        placeholder={"Enter Rename Tag"}
      />

      <div className="flex flex-col items-start w-full mt-5">
        <label
          htmlFor="otp"
          className="mb-1 font-medium text-[13px] text-[#1B2559]"
        >
          Move Tag
        </label>
        <CustomSelect  width={"max-w-[520px]"} className={" rounded-[16px] w-full text-base outline-none text-text-primary h-[50px] border-[1px] focus:border-primary "} selected={selected} setSelected={setSelected} data={data} />
      </div>
    </CustomModal>
  );
};

export default EditTags;
