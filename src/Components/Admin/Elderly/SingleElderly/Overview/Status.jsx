import React, { useEffect, useState } from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import { Icon } from '@iconify/react';
import { Popover } from 'antd';
import { Elderlies } from '../../../../../assets/admin/data'
import RecordedCallHistory from './RecordedCallHistory';
const Status = ({ userId }) => {
    // --------recorded call history modal-------------
    const [modalOPen, setModalOpen] = useState(false)

    const [position, setPosition] = useState('')
    const Id = Number(userId);
    useEffect(() => {
        const singleUser = Elderlies.find(user => user.id === Id);
        if (singleUser) {
            setPosition(singleUser.possition)
        }
    }, [Id]);

    const [selected, setSelected] = useState("");
    const data = ['Call To', '911', 'Family']
    const [popupShow, setPopupShow] = useState(false);

    const handleOpenChange = (newOpen) => {
        setPopupShow(newOpen);
    };

    const content = (
        <div className=" w-[135px] p-2 max-h-[150px] overflow-y-scroll">
            {data.map((item, index) => (
                <button
                    disabled={item === 'Call To'}
                    key={index}
                    onClick={() => {
                        setPopupShow(false);
                        setSelected(item)
                    }}
                    className={`${item === "Call To" ? " hidden" : ""} text-sm w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#252F67] flex  py-3 px-5`}
                >
                    {item}
                </button>
            ))}
        </div>
    );
    return (
        <>
            <SectionWrapper>
                <div className='px-[22px] py-6'>
                    <div id='add_zoom' style={{ backgroundImage: 'url("/images/satusImg.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className={`mb-5 p-5 rounded-[17px] 
                    ${position === 'good' && 'bg-Average'}
                    ${position === 'critical' && 'bg-[#F43E3E]'}
                    ${position === 'problem' && 'bg-[#627BFF]'}
                    ${position === 'warning' && 'bg-Warning'}
                    
                    `}>
                        <div className='flex items-center gap-[14px]'>
                            <span className='p-4 rounded-full bg-white'>
                                {position === 'good' && <Icon className='text-[22px] text-Average ' icon="iconamoon:check-bold" />}
                                {position === 'critical' && <Icon className='text-[22px] text-[#F43E3E] ' icon="lucide:siren" />}
                                {position === 'problem' && <Icon className='text-[22px] text-[#627BFF] ' icon="lucide:bug" />}
                                {position === 'warning' && <Icon className='text-[22px] text-Warning ' icon="quill:warning" />}
                            </span>
                            <span className='flex flex-col'>
                                <span className='font-bold text-2xl text-white'>
                                    {position === 'good' && <span>All Good</span>}
                                    {position === 'critical' && <span>Critical</span>}
                                    {position === 'problem' && <span>Problem</span>}
                                    {position === 'warning' && <span>Warning</span>}
                                </span>
                                {position === 'good' && <span className='text-sm text-white opacity-80'>Everything Fine With Elderly</span>}
                                {position === 'critical' && <span className='text-sm text-white opacity-80'>Something Went Wrong With Elderly</span>}
                                {position === 'problem' && <span className='text-sm text-white opacity-80'>Some Problem Detected, Fix ASAP</span>}
                                {position === 'warning' && <span className='text-sm text-white opacity-80'>Please Check, Is Everything Fine With Elderly</span>}

                            </span>
                        </div>
                        <div className='mt-[72px] px-0 xl:px-12 grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2'>
                            <span className='flex items-center gap-1'>
                                <span className='text-white opacity-80  text-[35px] h-[35px] '><Icon className='h-full' icon="lucide:siren" /></span>
                                <span className='flex flex-col text-white'>
                                    <span className='text-[13px] opacity-80'>Critical</span>
                                    <span className='text-[22px] font-bold -mt-1'>02</span>
                                </span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <span className='text-white opacity-80  text-[35px] h-[35px] '><Icon className='h-full' icon="quill:warning" /></span>
                                <span className='flex flex-col text-white'>
                                    <span className='text-[13px] opacity-80'>Warning</span>
                                    <span className='text-[22px] font-bold -mt-1'>03</span>
                                </span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <span className='text-white opacity-80  text-[35px] h-[35px] '><Icon className='h-full' icon="lucide:bug" /></span>
                                <span className='flex flex-col text-white'>
                                    <span className='text-[13px] opacity-80'>Problem</span>
                                    <span className='text-[22px] font-bold -mt-1'>04</span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-4 flex-wrap md:flex-nowrap'>
                        <div id='add_zoom'>
                            <span className='text-xl font-bold text-dark-black'>Kari Daughetry</span>
                            <span className='flex items-center gap-1'>
                                <span className='text-[15px] text-text-secondary'><Icon icon="system-uicons:location" /></span>
                                <span className='text-[13px] text-text-secondary'>Newport Beach, CA 92660, USA</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <div className="relative h-[37px]">
                                <Popover
                                    open={popupShow}
                                    onOpenChange={handleOpenChange}
                                    content={content}
                                    placement="bottomRight"
                                    trigger="click"
                                >
                                    <button
                                        className={`bg-primary text-white w-[120px] text-[13px] font-medium cursor-pointer px-2 py-2 flex items-center rounded-[10px] justify-between`}
                                    >
                                        <div className="flex items-center gap-1">
                                            <Icon icon="lucide:phone-call" className='text-[18px] mt-[-1px]' />
                                            {selected
                                                ? selected?.length > 25
                                                    ? selected?.substring(0, 25) + "..."
                                                    : selected
                                                : data[0]}
                                        </div>
                                        <Icon icon="basil:caret-down-solid" className={`${popupShow && "rotate-180"} text-[20px]`} />
                                    </button>
                                </Popover>
                            </div>
                            <button onClick={() => setModalOpen(true)} className='p-[7px] bg-primary/10 text-primary rounded-[10px] text-[19px]'><Icon icon="material-symbols:history" /></button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            <RecordedCallHistory setModalOpen={setModalOpen} modalOPen={modalOPen} />
        </>
    );
};

export default Status;