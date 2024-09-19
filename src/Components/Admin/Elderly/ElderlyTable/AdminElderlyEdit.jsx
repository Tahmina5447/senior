import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import CustomToast from '../../../../Shared/Tosat/CustomToast';
import CustomModal from '../../../../Shared/modal/CustomModal';
import CustomInput from '../../../../Shared/input/CustomInput';

const AdminElderlyEdit = ({item,setModalOpen,modalOPen}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues:{
          firstName:item.firstName,
          lastName:item.lastName,
          email:item.email,
          phone:item.contactNumber,
        }
      });
    
      const onSubmit = (data) => {
        try {
          // Simulate an API call
          // Replace this with your actual API call
          // await apiCallFunction(data);
          // Display the success toast
          setModalOpen(false)
          setTimeout(()=>{
            toast.custom((t) => <CustomToast t={t} text="Changes has been successfully made" />);
      
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
    title="Edit Elderly Profile"
    buttonText={"Save Changes"}
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
              label={"Customer’s E-Mail "}
              type={"email"}
              register={
                  register("email",{
                  required: {
                      value: true,
                      message: "Please enter Customer’s E-Mail",
                      },
                  })
              }
              error={errors.email}
              placeholder={"Enter Customer’s E-Mail"}

            />

            <CustomInput
              label={"Customer’s Phone number"}
              type={"text"}
              register={
                  register("phone")
              }
              placeholder={"Enter Customer’s Phone number"}

            />
    </CustomModal>
  )
}

export default AdminElderlyEdit