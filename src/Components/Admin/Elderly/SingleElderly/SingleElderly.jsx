import React, { useContext, useEffect, useState } from 'react';
import Customers from './Customers/Customers';
import Notifications from './Notifications/Notifications';
import Devices from './Devices/Devices';
import Overview from './Overview/Overview';
import InnerOverView from './Overview/InnerOverView/InnerOverView';
import { SidebarContext } from '../../../../Context/CustomContext';
import Subscriptions from './Subscriptions/Subscriptions';
import Activity from './Activity/Activity';
import Report from './Report/Report';
import InnerAssistant from './Devices/InnerAssistant/InnerAssistant';
import InnerWave from './Devices/InnerWave/InnerWave';
const SingleElderly = ({userId}) => {
    const { innerOverView, deviceInner,showNotificationTab } = useContext(SidebarContext)
    const [activeTab, setActiveTab] = useState('')
    
   useEffect(()=>{
    if(showNotificationTab){
        setActiveTab('Notifications')
    }else{
        setActiveTab('Overview')
    }
   },[showNotificationTab])
    
    const tabs = [
        {
            id: 1,
            title: 'Overview',
        },
        {
            id: 2,
            title: 'Activity',
        },
        {
            id: 3,
            title: 'Devices',
        },
        {
            id: 4,
            title: 'Subscriptions',
        },
        {
            id: 5,
            title: 'Notifications',
        },
        {
            id: 6,
            title: 'Customers',
        },
        {
            id: 7,
            title: 'Report',
        },
    ]
    return (

        <>
            <div>
                <div className='overflow-x-auto'>
                    <div className='bg-[#F6F8FF] flex border-b-[2px] border-primary'>
                        {tabs?.map(tab => <>
                            <div className='flex items-end'>
                                <div className={`duration-500 ${activeTab === tab?.title ? 'bg-primary' : 'bg-white'} w-[25px] h-[15px]`}>
                                    <div className=' bg-[#F4F7FE] w-[25px] h-[15px] rounded-br-[20px]'></div>
                                </div>

                                <button onClick={() => { setActiveTab(tab?.title) }} className={`duration-500 px-5 py-[11px] text-base font-bold ${activeTab === tab?.title ? 'bg-primary rounded-t-[22px] text-white ' : ' text-[#B8BBCC]'}`}>{tab?.title}</button>

                                <div className={`duration-500 ${activeTab === tab?.title ? 'bg-primary' : 'bg-white'} w-[25px] h-[15px]`}>
                                    <div className='bg-[#F4F7FE] w-[25px] h-[15px] rounded-bl-[20px]'></div>
                                </div>
                            </div>

                        </>)}

                    </div>
                </div>

                {
                    activeTab === 'Overview' && <>

                        {
                            innerOverView ? <Overview userId={userId} /> : <InnerOverView />
                        }
                    </>
                }
                {
                    activeTab === 'Activity' && <Activity />
                }
                {
                    activeTab === 'Devices' && <>
                        {
                            deviceInner === 'Home Care Assistant' && <InnerAssistant />
                        }
                        {
                            deviceInner === 'Wave – Vital Signs Monitor' && <InnerWave />
                        }
                        {
                            deviceInner===''&&<Devices />
                        }
                        
                    </>

                }
                {
                    activeTab === 'Subscriptions' && <Subscriptions />
                }
                {
                    activeTab === 'Notifications' && <Notifications />
                }
                {
                    activeTab === 'Customers' && <Customers />
                }
                {
                    activeTab === 'Report' && <Report />
                }

            </div>

        </>
    );
};

export default SingleElderly;