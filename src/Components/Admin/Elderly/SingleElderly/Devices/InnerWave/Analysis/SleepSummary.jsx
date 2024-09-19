import { Column } from '@ant-design/plots';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const SleepSummary = ({ activeTab }) => {
    const monthlyData = [

        {
            type: 'deep',
            day: 'Week1',
            value: 9
        },
        {
            type: 'deep',
            day: 'Week2',
            value: 9
        },
        {
            type: 'deep',
            day: 'Week3',
            value: 8
        },
        {
            type: 'deep',
            day: 'Week4',
            value: 9
        },
        {
            type: 'core',
            day: 'Week1',
            value: 7
        },
        {
            type: 'core',
            day: 'Week2',
            value: 6
        },
        {
            type: 'core',
            day: 'Week3',
            value: 8
        },
        {
            type: 'core',
            day: 'Week4',
            value: 4
        },
        {
            type: 'rem',
            day: 'Week1',
            value: 3
        },
        {
            type: 'rem',
            day: 'Week2',
            value: 2
        },
        {
            type: 'rem',
            day: 'Week3',
            value: 1
        },
        {
            type: 'rem',
            day: 'Week4',
            value: 3
        },

        {
            type: 'awake',
            day: 'Week1',
            value: 2
        },
        {
            type: 'awake',
            day: 'Week2',
            value: 3
        },
        {
            type: 'awake',
            day: 'Week3',
            value: 2
        },
        {
            type: 'awake',
            day: 'Week4',
            value: 4
        },
    ]
    const weeklyData = [

        {
            type: 'deep',
            day: 'Sun',
            value: 9
        },
        {
            type: 'deep',
            day: 'Mon',
            value: 9
        },
        {
            type: 'deep',
            day: 'Tue',
            value: 8
        },
        {
            type: 'deep',
            day: 'Wed',
            value: 9
        },
        {
            type: 'deep',
            day: 'Thu',
            value: 7
        },
        {
            type: 'deep',
            day: 'Fri',
            value: 7
        },
        {
            type: 'deep',
            day: 'Sat',
            value: 8
        },
        {
            type: 'core',
            day: 'Sun',
            value: 7
        },
        {
            type: 'core',
            day: 'Mon',
            value: 6
        },
        {
            type: 'core',
            day: 'Tue',
            value: 8
        },
        {
            type: 'core',
            day: 'Wed',
            value: 4
        },
        {
            type: 'core',
            day: 'Thu',
            value: 5
        },
        {
            type: 'core',
            day: 'Fri',
            value: 7
        },
        {
            type: 'core',
            day: 'Sat',
            value: 8
        },

        {
            type: 'rem',
            day: 'Sun',
            value: 3
        },
        {
            type: 'rem',
            day: 'Mon',
            value: 2
        },
        {
            type: 'rem',
            day: 'Tue',
            value: 1
        },
        {
            type: 'rem',
            day: 'Wed',
            value: 3
        },
        {
            type: 'rem',
            day: 'Thu',
            value: 4
        },
        {
            type: 'rem',
            day: 'Fri',
            value: 3
        },
        {
            type: 'rem',
            day: 'Sat',
            value: 1
        },

        {
            type: 'awake',
            day: 'Sun',
            value: 2
        },
        {
            type: 'awake',
            day: 'Mon',
            value: 3
        },
        {
            type: 'awake',
            day: 'Tue',
            value: 2
        },
        {
            type: 'awake',
            day: 'Wed',
            value: 4
        },
        {
            type: 'awake',
            day: 'Thu',
            value: 1
        },
        {
            type: 'awake',
            day: 'Fri',
            value: 3
        },
        {
            type: 'awake',
            day: 'Sat',
            value: 4
        },


    ]
    const [data, setData] = useState(weeklyData)
    useEffect(() => {
        if (activeTab === 'Weekly') {
            setData(weeklyData)
        }
        if (activeTab === 'Monthly') {
            setData(monthlyData)
        }
    }, [activeTab])

    const config = {
        data,
        isStack: true,
        legend: false,
        color: ['#3964FF', '#FF62C0', '#80E005', '#FF8D24'],
        xField: 'day',
        yField: 'value',
        seriesField: 'type',
        minColumnWidth: 14,
        maxColumnWidth: 7,
        yAxis: {
            label: {
                formatter: (v) => `${v}hr`,
            },
            grid: {
                line: {
                    style: {
                        stroke: '#707EAE',
                        color: '#fff',
                        lineWidth: 0.08,
                        cursor: 'pointer',
                    },
                },
            },
        },
        xAxis: {
            tickLine: {
                style: {
                    stroke: '#fcfcfd',
                },
            },
            line: {
                style: {
                    stroke: '#fcfcfd',
                },
            },
        },
        columnStyle: (data, dataColor) => {
            const baseStyle = { fill: dataColor, radius: [0, 0, 0, 0] };
            if (data?.type === 'deep') {
                baseStyle.radius = [5, 5, 0, 0];
            } else if (data?.type === 'awake') {
                baseStyle.radius = [0, 0, 5, 5];
            }

            return baseStyle;
        },
        tooltip: {
            customContent: (title, items) => {
                return (
                    <div className='bg-text-primary rounded-[10px] py-3 px-5'>
                        <div className='text-white/80  rounded-t-[10px]'><span className='text-base font-bold'>{title}</span></div>
                        <div>
                            {items?.map((item, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="flex flex-col  bg-text-primary rounded-b-[10px] mx-0"
                                        data-index={index}
                                    >
                                        <span className='flex flex-col gap-2 mt-2'>
                                            <span className='flex gap-3 items-center '>
                                                <span className={`
                              ${item.data.type === 'deep' && 'bg-[#3964FF]'}
                              ${item.data.type === 'core' && ' bg-[#80E005]'}
                              ${item.data.type === 'awake' && 'bg-[#FF8D24]'}
                              ${item.data.type === 'rem' && ' bg-[#FF62C0]'}
                               h-2 w-2 rounded-full`}></span>
                                                {item.data.type === 'deep' && <span className='text-sm font-bold text-white/80'>Deep</span>}
                                                {item.data.type === 'core' && <span className='text-sm font-bold text-white/80'>Core</span>}
                                                {item.data.type === 'awake' && <span className='text-sm font-bold text-white/80'>Awake</span>}
                                                {item.data.type === 'rem' && <span className='text-sm font-bold text-white/80'>Rem</span>}
                                                <span className='text-white/80 text-sm font-bold'>{item?.value}hr</span>
                                            </span>
                                        </span>
                                    </span>
                                );
                            })}

                        </div>
                    </div>
                );
            },
        },
    };
    return (
        <div className='p-5 md:flex items-center gap-5 border-b'>
            {/* -----------average----------------- */}
            <div className='w-full md:w-1/3'>
                <div className='flex items-center gap-1'>
                    <Icon className='text-2xl  text-[#4683C4]' icon="icon-park-solid:sleep" />
                    <p className='text-text-primary font-semibold'>Sleep Summery</p>
                </div>
                <div className='flex flex-col mt-[25px] mb-[35px]'>
                    <span className='text-[13px] font-medium text-text-secondary'>Avg. Sleep Time</span>
                    {activeTab === 'Weekly' ? <span className='text-text-primary font-bold text-[22px]'>9hr 57m</span> : <span className='text-text-primary font-bold text-[22px]'>8hr 57m</span>}

                </div>
                <div className='grid grid-cols-2 gap-y-5'>
                    <span className='flex gap-1'>
                        <span className='h-[9px] w-[9px] rounded-full bg-[#3964FF] mt-1'></span>
                        <span className='flex flex-col'>
                            <span className='text-[13px] font-medium text-text-secondary'>Avg. Deep</span>
                            {activeTab === 'Weekly' ? <span className='text-text-primary font-bold text-[22px]'>3hr 45m</span> : <span className='text-text-primary font-bold text-[22px]'>4hr 7m</span>}
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className='h-[9px] w-[9px] rounded-full bg-[#80E005] mt-1'></span>
                        <span className='flex flex-col'>
                            <span className='text-[13px] font-medium text-text-secondary'>Avg. Core</span>
                            {activeTab === 'Weekly' ? <span className='text-text-primary font-bold text-[22px]'>27m</span> : <span className='text-text-primary font-bold text-[22px]'>25m</span>}
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className='h-[9px] w-[9px] rounded-full bg-[#FF62C0] mt-1'></span>
                        <span className='flex flex-col'>
                            <span className='text-[13px] font-medium text-text-secondary'>Avg. REM</span>
                            {activeTab === 'Weekly' ? <span className='text-text-primary font-bold text-[22px]'>37m</span> : <span className='text-text-primary font-bold text-[22px]'>35m</span>}
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className='h-[9px] w-[9px] rounded-full bg-[#FF8D24] mt-1'></span>
                        <span className='flex flex-col'>
                            <span className='text-[13px] font-medium text-text-secondary'>Avg. Awake</span>
                            {activeTab === 'Weekly' ? <span className='text-text-primary font-bold text-[22px]'>47m</span> : <span className='text-text-primary font-bold text-[22px]'>34m</span>}
                        </span>
                    </span>


                </div>
            </div>
            {/* -----------chart------------------- */}
            <div className='w-full md:w-2/3 h-[275px] mt-5 md:mt-0'>
                <Column {...config} />
            </div>
        </div>
    );
};

export default SleepSummary;