import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { SidebarContext } from '../../../../../../../Context/CustomContext';
import { Table } from 'antd';
const OverviewTrends = ({ overviewData, setHandleTrendClick, scrollToSecond }) => {
    const { activeTrend, setActiveTrend } = useContext(SidebarContext)


    const [start, setStart] = React.useState(1)
    const [end, setEnd] = React.useState(10)
    const handlePaginationChange = (page) => {
        setStart((pre) => page === 1 ? 1 : page * 10 - 9)
        setEnd((pre) => page * 10 > overviewData.length ? overviewData.length : page * 10)
    };

    const paginationConfig = {
        onChange: handlePaginationChange,
        pageSize: 10,
        defaultCurrent: Math.ceil(activeTrend?.index / 10)
    };

    const columns = [
        {
            render: (trend) => (
                <div>
                    <a href='#top-scroll'>
                        <div onClick={() => { setActiveTrend({ title: trend.title, index: 1 }); setHandleTrendClick(true); scrollToSecond() }} className={`cursor-pointer rounded-lg px-5 py-3  flex justify-between ${activeTrend.title === trend.title ? 'bg-primary/5' : 'bg-transparent'}`}>
                            <div className='flex items-center'>
                                <div className='mr-2.5 bg-secondary/5 border rounded-[9px] text-text-primary text-lg p-2'>
                                    {trend.title === 'Fall Detection' && (<Icon icon="material-symbols:falling-rounded" />)}
                                    {trend.title === 'Sleep Score' && (<Icon icon="icon-park-solid:sleep" />)}
                                    {trend.title === 'Abnormal Sleep' && (<Icon icon="material-symbols-light:respiratory-rate-rounded" />)}
                                    {trend.title === 'Abnormal Biorhythm' && (<Icon icon="material-symbols-light:respiratory-rate-rounded" />)}
                                    {trend.title === 'Not in bed' && (<Icon icon="lets-icons:bed" />)}
                                    {trend.title === 'Sleep Monitoring' && (<Icon icon="fa6-solid:bed-pulse" />)}
                                    {trend.title === 'Breath Rate' && (<Icon icon="healthicons:lungs" />)}
                                    {trend.title === 'Heart Rate' && (<img className='h-[19px] w-[19px]' src={'/images/heart.svg'} alt='icon' />)}
                                    {trend.title === 'Nutrition' && (<Icon icon="icon-park-solid:cook" />)}
                                    {trend.title === 'Frequent Toileting' && (<img className='h-[19px] w-[19px]' src={'/images/toilet.svg'} alt='icon' />)}
                                    {trend.title === 'Extended Toileting' && (<Icon icon="ph:toilet-fill" />)}
                                    {trend.title === 'Wandering at Day' && (<img className='h-[19px] w-[19px]' src={'/images/dayWork.svg'} alt='icon' />)}
                                    {trend.title === 'Bedtime' && (<Icon icon="lets-icons:bed-light" />)}
                                    {trend.title === 'Sedentary' && (<img className='h-[19px] w-[19px]' src={'/images/sitting.svg'} alt='icon' />)}
                                    {trend.title === 'Wandering at Night' && (<img className='h-[19px] w-[19px]' src={'/images/nightRun.svg'} alt='icon' />)}
                                    {trend.title === 'Frequent Night Activity' && (<img className='h-[19px] w-[19px]' src={'/images/nightAcitivity.svg'} alt='icon' />)}
                                    {trend.title === 'Oversleeping' && (<Icon icon="solar:sleeping-bold" />)}
                                    {trend.title === 'Surveillance Mode' && (<Icon icon="mdi:camera-party-mode" />)}
                                    {trend.title === 'Device Offline' && (<Icon icon="heroicons-outline:status-offline" />)}
                                </div>
                                <div className='mr-1.5'>
                                    <h1 className='text-text-primary font-medium'>{trend?.title}</h1>
                                    <p className='text-[13px] text-text-secondary'>{trend?.subTitle}</p>
                                </div>
                            </div>
                            <div className='flex items-center'>

                                {
                                    activeTrend.title === trend.title ? <Icon className='text-primary text-xl' icon="iconamoon:arrow-right-2-bold" /> :
                                        <div className={`h-[10px] w-[10px] rounded-full
                        ${(trend?.category) === 'Average' && 'bg-Average'} 
                        ${(trend?.category) === 'Warning' && 'bg-Warning'}
                        ${(trend?.category) === 'Critical' && 'bg-[#FF5959]'}
                        `}>

                                        </div>

                                }
                            </div>
                        </div>
                    </a>
                </div>
            )
        }
    ];
    return (
        <div className=''>
            <div className='relative'>
                <Table id='trend' columns={columns} dataSource={overviewData} pagination={paginationConfig} />
                <div className='lg:block text-[#90969D] font-medium text-sm lg:absolute bottom-[25px] left-6 hidden '>Showing {start} to {end} of {overviewData?.length} entries</div></div>

        </div>
    );
};

export default OverviewTrends;