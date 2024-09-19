import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const ElderlyFallDetected = () => {
    const [data, setData] = useState('')
    const handleClose = (e) => {
        setData(e)
    }
    return (
        <div>
            <div className={`mt-5 border border-Critical flex xl:items-center md:items-center justify-between rounded-[20px] bg-[#FFF7F7] p-5 ${data === 'close' ? "hidden" : ''}`}>
                <div>
                    <div className='flex items-center gap-2 text-Critical mb-1.5'>
                        <Icon className="w-[20px] h-[20px]" icon="carbon:warning" />
                        <h1 className='text-[19px] font-medium text-Critical' >Elderly Fall Detected!</h1>
                    </div>
                    <p className='text-[#49517A] text-[13px]'>An elderly person has fallen In <span className='text-Critical font-bold'>Living Room</span>. Please check on them immediately.</p>
                </div>
                <div onClick={() => handleClose('close')} className='cursor-pointer text-Critical'><Icon  className='text-xl'icon="radix-icons:cross-2" /></div>
            </div>
        </div>
    );
};

export default ElderlyFallDetected;