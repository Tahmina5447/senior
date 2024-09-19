import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import CustomButton from '../../../../../Shared/button/CustomButton';
import CustomModal from '../../../../../Shared/modal/CustomModal';
import CreateNotification from './CreateNotification';

const AllNotifications = () => {

    // -----------modal for create notifications-------------
    const [openModal, setOpenModal] = useState(false)

    return (
        <SectionWrapper>
            <div className=''>
                <div className="px-[22px] py-6 gap-2 flex justify-between ">
                    <h1 className="text-text-primary text-2xl font-bold " >Notifications</h1>
                    <button onClick={() => setOpenModal(true)} className='flex items-center font-medium text-primary bg-primary/10 px-4 py-[7px] rounded-[10px]'> <span>Create Notification</span><span><Icon className='ml-2 font-bold' icon="basil:send-outline" /></span></button>
                </div>

                <div className='max-h-[100vh] overflow-y-auto'>
                    <div className='px-[22px]  lg2:flex justify-between  md:flex  py-5'>
                        <div className='flex'>
                            <div className="bg-Warning/10 rounded-[9px] w-10 h-10 mr-2.5 p-2">
                                <Icon className='text-Warning text-[20px]' icon="basil:info-triangle-outline" />
                            </div>
                            <div>
                                <div className='flex items-center flex-wrap'>
                                    <span className='text-text-primary text-lg font-medium'>New Access granted</span>
                                    <span className='flex items-center'>
                                        <Icon className="text-[5px] text-text-secondary mx-1" icon="ion:ellipse" />
                                        <span className='text-[13px] text-[#A3AED0] font-medium'>Just Now</span>
                                    </span>
                                </div>

                                <p className="text-sm text-text-secondary sm:my-1 lg2:my-0 md:my-0">A person wants access to enter in the house</p>
                                <div className='my-3'>
                                    <button className='mr-3 bg-primary text-white text-[13px] rounded-lg font-medium py-2 px-3'>Accept</button>
                                    <button className='bg-[#ff2727] text-white text-[13px] font-medium rounded-lg py-2 px-3'>Delete</button>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center'><p className='text-sm font-500 text-text-secondary sm:ml-9 lg2:ml-0 md:ml-0'>Today</p></div>
                    </div>
                    <div className='px-6 lg2:flex justify-between  md:flex     py-5'>
                        <div className='flex'>
                            <div className="bg-Critical/10 rounded-[9px] w-10 h-10 mr-2.5 p-2">
                                <Icon className='text-[#FF2727] text-[20px]' icon="jam:alert" />
                            </div>
                            <div>
                                <div className='flex items-center flex-wrap'>
                                    <span className='text-text-primary text-lg font-medium'>SOS Emergency Alert!</span>
                                    <span className='flex items-center'>
                                        <Icon className="text-[5px] text-text-secondary mx-1" icon="ion:ellipse" />
                                        <span className='text-[13px] text-[#A3AED0] font-medium'>07:20 pm</span>
                                    </span>
                                </div>
                                <p className="text-sm text-text-secondary sm:my-1 lg2:my-0 md:my-0">A person wants access to enter in the house</p>
                            </div>

                        </div>
                        <div className='flex items-center'><p className='text-sm font-500 text-text-secondary sm:ml-9 lg2:ml-0 md:ml-0'>Today</p></div>
                    </div>
                    <div className='px-6 lg2:flex justify-between  md:flex    py-5'>
                        <div className='flex'>
                            <div className="bg-primary/10 rounded-[9px] w-10 h-10 mr-2.5 p-2">
                                <Icon className='text-primary text-[20px]' icon="mdi:bed-time" />
                            </div>
                            <div>
                                <div className='flex items-center flex-wrap'>
                                    <span className='text-text-primary text-lg font-medium'>Bedtime: Has not gone to bed yet</span>
                                    <span className='flex items-center'>
                                        <Icon className="text-[5px] text-text-secondary mx-1" icon="ion:ellipse" />
                                        <span className='text-[13px] text-[#A3AED0] font-medium'>07:20 pm</span>
                                    </span>
                                </div>
                                <p className="text-sm text-text-secondary sm:my-1 lg2:my-0 md:my-0">A person wants access to enter in the house</p>
                            </div>

                        </div>
                        <div className='flex items-center'><p className='text-sm font-500 text-text-secondary sm:ml-9 lg2:ml-0 md:ml-0'>Yesterday</p></div>
                    </div>
                    <div className='px-6  lg2:flex justify-between  md:flex   py-5'>
                        <div className='flex'>
                            <div className="bg-Warning/10  rounded-[9px] w-10 h-10 mr-2.5 p-2">
                                <Icon className='text-Warning text-[20px]' icon="basil:info-triangle-outline" />
                            </div>
                            <div>
                                <div className='flex items-center flex-wrap'>
                                    <span className='text-text-primary text-lg font-medium'>Elderly Fall Detected!</span>
                                    <span className='flex items-center'>
                                        <Icon className="text-[5px] text-text-secondary mx-1" icon="ion:ellipse" />
                                        <span className='text-[13px] text-[#A3AED0] font-medium'>04:50 am</span>
                                    </span>
                                </div>
                                <p className="text-sm text-text-secondary sm:my-1 lg2:my-0 md:my-0">A person wants access to enter in the house</p>
                            </div>

                        </div>
                        <div className='flex items-center'><p className='text-sm font-500 text-text-secondary sm:ml-9 lg2:ml-0 md:ml-0'>July 24, 2023</p></div>
                    </div>
                    <div className='px-6  lg2:flex justify-between  md:flex    py-5'>
                        <div className='flex'>
                            <div className="bg-Critical/10 rounded-[9px] w-10 h-10 mr-2.5 p-2">
                                <Icon className='text-[#FF2727] text-[20px]' icon="jam:alert" />
                            </div>
                            <div>
                                <div className='flex items-center flex-wrap'>
                                    <span className='text-text-primary text-lg font-medium'>SOS Emergency Alert!</span>
                                    <span className='flex items-center'>
                                        <Icon className="text-[5px] text-text-secondary mx-1" icon="ion:ellipse" />
                                        <span className='text-[13px] text-[#A3AED0] font-medium'>07:20 pm</span>
                                    </span>
                                </div>
                                <p className="text-sm text-text-secondary sm:my-1 lg2:my-0 md:my-0">A person wants access to enter in the house</p>
                            </div>

                        </div>
                        <div className='flex items-center'><p className='text-sm font-500 text-text-secondary sm:ml-9 lg2:ml-0 md:ml-0'>Today</p></div>
                    </div>
                    <div className='px-6 lg2:flex justify-between  md:flex    py-5'>
                        <div className='flex'>
                            <div className="bg-primary/10 rounded-[9px] w-10 h-10 mr-2.5 p-2">
                                <Icon className='text-primary text-[20px]' icon="mdi:toilet" />
                            </div>
                            <div>
                                <div className='flex items-center flex-wrap'>
                                    <span className='text-text-primary text-lg font-medium'>Frequently Bathroom Visit</span>
                                    <span className='flex items-center'>
                                        <Icon className="text-[5px] text-text-secondary mx-1" icon="ion:ellipse" />
                                        <span className='text-[13px] text-[#A3AED0] font-medium'>07:20 pm</span>
                                    </span>
                                </div>
                                <p className="text-sm text-text-secondary sm:my-1 lg2:my-0 md:my-0">A person wants access to enter in the house</p>
                            </div>

                        </div>
                        <div className='flex items-center'><p className='text-sm font-500 text-text-secondary sm:ml-9 lg2:ml-0 md:ml-0'>Yesterday</p></div>
                    </div>
                    <div className='px-6 lg2:flex justify-between  md:flex    py-5'>
                        <div className='flex'>
                            <div className="bg-primary/10 rounded-[9px] w-10 h-10 mr-2.5 p-2">
                                <Icon className='text-primary text-[20px]' icon="mdi:bed-time" />
                            </div>
                            <div>
                                <div className='flex items-center flex-wrap'>
                                    <span className='text-text-primary text-lg font-medium'>Bedtime: Has not gone to bed yet</span>
                                    <span className='flex items-center'>
                                        <Icon className="text-[5px] text-text-secondary mx-1" icon="ion:ellipse" />
                                        <span className='text-[13px] text-[#A3AED0] font-medium'>07:20 pm</span>
                                    </span>
                                </div>
                                <p className="text-sm text-text-secondary sm:my-1 lg2:my-0 md:my-0">A person wants access to enter in the house</p>
                            </div>

                        </div>
                        <div className='flex items-center'><p className='text-sm font-500 text-text-secondary sm:ml-9 lg2:ml-0 md:ml-0'>Yesterday</p></div>
                    </div>

                </div>
            </div>
            <CustomModal
                modalOPen={openModal}
                setModalOpen={setOpenModal}
                width='590px'
                className=''
                title={"Write Custom Notifications"}
                buttonText={'Send'}
            >
                <CreateNotification />
            </CustomModal>
        </SectionWrapper>

    );
};

export default AllNotifications;