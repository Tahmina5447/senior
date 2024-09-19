import React, { useEffect, useState } from 'react';
import HeartRateSummary from './HeartRateSummary';
import BreathRateSummary from './BreathRateSummary';
import OutOfBed from './OutOfBed';
import SleepSummary from './SleepSummary';
const Analysis = ({ waveData }) => {
    const [active, setActive] = useState('Weekly')
    const [heartChartData, setHeartChartData] = useState([])
    const [breathChartData, setBreathChartData] = useState([])
    const [outOfBedData, setOutOfBedData] = useState([])
    const tabData = [
        {
            id: 1,
            title: "Weekly"
        },
        {
            id: 2,
            title: "Monthly"
        }
    ]
    useEffect(() => {
        if (active === 'Weekly') {
            setHeartChartData(waveData.heartRateDetails)
            setBreathChartData(waveData.breathRateDetails)
            setOutOfBedData(waveData.outOfBedDetails)
        }
        if (active === 'Monthly') {
            setHeartChartData(waveData.monthlyHeart)
            setBreathChartData(waveData.monthlyBreath)
            setOutOfBedData(waveData.monthlyOutOfBed)
        }
    }, [active, waveData.breathRateDetails, waveData.heartRateDetails, waveData.monthlyBreath, waveData.monthlyHeart, waveData.monthlyOutOfBed, waveData.outOfBedDetails])
    return (
        <div className=''>
            <div className='flex items-center justify-between py-4 px-6 border-b'>
                <h2 className='text-text-primary text-2xl font-semibold'>Analysis</h2>
                <div className=' w-[160px] bg-primary/20 rounded-[9px] p-1'>
                    {tabData.map((tab) => (
                        <button onClick={() => setActive(tab.title)} key={tab.id} className={` w-[75px] py-2 px-5 font-normal text-[12px] rounded-[9px] ${tab.title === active ? " bg-text-primary text-white" : "text-primary"}`}>{tab.title}</button>
                    ))}
                </div>
            </div>
            <div>
                <SleepSummary activeTab={active}  />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 border-b'>
                <div className='p-5 w-full border-r'><HeartRateSummary data={heartChartData} activeTab={active} /></div>
                <div className='p-5 w-full'><BreathRateSummary data={breathChartData} activeTab={active}  /></div>
            </div>
            <div>
                <OutOfBed data={outOfBedData} activeTab={active} />
            </div>
        </div>
    );
};

export default Analysis;