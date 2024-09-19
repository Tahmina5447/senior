import React, { useState } from 'react';
import SectionWrapper from '../../../Shared/SectionWrapper';
import CustomButton from '../../../Shared/button/CustomButton';
import SupportAgentsResetPasswordModal from '../AdminSupportAgent/SupportAgentsResetPasswordModal';

const Profile = () => {
    // ------------modal for reset password----------------
    const[modalOPen,setModalOpen]=useState(false)
    return (
        <SectionWrapper>
            {/* ----------cover image------------- */}
            <div className=''>
                <img src={'/images/supportAgentCover.svg'} alt="Profile Cover" className='w-full rounded-t-[20px]' />
                <div className='px-[30px] flex flex-wrap gap-3 items-center justify-between'>
                    <div className='flex'>
                        <img src={'/images/supportAgent.png'} alt="Profile" className='mt-2 md:-mt-10 h-[60px] w-[60px] md:h-[120px] md:w-[120px] rounded-full mr-4' />
                        <span className='flex flex-col my-2'>
                            <span className='text-lg md:text-2xl font-bold text-text-primary'>Tawsif Ahmed</span>
                            <span className='text-text-secondary text-sm'>tawsifsupport@email.com</span>
                        </span>
                    </div>
                    <div>
                        {/* <CustomButton onClick={()=>setModalOpen(true)} className={`bg-primary/10 group`}>
                            <span className='flex items-center text-primary group-hover:text-white duration-300  h-[33px] '>
                                <span>Reset Password</span>
                            </span>
                        </CustomButton> */}
                        <button  onClick={()=>setModalOpen(true)} className='flex items-center font-medium text-primary bg-primary/10 px-4 py-[7px] rounded-[10px]'> <span>Reset Password</span></button>
                    </div>


                </div>
            </div>
            <div className='pb-[30px] pt-6 flex flex-wrap gap-5 md:gap-11 px-[30px]'>
                <span className='flex flex-col '>
                    <span className='text-normal md:text-[19px] font-bold text-text-primary'>Male</span>
                    <span className='font-medium text-[13px] text-text-secondary'>Gender</span>
                </span>
                <span className='flex flex-col'>
                    <span className='text-normal md:text-[19px] font-bold text-text-primary'>12/06/1996</span>
                    <span className='font-medium text-[13px] text-text-secondary'>Birthday</span>
                </span>
                <span className='flex flex-col'>
                    <span className='text-normal md:text-[19px] font-bold text-text-primary'>Doctor</span>
                    <span className='font-medium text-[13px] text-text-secondary'>Profession</span>
                </span>
                <span className='flex flex-col'>
                    <span className='text-normal md:text-[19px] font-bold text-text-primary'>B+</span>
                    <span className='font-medium text-[13px] text-text-secondary'>Blood Group</span>
                </span>

            </div>
            <SupportAgentsResetPasswordModal setModalOpen={setModalOpen} modalOPen={modalOPen} />
        </SectionWrapper>
    );
};

export default Profile;