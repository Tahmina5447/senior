import React, { useContext, useState} from 'react';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../Context/CustomContext';

const Notification = ({ filterNotificationData,role }) => {
    const{setShowNotificationTab,setBreadCrumb}=useContext(SidebarContext)
    const path = useLocation();
    const [parPage,setPaePage]= useState(4)

    const navigate = useNavigate()


    const handleNavigateNotificaitonDetails = (userId) => {
        if (role === 'supportAgent') {
            navigate(`/support-agent/dashboard/elderly/${userId}`)
            setBreadCrumb({title:`${path.pathname.slice(25,path.pathname.length)==="" ? "Alerts" :path.pathname.slice(24,path.pathname.length)}`,url:`${path.pathname}`})
        }
        if (role === 'admin') {
            navigate(`/admin/dashboard/elderly/${userId}`)
            setBreadCrumb({title:`${path.pathname.slice(18,path.pathname.length)==="" ? "dashboard" :path.pathname.slice(17,path.pathname.length)}`,url:`${path.pathname}`})
        }
        if (role === 'superAdmin') {
            // navigate(`/support-agent/dashboard/user/${id}`)
        }

    }




    return (
        <div className=' mt-3 max-h-[370px] overflow-y-scroll'>
            {
                filterNotificationData.slice(0,parPage).map((item, i) => (
                    <>
                        <button onClick={() => {handleNavigateNotificaitonDetails(item?.userId); setShowNotificationTab(true)}} key={i} className='flex cursor-pointer items-start gap-2 px-4 '>
                            <div>
                                {
                                    item.alert === 1 && (
                                        <div className={`w-[40px] h-[40px]  rounded-[10px] flex items-center justify-center bg-[#F79724]/10`}>
                                            <Icon icon="ph:warning" className="text-[20px] text-[#F79724]" />
                                        </div>
                                    )
                                }
                                {
                                    item.alert === 2 && (
                                        <div className={`w-[40px]  h-[40px] rounded-[10px] flex items-center justify-center bg-[#FF2727]/10`}>
                                            <Icon icon="fe:warning" className="text-[20px] text-[#FF2727]" />
                                        </div>
                                    )
                                }
                            </div>
                            <div>
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className=' text-base font-medium text-text-primary mt-[-5px] p-0 '>{item.title}</h2>
                                    <div className='flex items-center gap-1 '>
                                        <span className='text-[11px] font-400 text-[#A3AED0]'>{item.time}</span>
                                        {
                                            item.time === "Just Now" && (
                                                <div className='w-[5px] h-[5px] rounded-full bg-primary'>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <p className='text-[13px] font-[400]  text-start text-[#666D90]'>{item.sub}</p>
                            </div>
                        </button>
                        <div className='py-2'>
                        </div>
                    </>
                ))
            }

                <div className='pb-4  px-5'>
                    {filterNotificationData.length > parPage &&  <button onClick={()=>setPaePage((pre)=>pre+4)} className=' w-full h-[41px] rounded-[8px] flex items-center justify-center border border-[#E8E9EE] text-[#B8BBCC] text-[13px] font-medium'>See More Notification</button>}
                </div>
        </div>
    );
};

export default Notification;