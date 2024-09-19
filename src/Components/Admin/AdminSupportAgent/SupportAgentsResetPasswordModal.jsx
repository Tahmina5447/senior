import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import CustomToast from '../../../Shared/Tosat/CustomToast';
import CustomModal from '../../../Shared/modal/CustomModal';
import PasswordInput from '../../../Shared/input/PasswordInput';

const SupportAgentsResetPasswordModal = ({ modalOPen, setModalOpen }) => {
  const {
    register,
    handleSubmit,
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
      setTimeout(() => {
        toast.custom((t) => <CustomToast t={t} text="Temporary password has been successfully changed" />);

      }, 900)
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
      title="Reset Password"
      buttonText={"Reset"}
    >

      <div className='pt-4 '>
        <PasswordInput
          lable={"Temporary password"}
          // lable2={"At least 8 characters long"}
          register={register("firstName")}
          placeholder={"***********"}
        />
      </div>

    </CustomModal>
  )
}

export default SupportAgentsResetPasswordModal