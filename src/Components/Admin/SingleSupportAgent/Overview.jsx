import { Area, G2 } from '@ant-design/plots';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { configuration } from '../../../Shared/areaChartThemeConfiguration';
import { TopSupportAgentsDaily, TopSupportAgentsMonthly, TopSupportAgentsYearly } from '../../../assets/supportAgentData/AdminDashBoardChart'
import SectionWrapper from '../../../Shared/SectionWrapper';

const Overview = () => {


    const [data, setdata] = useState(TopSupportAgentsYearly)
    const [active, setActive] = useState(3)
    const tabData = [
        {
            id: 1,
            title: "Daily"
        },
        {
            id: 2,
            title: "Monthly"
        },
        {
            id: 3,
            title: "Yearly"
        },
    ]

    useEffect(() => {
        if (active === 3) {
            setdata(TopSupportAgentsYearly)
        }
        if (active === 2) {
            setdata(TopSupportAgentsMonthly)
        }
        if (active === 1) {
            setdata(TopSupportAgentsDaily)
        }
    }, [active])

    const { registerTheme } = G2;
    registerTheme('custom-theme', configuration)
    const config = {
        data: data,
        xField: 'day',
        yField: 'caseSolved',
        smooth: true,
        legend: false,
        color: '#252F67',
        xAxis: {
            grid: {
                line: {
                    style: {
                        stroke: 'l(90) 1:#D9D9D9 0:#EBEBEB',
                        lineWidth: 1,
                        lineDash: [4, 5],
                        strokeOpacity: 1,
                        cursor: 'pointer',
                    },
                },
            },
        },
        yAxis: {
            grid: {
                line: {
                    style: {
                        stroke: '#252F67',
                        lineWidth: 0,
                        cursor: 'pointer',
                    },
                },
            },
        },
        areaStyle: () => {
            return {
                // fill: 'l(270) 0:#ffffff 0.5:#8f39ff67 1:#252F67',
        fill: 'l(270) 0:#ffffff 0.5:#D3D5E1 1:#252F67',
            };
        },
        tooltip: {
            customContent: (title, items) => {
                return (
                    <div>
                        {items?.map((item, index) => {

                            return (
                                <span
                                    key={index}
                                    className="flex flex-col  bg-text-primary rounded-[10px] mx-0"
                                    data-index={index}
                                >
                                    <span className='text-white pl-2 pr-6 bg-white/10 w-full text-[13px] font-medium py-2'>{item?.data?.date}</span>
                                    
                                    <span className='w-full text-white text-sm  flex justify-between items-center  pr-5 my-2'>
                                        <span className='flex items-center mr-5'>
                                            <span>
                                                <Icon className='text-primary text-lg' icon="radix-icons:dot-filled" />
                                            </span>
                                            Case Solved
                                        </span>
                                        <span className='font-bold'>{item?.data?.caseSolved}</span>
                                    </span>
                                </span>
                            );
                        })}

                    </div>
                );
            },
        },
        theme: 'custom-theme'
    };
    return (
        <SectionWrapper>
            <div className='px-[22px] py-[24px]'>
                <div className=' flex md:items-center md:flex-row flex-col gap-3 justify-between'>
                    <h2 className=' text-2xl font-bold text-text-primary'>Overview</h2>

                    <div className=' w-[235px] bg-primary/20 rounded-[9px] p-1'>
                        {tabData.map((tab) => (
                            <button onClick={() => setActive(tab.id)} key={tab.id} className={` w-[75px] py-2 px-5 font-normal text-[12px] rounded-[9px] ${tab.id === active ? " bg-text-primary text-white" : "text-primary"}`}>{tab.title}</button>
                        ))}
                    </div>
                </div>
                <div className='w-full text-secondary mt-7 h-[418px]'>
                    <Area {...config} />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Overview;