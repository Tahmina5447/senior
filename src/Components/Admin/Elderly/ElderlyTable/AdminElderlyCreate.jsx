import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import CustomToast from '../../../../Shared/Tosat/CustomToast';
import CustomModal from '../../../../Shared/modal/CustomModal';
import CustomInput from '../../../../Shared/input/CustomInput';

const AdminElderlyCreate = ({setModalOpen,modalOPen}) => {

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
      setModalOpen(false)
      // Display the success toast
      setTimeout(()=>{
        toast.custom((t) => <CustomToast t={t} text="New Elderly has been created Successfully!" />);
      
      },900)
    } catch (error) {
      // Handle API call or other errors
      console.error('An error occurred:', error);
      toast.error('An error occurred while creating a new admin.');
    }
  };

  return (
    <CustomModal
    modalOPen={modalOPen}
    setModalOpen={setModalOpen}
    handleSubmit={handleSubmit(onSubmit)}
    width={590}
    title="Create An Elderly Profile"
    buttonText={"Create Elderly"}
    >

<div className=' flex items-center gap-4'>
          <CustomInput
            label={"First Name"}
            type={"text"}
            register={
              register("firstName", {
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
              register("lastName", {
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
          label={"Customer’s E-Mail "}
          type={"email"}
          register={
            register("email", {
              required: {
                value: true,
                message: "Please enter E-mail",
              },
            })
          }
          error={errors.email}
          placeholder={"Enter customer’s e-mail"}

        />


        <CustomInput
          label={"Customer’s Phone number "}
          type={"text"}
          register={
            register("phone", {
              required: {
                value: true,
                message: "Please enter E-mail",
              },
            })
          }
          error={errors.email}
          placeholder={"Enter customer’s phone number"}

        />

        <CustomInput
          label={"Customer’s Address "}
          type={"text"}
          register={
            register("adress", {
              required: {
                value: true,
                message: "Please enter E-mail",
              },
            })
          }
          error={errors.email}
          placeholder={"Enter customer’s Address"}

        />


  </CustomModal>
  )
}

export default AdminElderlyCreate