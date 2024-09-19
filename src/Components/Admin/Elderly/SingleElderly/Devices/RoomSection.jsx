import React, { useState } from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import { Icon } from '@iconify/react';
import { roomData } from '../../../../../assets/singleElderlyData'
import DeleteModal from '../../../../../Shared/delete/DeleteModal';
import { Popover } from 'antd';
import AddRoom from './AddRoom';
import CustomModal from '../../../../../Shared/modal/CustomModal';

const RoomSection = () => {
    const [data, setData] = useState(roomData)
    const [deleteModal, setDeleteModal] = useState(false);
    const [popoverStates, setPopoverStates] = useState(Array(data.length).fill(false));
    const [roomId, setRoomId] = useState(null)

    // -----------modal for add room-------------
    const [openModal, setOpenModal] = useState(false)

    const removeRoom = () => {
        const updatedDeviceData = data.filter(room => room.id !== roomId);
        setData(updatedDeviceData);
    }
    const handleOpenChange = (index, newOpen) => {
        const newPopoverStates = [...popoverStates];
        newPopoverStates[index] = newOpen;
        setPopoverStates(newPopoverStates);
    };
    const content = (index, id) => (
        <div className=" w-[190px]">
            <button className="text-sm flex w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#252F67] py-3 px-5">Edit Room</button>
            <button onClick={() => { setDeleteModal(true); handleOpenChange(index, false); setRoomId(id) }} className="text-sm w-full flex items-start rounded-[10px] font-medium text-light-black hover:bg-danger/10 hover:text-danger py-3 px-5">Delete Room</button>
        </div>
    );
    return (
        <>
            <SectionWrapper>
                <div className='px-[22px] py-6'>
                    <div className='mb-5 flex items-center justify-between'>
                        <span className='text-dark-black text-[23px] font-bold mr-1.5'>Rooms <span className='text-white bg-primary text-[13px] font-bold px-1.5 py-[3px] rounded-xl'>08</span></span>
                        <button onClick={()=>setOpenModal(true)} className='flex items-center font-medium text-primary bg-primary/10 px-4 py-[7px] rounded-[10px]'><span className='text-[19px]'><Icon icon="ic:sharp-add" /></span> <span className='text-[13px]'>Add Room</span></button>
                    </div>
                    <div className='p-[18px] rounded-[30px] bg-[#F6F8FF] grid grid-cols-1 gap-4 max-h-[730px] overflow-y-auto'>
                        {data.map((singleRoom, index) => <>
                            <div key={index} className='rounded-[18px] bg-white p-4'>
                                <div className='flex justify-between'>
                                    <span className='flex items-center gap-4'>
                                        <span className={

                                            `text-[19px] p-2.5 rounded-full
                                            ${singleRoom.room === 'Living Room' && 'text-orange-400 bg-orange-400/10'}
                                            ${singleRoom.room === 'Dining Room' && 'text-green-800 bg-green-800/10'}
                                            ${singleRoom.room === 'Bed Room' && 'text-primary bg-primary/10'}
                                            ${singleRoom.room === 'Bath Room' && 'text-orange-900 bg-orange-900/10'}
                                            ${singleRoom.room === 'Kitchen Room' && 'text-gray-400 bg-gray-400/10'}
                                           ${singleRoom.room === 'Children Room' && 'text-pink-400 bg-pink-400/10'}
                                           ${singleRoom.room === 'Garage Room' && 'text-black-400 bg-black-400/10'}
                                            `
                                        }>
                                            {singleRoom.room === 'Living Room' && <Icon icon="solar:sofa-outline" />}
                                            {singleRoom.room === 'Dining Room' && <Icon icon="wpf:dining-room" />}
                                            {singleRoom.room === 'Bed Room' && <Icon icon="mdi:bed-empty" />}
                                            {singleRoom.room === 'Bath Room' && <Icon icon="majesticons:bath-shower-line" />}
                                            {singleRoom.room === 'Kitchen Room' && <Icon icon="ic:outline-soup-kitchen" />}
                                            {singleRoom.room === 'Children Room' && <Icon icon="mdi:childrens-room" />}
                                            {singleRoom.room === 'Garage Room' && <Icon icon="material-symbols:garage-outline" />}

                                        </span>
                                        <span className='text-[19px] font-medium text-text-primary'>{singleRoom.room}</span>
                                    </span>
                                    <Popover className='flex items-start w-6 h-6' open={popoverStates[index]} onOpenChange={(newOpen) => handleOpenChange(index, newOpen)} content={() => content(index, singleRoom?.id)} placement="leftTop" trigger="click">
                                        <button className='hover:bg-primary/10 p-1 rounded-full'>
                                            <img src={'/images/explore.svg'} className='w-5 h-5' alt="" />
                                        </button>
                                    </Popover>
                                </div>
                                <div className='mt-5 px-4 flex flex-wrap justify-between'>
                                    <span className='flex flex-col'>
                                        <span className='font-bold text-text-primary text-xl'>{singleRoom.tem}<sup>o</sup>C</span>
                                        <span className='text-[13px] text-[#666D90]'>Temperature</span>
                                    </span>
                                    <span className='flex flex-col'>
                                        <span className='font-bold text-text-primary text-xl'>{singleRoom.hu}</span>
                                        <span className='text-[13px] text-[#666D90]'>Humidity</span>
                                    </span>
                                    <span className='flex flex-col'>
                                        <span className='font-bold text-text-primary text-xl'>{singleRoom.con}kwh</span>
                                        <span className='text-[13px] text-[#666D90]'>Current con.</span>
                                    </span>
                                    <span className='flex flex-col'>
                                        <span className='font-bold text-text-primary text-xl'>{singleRoom.div}</span>
                                        <span className='text-[13px] text-[#666D90]'>Devices</span>
                                    </span>
                                </div>
                            </div>
                        </>)}

                    </div>
                </div>
                <DeleteModal onDelete={() => removeRoom()} modalOPen={deleteModal} setModalOpen={setDeleteModal} title={"Are you sure to delete this device?"} title2={" Process can be undo."} />
                <CustomModal
                    modalOPen={openModal}
                    setModalOpen={setOpenModal}
                    width='590px'
                    className=''
                    title={"Add New Room"}
                    buttonText={'Done'}
                >
                    <AddRoom />
                </CustomModal>
            </SectionWrapper>
        </>
    );
};

export default RoomSection;