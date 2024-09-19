import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import ElderlyConditionsChart from './ElderlyConditionsChart';
import SortDat from '../../../../../Shared/sort/SortDat';

const Chart = () => {
    const [selected, setSelected] = useState('Weekly');
    const dataDay = ["Weekly", "Monthly"];
    const monthlyData = [
        { day: "Week 1", value: 25 },
        { day: "Week 2", value: 30 },
        { day: "Week 3", value: 25 },
        { day: "Week 4", value: 30 }
    ]
    const weeklyData = [
        { day: "sun", value: 5, },
        { day: "Mon", value: 6 },
        { day: "Tue", value: 7 },
        { day: "Wed", value: 8 },
        { day: "Thu", value: 4 },
        { day: "Fri", value: 2 },
        { day: "sat", value: 7 }
    ]
    const [data, setData] = useState(weeklyData);
    useEffect(() => {
        if (selected === "Weekly") {
            setData(weeklyData)
        }
        if (selected === "Monthly") {
            setData(monthlyData)
        }
    }, [selected])

    return (
        <div className='bg-primary rounded-[20px]  px-[22px] py-6'>
            <div>
                <h1 className='text-2xl font-bold text-white/95'>Elderly Conditions</h1>
            </div>
            <div className='flex items-center justify-between gap-4 flex-wrap my-[30px]'>
                <div className='flex items-center gap-1'>
                    <Icon className='w-10 h-10 text-white/50' icon="ri:heart-pulse-fill" />
                    <div>
                        <p className='text-[13px] text-white/80'>Heart Rate</p>
                        <span className='flex items-start'><span className='text-[28px] font-bold mr-1 -mt-1.5 text-white/95'>72</span><span className='text-xs font-medium text-white/90'>bpm</span></span>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <Icon className='w-10 h-10 text-white/50' icon="fontisto:blood-drop" />
                    <div>
                        <p className='text-[13px] text-white/80'>Blood pressure</p>
                        <span className='flex items-start'><span className='text-[28px] font-bold mr-1 -mt-1.5 text-white/95'>120/80</span><span className='text-xs font-medium text-white/90'>mmgh</span></span>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <Icon className='w-10 h-10 text-white/50' icon="fluent:temperature-20-filled" />
                    <div>
                        <p className='text-[13px] text-white/80'>Body Tem.</p>
                        <span className='flex items-start'><span className='text-[28px] font-bold mr-1 -mt-1.5 text-white/95'>98.6</span><span className='text-xs font-medium text-white/90'><sup>o</sup>F</span></span>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-white/95 text-xl'>Elderly Visits</h1>
                    <SortDat
                        className="text-white bg-white/10"
                        selected={selected}
                        setSelected={setSelected}
                        data={dataDay}
                    />
                </div>
                <div className='mt-[70px]'>
                    <ElderlyConditionsChart data={data} />
                </div>
            </div>
        </div>
    );
};

export default Chart;