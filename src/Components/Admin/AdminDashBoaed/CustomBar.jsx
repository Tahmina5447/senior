import React from 'react'

const CustomBar = () => {
  const problem = "50%";
  const warning = "30%";
  const critical = "20%";
  return (
    <div className='xl:w-[237px] lg:w-[150px] w-[237px] h-[18px] flex items-center gap-[3px] rounded-full'>

      <div style={{ width: problem }} className={`cursor-pointer rounded-s-full h-full bg-[#5C76FF] relative group`}>
        <div className=' bg-text-primary rounded-[10px] p-2.5 text-white absolute top-[-10px] left-1 group-hover:flex items-center gap-2 duration-300 hidden '>
          <div className='h-2 w-2 rounded-full bg-[#5C76FF]'></div>
          <p className='text-white text-[13px]'>{problem}</p>
        </div>
      </div>

      <div style={{ width: warning }} className={`cursor-pointer  h-full bg-[#F3A713] group relative`}>
        <div className=' bg-text-primary rounded-[10px] p-2.5 text-white absolute top-[-10px] left-1 group-hover:flex items-center gap-2 duration-300 hidden '>
          <div className='h-2 w-2 rounded-full bg-[#F3A713]'></div>
          <p className='text-white text-[13px]'>{warning}</p>
        </div>
      </div>

      <div style={{ width: critical }} className={`cursor-pointer rounded-e-full h-full bg-[#F83333] group relative`}>
        <div className=' bg-text-primary rounded-[10px] p-2.5 text-white absolute top-[-10px] left-1 group-hover:flex items-center gap-2 duration-300 hidden '>
          <div className='h-2 w-2 rounded-full bg-[#F83333]'></div>
          <p className='text-white text-[13px]'>{critical}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomBar