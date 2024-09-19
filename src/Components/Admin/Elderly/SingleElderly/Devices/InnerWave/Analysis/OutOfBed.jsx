import { Area } from '@ant-design/plots';
import React from 'react';

const OutOfBed = ({ data,activeTab }) => {
    const config = {
        data,
        xField: 'day',
        yField: 'value',
        smooth: true,
        legend: false,
        color: '#00BE9C',
        xAxis: {
            grid: {
                line: {
                    style: {
                        stroke: 'l(90) 1:#ffffff 0:#ffffff',
                        lineWidth: 1,
                        strokeOpacity: 1,
                        cursor: 'pointer',
                    },
                },
            },
            tickLine: {
                style: {
                    stroke: '#ffffff', // Set the tick line color to white
                },
            },
            line: {
                style: {
                    stroke: '#ffffff', // Set the axis line color to white
                },
            },
        },
        yAxis: {
            grid: {
                line: {
                    style: {
                        stroke: 'l(90) 1:#f7f7fa 0:#f7f7fa',
                        lineWidth: 1,
                        strokeOpacity: 1,
                        cursor: 'pointer',
                    },
                },
            },

        },
        areaStyle: () => ({
            fill: 'l(270) 1:#FFFFFF 0.2:#fff',
        }),
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
                                            <span className='flex items-center gap-2'>
                                                <span className={`bg-Average h-2 w-2 rounded-full`}></span>
                                                <span className='text-white/80 text-sm font-bold'>{item?.value } x</span>
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
        <div className='p-5'>
            <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-1'>
                    {/* <Icon className='text-3xl text-[#00BE9C]' icon="material-symbols:ecg-heart-sharp" /> */}
                    <img src={"/images/wakeUpIcon.svg"} alt="" />
                    <p className='text-lg font-semibold text-text-primary'>Out Of Bed</p>
                </div>
                <div className='text-[15px] font-semibold text-text-primary'><span>Avg. {activeTab==='Weekly'?<span className='text-[#00BE9C]'>1x</span>:<span className='text-[#00BE9C]'>2x</span>}</span></div>
            </div>
            <div className='h-[239px] mt-5'>
                <Area {...config} />
            </div>
        </div>
    );
};

export default OutOfBed;