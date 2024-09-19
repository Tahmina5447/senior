import { Icon } from '@iconify/react';
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import Loading from '../../../../../Shared/Loading';
import SecondLoading from '../../../../../Shared/SecondLoading';
import Step from './Step';

const AddDevice = ({ modalOpen, setModalOpen }) => {
    const searchingData = [
        {
            id: 1,
            img: '/images/devices/door.svg',
            title: 'Bosch Smart Home'
        },
        {
            id: 3,
            img: '/images/devices/wave.svg',
            title: 'Smart Lighting LED Lamp'
        },
        {
            id: 2,
            img: '/images/devices/homeCare.svg',
            title: 'Indoor Camera CB71'
        }

    ]
    const [data, setData] = useState([])
    const [selectedDevice, setSelectedDevice] = useState([]);
    const [continueWith, setcontinueWith] = useState(false)
    const [added, setAdded] = useState(false)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setData(searchingData);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, []);

    const handleSelectDevice = (device) => {
        const isSelected = selectedDevice.some((selectedDevice) => selectedDevice.id === device.id);

        setSelectedDevice((prevSelectedDevice) => {
            if (isSelected) {
                return prevSelectedDevice.filter((selectedDevice) => selectedDevice.id !== device.id);
            } else {
                return [...prevSelectedDevice, device];
            }
        });
    }

    return (
        <div>
            <Modal
                centered
                cancelText
                cancelButtonProps
                footer={null}
                open={modalOpen}
                closeIcon={null}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                width={590}

            >
                <div>

                    {/* ------------------------ success messasge------------- */}
                    {
                        (added && !continueWith) ? <>
                            <div className="h-[500px] bg-[#131A3F] rounded-[30px] max-w-[590px] relative">
                                <div className=" flex items-center justify-between px-9 pt-6 pb-6 mb-2.5">
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <Icon className='text-3xl text-Average' icon="el:ok-sign" />
                                        </div>
                                        <div>

                                            <h2 className=" text-base font-medium text-white">
                                                Success!
                                            </h2>
                                            <p className='text-[#969BB3] text-[13px] font-medium'>Device Added Successfully. </p>

                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setModalOpen(false)}
                                        className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
                                    >
                                        <Icon icon="material-symbols:close" />
                                    </button>
                                </div>

                                <div className="flex flex-col gap-[38px] px-9 my-[100px]">
                                    <div className='flex justify-center'>
                                        <div className='flex flex-col gap-6'>

                                            <div className='flex items-center justify-center ml-2'>
                                                {
                                                    selectedDevice.map((device, index) => <div>
                                                        <div className='rounded-full border-[3px] border-text-primary -ml-2 bg-[#666D90] h-[50px] w-[50px] flex items-center justify-center'><img className='w-[35px] h-7' src={device?.img} alt="device" /></div>
                                                    </div>)
                                                }
                                            </div>
                                            <span className='text-center font-medium text-base text-white'>
                                                Successfully {
                                                    selectedDevice.map((device, index) => <span className='text-primary mx-1'> {device?.title} -</span>)
                                                }
                                                Is Added.
                                            </span>

                                        </div>

                                    </div>



                                </div>
                                <div className='flex items-center justify-center pt-3 pb-9 absolute bottom-0 w-full'>
                                    <button
                                        disabled={selectedDevice.length < 1}
                                        type="button"
                                        onClick={() => { setModalOpen(false); setcontinueWith(false); setAdded(false) }}
                                        className="font-[500] text-[14px] h-[40px] w-[252px] px-5 rounded-[10px] bg-primary text-white"
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        </> : <></>
                    }


                    {/* ---------------------selected initializing and  Device adding---------------------- */}
                    {
                        continueWith && <>

                            <div className="min-h-[500px] bg-[#131A3F] rounded-[30px] max-w-[590px]">
                                <div className=" flex items-center justify-between px-9 pt-6 pb-6 mb-2.5">
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            {(continueWith) ? <><Loading /></> : <><div className='bg-white/20 p-2 h-8 w-8 flex items-center justify-center rounded-full text-xl'><Icon className='text-white' icon="lucide:rotate-ccw" /></div></>}
                                        </div>
                                        <div>
                                            <h2 className=" text-base font-medium text-white">
                                                Adding Devices
                                            </h2>
                                            <p className='text-[#969BB3] text-[13px] font-medium'>Ensure your device is in <span className='text-primary'>pairing mode.</span> </p>

                                        </div>
                                    </div>
                                    <button
                                        onClick={() => { setModalOpen(false); setcontinueWith(false) }}
                                        className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
                                    >
                                        <Icon icon="material-symbols:close" />
                                    </button>
                                </div>

                                <div className="flex justify-center px-9   mt-[30px] mb-[60px]">
                                    <div className=''>
                                        <div className='text-primary text-5xl flex justify-center '><div className='w-[45px]  relative -bottom-[100px]'><Icon icon="material-symbols-light:cloud" /></div></div>
                                        <div className="adding">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <Step setcontinueWith={setcontinueWith} setAdded={setAdded} added={added} />
                            </div>
                        </>
                    }


                    {/* ----------------Searching and continue for add--------------------------- */}
                    {
                        (!continueWith && !added) && <div className="h-[500px] bg-[#131A3F] rounded-[30px] max-w-[590px] relative">
                            <div className=" flex items-center justify-between px-9 pt-6 pb-6 mb-2.5">
                                <div className='flex items-center gap-2'>
                                    <div>
                                        {(data.length < 1) ? <><Loading /></> : <><div className='bg-white/20 p-2 h-8 w-8 flex items-center justify-center rounded-full text-xl'><Icon className='text-white' icon="lucide:rotate-ccw" /></div></>}
                                    </div>
                                    <div>

                                        <h2 className=" text-base font-medium text-white">
                                            Searching For Devices...
                                        </h2>
                                        <p className='text-[#969BB3] text-[13px] font-medium'>Device is Searching, Please make sure your device is in <span className='text-primary'>pairing mode.</span> </p>

                                    </div>
                                </div>
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
                                >
                                    <Icon icon="material-symbols:close" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-[38px] px-9 overflow-y-auto mb-[100px]">
                                {

                                    data.length < 1 ? <div className='flex items-center justify-center h-full  mt-[100px]'><SecondLoading /></div> : <>
                                        {
                                            data.map((device, index) => <div key={index} className='flex items-center gap-5'>
                                                <button onClick={() => handleSelectDevice(device)} className={`text-[28px] ${selectedDevice.some((selectedDevice) => selectedDevice.id === device.id) ? 'text-primary' : 'text-primary/40'}`}><Icon icon="el:ok-sign" /></button>
                                                <div className='flex items-center gap-3'>
                                                    <div className='rounded-full bg-[#666D90] h-[50px] w-[50px] flex items-center justify-center'><img className='w-[35px] h-7' src={device?.img} alt="device" /></div>
                                                    <h3 className='font-medium text-base text-white'>{device?.title}</h3>
                                                </div>

                                            </div>)
                                        }
                                    </>

                                }
                            </div>
                            <div className='flex items-center justify-center pt-3 pb-9 absolute bottom-0 w-full'>
                                <button
                                    disabled={selectedDevice.length < 1}
                                    type="button"
                                    onClick={() => setcontinueWith(true)}
                                    className="font-[500] text-[14px] h-[40px]  w-[252px] px-5 rounded-[10px] bg-primary text-white"
                                >

                                    Continue
                                </button>
                            </div>
                        </div>
                    }


                    {/* -----------------------------error message------------------------------ */}
                    {/* <div className="h-[500px] bg-[#131A3F] rounded-[30px] max-w-[590px] relative">
                        <div className=" flex items-center justify-between px-9 pt-6 pb-6 mb-2.5">
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Icon className='text-3xl text-[#FF2727]' icon="gridicons:cross-circle" />
                                </div>
                                <div>

                                    <h2 className=" text-base font-medium text-white">
                                        Failed!
                                    </h2>
                                    <p className='text-[#969BB3] text-[13px] font-medium'>Failed To Add Device. </p>

                                </div>
                            </div>
                            <button
                                onClick={() => setModalOpen(false)}
                                className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
                            >
                                <Icon icon="material-symbols:close" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-[38px] px-9 my-[100px]">
                            <div className='flex justify-center'>
                                <div className='flex flex-col gap-6'>

                                    <div className='flex items-center justify-center ml-2'>
                                        {
                                            selectedDevice.map((device, index) => <div>
                                                <div className='rounded-full border-[3px] border-text-primary -ml-2 bg-[#666D90] h-[50px] w-[50px] flex items-center justify-center'><img className='w-[35px] h-7' src={device?.img} alt="device" /></div>
                                            </div>)
                                        }
                                    </div>
                                    <span className='text-center font-medium text-base text-white'>
                                        Failed To Add {
                                            selectedDevice.map((device, index) => <span className='text-[#FF6767] mx-1'> {device?.title} -</span>)
                                        }
                                        Please Try Again.
                                    </span>

                                </div>

                            </div>



                        </div>
                        <div className='flex items-center justify-center pt-3 pb-9 absolute bottom-0 w-full'>
                            <button
                                disabled={selectedDevice.length < 1}
                                type="button"
                                onClick={() => { setModalOpen(false); setcontinueWith(false); setAdded(false) }}
                                className="font-[500] text-[14px] h-[40px] w-[252px] px-5 rounded-[10px] bg-[FF2727] text-white"
                            >
                                Try Again
                            </button>
                        </div>
                    </div> */}
                </div>
            </Modal>
        </div>
    );
};

export default AddDevice;