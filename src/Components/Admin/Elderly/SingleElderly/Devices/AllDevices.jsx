import { Icon } from '@iconify/react';
import React, { useContext, useState } from 'react';
import { Popover } from 'antd';
import DeleteModal from '../../../../../Shared/delete/DeleteModal';
import { SidebarContext } from '../../../../../Context/CustomContext';
import CustomModal from '../../../../../Shared/modal/CustomModal';
import EditDevice from './EditDevice';

const AllDevices = ({ data }) => {
    const [deviceData, setDeviceData] = useState(data)
    const [deleteModal, setDeleteModal] = useState(false);
    const [popoverStates, setPopoverStates] = useState(Array(data.length).fill(false));
    const [deviceId, setDeviceId] = useState(null)
    const { setDeviceInner } = useContext(SidebarContext)
    // ----------------modal for edit device----------------
    const [openModal, setOpenModal] = useState(false)

    // ----------------edited Device-------------
    const [editedDevice,setEditedDevice]=useState({})

    const removeDevice = () => {
        const updatedDeviceData = deviceData.filter(device => device.id !== deviceId);
        setDeviceData(updatedDeviceData);
    }



    const handleOpenChange = (index, newOpen) => {
        const newPopoverStates = [...popoverStates];
        newPopoverStates[index] = newOpen;
        setPopoverStates(newPopoverStates);
    };
    const content = (index, device) => (
        <div className=" w-[190px]">
            {
                ((device.name === 'Wave – Vital Signs Monitor') || (device.name === 'Home Care Assistant')) && <button onClick={() => setDeviceInner(device.name)} className="text-sm flex w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#252F67] py-3 px-5">Show Details</button>
            }
            <button onClick={() =>{setOpenModal(true); setEditedDevice(device); setPopoverStates(Array(data.length).fill(false))}} className="text-sm flex w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#252F67] py-3 px-5">Edit Device</button>
            <button onClick={() => { setDeleteModal(true); handleOpenChange(index, false); setDeviceId(device.id) }} className="text-sm w-full flex items-start rounded-[10px] font-medium text-light-black hover:bg-danger/10 hover:text-danger py-3 px-5">Delete Device</button>
        </div>
    );
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-h-[870px] overflow-y-auto mt-6'>
            {
                deviceData?.map((device, index) => <>
                    <div key={index} className='relative'>

                        <div className='rounded-[18px] bg-white p-4'>
                            <div className='flex justify-between'>
                                <span className='flex flex-col gap-2.5'>
                                    <img src={device?.img} alt="Device" className='w-10 h-10' />
                                    <p className='font-medium text-lg text-text-primary'>{device?.name}</p>
                                </span>
                                <div>
                                    <Popover className='flex items-start w-6 h-6' open={popoverStates[index]} onOpenChange={(newOpen) => handleOpenChange(index, newOpen)} content={() => content(index, device)} placement="leftTop" trigger="click">
                                        <button className='hover:bg-primary/10 p-1 rounded-full'>
                                            <img src={'/images/explore.svg'} className='w-5 h-5' alt="" />
                                        </button>
                                    </Popover>
                                </div>

                            </div>
                            <div className='mt-5 flex flex-wrap gap-3 items-center justify-between'>
                                <span className='flex items-center gap-1'>
                                    <span className={`text-Average p-[2px] bg-green-200 rounded-full text-[14px]`}>
                                        <Icon icon="octicon:dot-fill-24" />
                                    </span>
                                    <span className='text-base font-medium text-[#969BB3]'>{device?.title}</span>
                                </span>

                                {/* ----------------breath--------- */}
                                {
                                    device.heart && <span className='flex items-center rounded-md font-medium bg-Warning/10 text-Warning px-[3px] py-[5px]'>
                                        <span><Icon className='text-xl' icon="healthicons:lungs" /></span>
                                        <span className='text-sm'>{device.breath}<span className='text-[10px]'>bpm</span></span>
                                    </span>
                                }
                                {/* ---------heart----------- */}
                                {
                                    device.heart &&
                                    <span className='flex items-center rounded-md font-medium bg-Critical/10 text-Critical px-[3px] py-[5px]'>
                                        <span><Icon className='text-xl' icon="material-symbols-light:ecg-heart-sharp" /></span>
                                        <span className='text-sm'>{device.heart}<span className='text-[10px]'>bpm</span></span>
                                    </span>
                                }

                                {
                                    device.status === 'Trigger' ?
                                        <span className={`bg-primary p-2 text-lg rounded-full`}>
                                            <Icon className='text-white' icon="mingcute:power-fill" />
                                        </span>
                                        :
                                        <span className={`text-white font-medium text-sm  rounded-[32px] px-2.5 py-2 ${device.status === 'In Bed' ? 'bg-primary' : 'bg-[#A3AED0]'}`}>{device.status}</span>
                                }

                            </div>
                        </div>

                    </div>
                </>)
            }
            <DeleteModal onDelete={() => removeDevice()} modalOPen={deleteModal} setModalOpen={setDeleteModal} title={"Are you sure to delete this device?"} title2={" Process can be undo."} />
            <CustomModal
                modalOPen={openModal}
                setModalOpen={setOpenModal}
                width='590px'
                className='z-[50000000]'
                title={"Edit Device"}
                buttonText={'Save Changes'}
            >
                <EditDevice editedDevice={editedDevice} />
            </CustomModal>
        </div>
    );
};

export default AllDevices;