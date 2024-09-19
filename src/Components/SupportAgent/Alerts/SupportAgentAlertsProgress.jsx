import { Icon } from '@iconify/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SupportAgentAlertsProgress = ({data}) => {
    const navigate = useNavigate()
  return (
    <div className='py-[22px]'>
        <div className='px-[22px] flex items-center gap-2'>
            <h2 className=' text-[24px] text-text-primary font-bold'>Alerts In Progress</h2>
            <div className=" bg-primary/20 w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <div className=" bg-dark-black/80 w-[15px] h-[15px] rounded-full border-[3px] border-white"></div>
            </div>
        </div>
        <div className='flex flex-col items-start justify-between w-full gap-[34px] mt-5 px-[22px]'>

            {
                data.slice(0,7).map((row,i)=>{
                    return(
                    <div key={i} onClick={()=>navigate(`/support-agent/dashboard/elderly/${row.id}`)} className='flex md:items-center cursor-pointer justify-between md:flex-row  flex-col w-full gap-7'>
                        <div className='flex items-start gap-2'>
                        {
                            row.alert==="Critical" && (
                                <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#FF5959]/10`}>
                                <Icon icon="ant-design:alert-outlined" className="text-[20px] text-[#FF5959]"/>
                                </div>
                            )
                        }
                        {
                            row.alert==="Warning" && (
                                <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-Warning/10`}>
                                <Icon icon="ri:alert-line" className="text-[20px] text-Warning"/>
                                </div>
                            )
                        }
                        {
                            row.alert==="Problem" && (
                                <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#5973FF]/10`}>
                                <Icon icon="ant-design:bug-outlined" className="text-[20px] text-[#5973FF]"/>
                                </div>
                            )
                        }
                            <div>
                                <h3 className='text-[16px] font-[500] text-text-primary'>{row.title}</h3>
                                <p className='text-[13px] font-[400] text-[#A3AED0]'>{row.name} <span className='font-[500]'>#{row.id}</span></p>
                            </div>
                        </div>
                        <div className='w-[80px] flex items-center justify-end'>
                            <span className='text-[16px] font-[500] text-[#A3AED0]'>{row.time}</span>
                        </div>
                    </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default SupportAgentAlertsProgress