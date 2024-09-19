import { Area } from '@ant-design/plots';
import React from 'react';

const BioVitaSammary = ({ waveData }) => {
    const chartData = waveData?.bioVita
    const config = {
        data: chartData,
        xField: 'time',
        yField: 'value',
        smooth: true,
        legend: false,
        color: '#FAB515',
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
            fill: 'l(270) 1:#FAB515 0.2:#fff',
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
                                            <span className='flex gap-2 items-center justify-between'>
                                                {/* <span className={`bg-Critical h-2 w-2 rounded-full`}></span> */}
                                                <span className='text-white/80 text-sm font-bold'>{item?.value }</span>
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
        <div className='mt-[45px] mb-4'>
            <h2 className='text-text-primary font-semibold text-2xl mb-2.5'>Bio-Vita Summary</h2>
            <div className='h-[233px]'>
                <Area {...config} />
            </div>
        </div>
    );
};

export default BioVitaSammary;