import React from "react";
import CustomModal from "../../../Shared/modal/CustomModal";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomToast from "../../../Shared/Tosat/CustomToast";
import CustomInput from "../../../Shared/input/CustomInput";

const CreateSuspendModal = ({ modalOPen, setModalOpen }) => {
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

      reset();
      setModalOpen(false);

      // Display the success toast
      setTimeout(()=>{
        toast.custom((t) => (
            <CustomToast t={t} text="New admin has been created Successfully!" />
          ));
      },900)

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
      title="Set New Admin"
      buttonText={"Set Admin"}
    >
        <div className='flex items-center gap-4'>
            <CustomInput
              label={"First Name"}
              type={"text"}
              register={
                  register("firstName",{
                  required: {
                      value: true,
                      message: "Please enter first name",
                      },
                  })
              }
              error={errors.firstName}
              placeholder={"Enter First Name"}

            />

            <CustomInput 
              label={"Last Name"}
              type={"text"}
              register={
                  register("lastName",{
                  required: {
                      value: true,
                      message: "Please enter last name",
                      },
                  })
              }
              error={errors.lastName}
              placeholder={"Enter Last Name"}

            />
            </div>

            <CustomInput 
              label={"Business E-mail"}
              type={"email"}
              register={
                  register("email",{
                  required: {
                      value: true,
                      message: "Please enter E-mail",
                      },
                  })
              }
              error={errors.email}
              placeholder={"Enter Business E-mail"}

            />

          <CustomInput 
              label={"Contact Person"}
              type={"text"}
              register={
                  register("contactPerson",
                  {
                    required: {
                        value: true,
                        message: "Please enter Contact Person",
                        },
                    })
              }
              error={errors.contactPerson}
              placeholder={"Enter Contact Person"}

            />

            <CustomInput 
              label={"Contact Number"}
              type={"text"}
              register={
                  register("contactNumber",
                  {
                    required: {
                        value: true,
                        message: "Please enter Contact Number",
                        },
                    })
              }
              error={errors.contactNumber}
              placeholder={"Enter Contact Number"}

            />
    </CustomModal>
  );
};

export default CreateSuspendModal;
