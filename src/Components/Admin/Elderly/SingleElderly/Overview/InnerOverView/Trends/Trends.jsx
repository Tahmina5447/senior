import React, { useContext, useEffect, useState } from 'react';
import AllOverview from './AllOverview/AllOverview';
import { trendsData } from '../../../../../../../assets/singleElderlyData'
import { Icon } from '@iconify/react';
import { SidebarContext } from '../../../../../../../Context/CustomContext';
const Trends = () => {
    const [activeTab, setActiveTab] = useState('All')
    const [data, setData] = useState(trendsData[0])
    const { activeTrend } = useContext(SidebarContext)

    useEffect(() => {
        const newData = trendsData.find(item => item.title === activeTrend.title)
        if (newData) {
            setData(newData)
        }
    }, [activeTrend.title])

    const tabs = [
        {
            id: 1,
            title: 'All',
        },
        {
            id: 2,
            title: 'Average',
        },
        {
            id: 3,
            title: 'Warning',
        },
        {
            id: 4,
            title: 'Critical',
        }
    ]
    return (
        <div className='bg-white rounded-b-[30px]'>
            <div className='my-6 w-full xl:w-1/3 px-4'>
                <div className=' mb-6 relative'>

                    <Icon icon="material-symbols:search" className=' text-2xl text-[#B8BBCC] absolute top-2 right-2' />
                    <input type="text" placeholder='Search Trends' className='text-[13px] font-medium outline-none w-full  py-[9px] px-3 pr-10 flex items-center justify-between border-[1px] focus:border-primary rounded-[10px]' />
                </div>
                <div className='bg-[#F6F8FF] p-1 rounded-[50px] flex'>
                    {tabs?.map(tab => <button onClick={() => { setActiveTab(tab?.title) }} className={`rounded-[20px] text-sm w-full font-medium py-2 ${tab?.title === activeTab ? 'bg-primary text-white' : 'text-text-primary/60'}`}>{tab?.title}</button>)}

                </div>
            </div>
            <div>
                {activeTab === 'All' && <AllOverview chartData={data} trendsData={trendsData} />}
                {activeTab === 'Average' && <AllOverview chartData={data} trendsData={trendsData.filter((average) => average.category === "Average")}></AllOverview>}
                {activeTab === 'Warning' && <AllOverview chartData={data} trendsData={trendsData.filter((average) => average.category === "Warning")}></AllOverview>}
                {activeTab === 'Critical' && <AllOverview chartData={data} trendsData={trendsData.filter((average) => average.category === "Critical")}></AllOverview>}
            </div>
        </div>
    );
};

export default Trends;