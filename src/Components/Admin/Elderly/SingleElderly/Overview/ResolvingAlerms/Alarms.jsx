import React, { useState } from 'react';
import CustomButton from '../../../../../../Shared/button/CustomButton';
import CustomModal from '../../../../../../Shared/modal/CustomModal';
import ResolvingMessageModal from './ResolvingMessageModal';

const Alarms = ({ data }) => {
    // ----------resolved alarm modal------------------
    const [modalOPen, setModalOpen] = useState(false)

    return (
       <>
        <div className='max-h-[365px] overflow-y-auto mt-5'>
            {
                data.map((singleAlarm) => <div className='py-[22px] border-b'>
                    <div className='flex items-center gap-2'>
                        <div className='w-[37px] h-[37px] rounded-[10px] bg-primary/10 flex items-center justify-center text-primary'>
                            {
                                singleAlarm.type==='bed' && <img className='w-[19px]' src={'/images/bed2.svg'} alt="icon" />
                            }
                            {
                                singleAlarm.type==='out' && <img className='w-[19px]' src={'/images/out.svg'} alt="icon" />
                            }
                            {/* <Icon className='w-[19px]' icon="octicon:mail-16" /> */}
                        </div>
                        <div>
                            <p className='text-[#969BB3] font-medium'>{singleAlarm.time}</p>
                            <p className='text-lg font-medium text-text-primary -mt-1'>{singleAlarm.alarm.title}</p>
                        </div>
                    </div>
                    <div className='mt-2 mb-4'>
                        <p className='text-sm text-[#969BB3]'>{singleAlarm.alarm.description}</p>
                    </div>
                    <CustomButton onClick={()=>setModalOpen(true)} className={'group bg-primary/10'}>
                        <span className='text-primary group-hover:text-white duration-300'>Resolved Alarm</span>
                    </CustomButton>
                </div>)
            }

        </div>
        <CustomModal
                modalOPen={modalOPen}
                setModalOpen={setModalOpen}
                width='590px'
                className='z-[50000000]'
                title={"Resolving Message"}
                buttonText={'Done'}
            >
                <ResolvingMessageModal />
            </CustomModal>
       </>
    );
};

export default Alarms;