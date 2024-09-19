import React, { useState } from 'react';
import CustomInput from '../../../../../Shared/input/CustomInput';
import { Icon } from '@iconify/react';

const CreateNotification = () => {
    // ----------to set classic or sms type------------------
    const [activeType,setActiveType]=useState('classic')
    return (
        <div className='my-9'>
            <div className='mb-[14px] flex items-center justify-center'>
                <span className='flex items-center w-[194px]'>
                    <span className='flex items-center p-3 '>
                        <button onClick={()=>setActiveType('classic')}>
                            {
                                activeType==='classic'?<Icon className='text-primary text-[21px] mr-1.5' icon="lets-icons:done-ring-round-fill" />:<Icon className='text-[#B8BBCC] -ml-1 text-3xl' icon="octicon:dot-fill-24" />
                            }
                        </button>
                        <span className='text-text-primary text-base font-medium'>Classic</span>
                    </span>
                    <span className='flex items-center p-3 '>
                        <button onClick={()=>setActiveType('sms')}>
                            {
                                activeType==='sms'?<Icon className='text-primary text-[21px] mr-1.5' icon="lets-icons:done-ring-round-fill" />:<Icon className='text-[#B8BBCC] -ml-1 text-3xl' icon="octicon:dot-fill-24" />
                            }
                        </button>
                        <span className='text-text-primary text-base font-medium'>SMS</span>
                    </span>

                </span>
            </div>
            <div>
                <div>
                    <CustomInput
                        label={'Subject'}
                        type={'text'}
                        register={'subject'}
                        error={'Subject is required'}
                        placeholder={'Subject'}
                    />
                </div>
                <div>
                    <div className="flex flex-col items-start w-full mt-3">
                        <label
                            htmlFor="otp"
                            className="mb-1 font-medium text-[13px] text-[#1B2559]"
                        >
                            Description
                        </label>
                        <textarea
                            required
                            className="py-[18px] px-4 text-text-primary placeholder:text-[#A3AED0] min-h-[100px]  rounded-[16px] w-full text-base outline-none border-[1px] focus:border-primary"
                            type={'text'}
                            placeholder={'Write Description Here'}

                        >
                        </textarea>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNotification;