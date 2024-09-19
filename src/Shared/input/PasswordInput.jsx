import React, { useState } from 'react'
import { Icon } from '@iconify/react';

const PasswordInput = ({label,label2,register,placeholder}) => {
    const [show,setShow] = useState(false)

  return ( 
         <div className="flex flex-col items-start w-full mt-5 relative">
            <label htmlFor="otp" className="mb-1 font-[500] text-[13px] text-[#1B2559]">
            {label}
            </label>
            <input
           className="py-[18px] h-[50px] px-4  text-text-primary placeholder:text-[#A3AED0]  rounded-[16px] w-full text-[16px] outline-none  border-[1px] focus:border-primary"
            type={show ? "text" :"password"}
            placeholder={placeholder}
            id="otp"
            {...register}
            />
            <div className=' absolute top-[33%] right-[10px]'>
                <button type='button' onClick={()=>setShow(pre=>!pre)}>
                    {
                        show ? <Icon icon="ic:outline-visibility" className='text-[20px] text-black'/> : <Icon icon="mdi:visibility-off-outline" className='text-[20px] text-black'/>
                    }
                </button>
            </div>
            <label className="label mt-2">
                {label2}
            </label>
        </div>       
  )
}

export default PasswordInput