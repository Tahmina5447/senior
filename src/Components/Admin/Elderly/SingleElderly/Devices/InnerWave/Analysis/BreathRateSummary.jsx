import { Column } from '@ant-design/plots';
import { Icon } from '@iconify/react';
import React from 'react';

const BreathRateSummary = ({data,activeTab}) => {
    const config = {
        data,
        xField: 'day',
        yField: 'value',
        isRange: false,
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
        yAxis: {
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
        minColumnWidth: 14,
        maxColumnWidth: 7,
        columnStyle: { fill: '#FFBB3E', radius: [10, 10, 10, 10] },
        tooltip: {
            customContent: (title, items) => {
                return (
                    <div className='bg-text-primary rounded-[10px] py-3 px-5'>
                        <div className='text-white/80  rounded-t-[10px]'><span className='text-base font-bold'>{title}</span></div>
                        <div>
                            {items?.map((item, index) => {
                                console.log("from chart", item)
                                return (
                                    <span
                                        key={index}
                                        className="flex flex-col  bg-text-primary rounded-b-[10px] mx-0"
                                        data-index={index}
                                    >
                                        <span className='flex flex-col gap-2 mt-2'>
                                            <span className='flex gap-2 items-center justify-between'>
                                                <span className={`bg-Warning h-2 w-2 rounded-full`}></span>
                                                <span className='text-white/80 text-sm font-bold'>{item?.value } bpm</span>
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
        <div>
        <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-1'>
            <Icon className='text-3xl text-[#FFBB3E]' icon="healthicons:lungs" />
                <p className='text-lg font-semibold text-text-primary'>Respiratory Rate Summery</p>
            </div>
            <div className='text-[15px] font-semibold text-text-primary'><span>Avg. {activeTab==='Weekly'?<span className='text-[#FFBB3E]'>14bpm</span>:<span className='text-[#FFBB3E]'>15bpm</span>}</span></div>
        </div>
        <div className='h-[266px]'>
            <Column {...config} />
        </div>
    </div>
    );
};

export default BreathRateSummary;