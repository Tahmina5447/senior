import { Icon } from '@iconify/react'
import React from 'react'

const OverViewTop = () => {
  return (
    <div className=' flex items-center justify-between'>
        <div className=' flex items-center gap-2'>
            <img src="/images/danger.svg" alt="fgfgfg" className=' w-[70px] h-[70px]'/>
            <div>
                <h2 className=' text-text-primary font-bold text-2xl'>Critical</h2>
                <p className=' font-normal text-sm text-text-primary/60'>Some has last seen near the kitchen and living room</p>
            </div>
        </div>

        <div className='flex items-center gap-5'>
            <div className=' bg-[#F27A7A]/20 flex items-center gap-1 py-1 px-1 rounded-full'>
                <div className=' w-[35px] h-[35px] border-[3px] border-white rounded-full bg-red-600 flex items-center justify-center'>
                    <Icon icon="ant-design:alert-outlined" className='text-[20px] text-white'/>
                </div>
                <h2 className='text-[#F14343] text-base font-bold mr-2'>02</h2>
            </div>
            <div className=' bg-[#FFC960]/20 flex items-center gap-1 py-1 px-1 rounded-full'>
                <div className=' w-[35px] h-[35px] border-[3px] border-white rounded-full bg-[#FFC960] flex items-center justify-center'>
                    <Icon icon="mingcute:alert-line" className='text-[20px] text-white'/>
                </div>
                <h2 className='text-[#FFC960] text-base font-bold mr-2'>02</h2>
            </div>
            <div className=' bg-[#92A3FF]/20 flex items-center gap-1 py-1 px-1 rounded-full'>
                <div className=' w-[35px] h-[35px] border-[3px] border-white rounded-full bg-[#92A3FF] flex items-center justify-center'>
                    <Icon icon="ant-design:bug-outlined" className='text-[20px] text-white'/>
                </div>
                <h2 className='text-[#92A3FF] text-base font-bold mr-2'>02</h2>
            </div>
        </div>
    </div>
  )
}

export default OverViewTop