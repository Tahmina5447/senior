import React from 'react'

const InnerAssistantAnalysisAvg = () => {
  return (
    <div className=' grid xl:grid-cols-4 grid-cols-2 lg:w-[80%] mx-auto w-full  lg:grid-cols-2 gap-4'>
        <div className=' flex items-start gap-1'>
            <div className=' w-[10px] h-[10px] mt-[5px] rounded-full bg-[#9A4BFF]'>

            </div>
            <div>
                <h3 className=' text-sm font-medium text-[#A3AED0]'>Avg. Normal Activity</h3>
                <h2 className=' text-lg font-bold text-dark-black mt-[-3px]'>8hr 54m</h2>
            </div>
        </div>
        <div className=' flex items-start gap-1'>
            <div className=' w-[10px] h-[10px] mt-[5px] rounded-full bg-[#00D192]'>

            </div>
            <div>
                <h3 className=' text-sm font-medium text-[#A3AED0]'>Avg. Sedentary</h3>
                <h2 className=' text-lg font-bold text-dark-black mt-[-3px]'>8hr 54m</h2>
            </div>
        </div>
        <div className=' flex items-start gap-1'>
            <div className=' w-[10px] h-[10px] mt-[5px] rounded-full bg-[#888888]'>

            </div>
            <div>
                <h3 className=' text-sm font-medium text-[#A3AED0]'>Avg. Wandering at Night</h3>
                <h2 className=' text-lg font-bold text-dark-black mt-[-3px]'>8hr 54m</h2>
            </div>
        </div>
        <div className=' flex items-start gap-1'>
            <div className=' w-[10px] h-[10px] mt-[5px] rounded-full bg-[#FF8A35]'>

            </div>
            <div>
                <h3 className=' text-sm font-medium text-[#A3AED0]'>Avg. Wandering at Day</h3>
                <h2 className=' text-lg font-bold text-dark-black mt-[-3px]'>8hr 54m</h2>
            </div>
        </div>
    </div>
  )
}

export default InnerAssistantAnalysisAvg