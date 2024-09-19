import React from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import { Pie, measureTextWidth } from '@ant-design/plots';
import { Icon } from '@iconify/react';
import MemberChat from './MemberChat';

const MembersOverview = () => {
   

    const data = [
        {
            type: 'Male',
            value: 6,
        },
        {
            type: 'Female',
            value: 4,
        },

    ]
   
    function renderStatistic(containerWidth, text, fontSize, fontWeight) {
        const { width: textWidth, height: textHeight } = measureTextWidth(text, fontSize);
        const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

        let scale = 1;

        if (containerWidth < textWidth) {
            scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
        }

        const textStyleStr = `width:${containerWidth}px;`;
        return `<div style="${textStyleStr};font-size:${fontSize}px; font-weight:${fontWeight}; line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
    }

    const calculatePercentage = (data, gender) => {
        // Filter data for the specified gender
        const filteredData = data.filter(item => item.type === gender);

        // Calculate the total value for the specified gender
        const totalValue = filteredData.reduce((sum, item) => sum + item.value, 0);
        const total = data.reduce((sum, item) => sum + item.value, 0);

        // Calculate the percentage for the specified gender
        const percentage = (totalValue / total) * 100;

        return percentage;
    };

    const config = {
        appendPadding: 10,
        data,
        legend: false,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        startAngle: (-5 / 5) * Math.PI,
        endAngle: (0 / 5) * Math.PI,
        innerRadius: 0.60,
        color: ['#ffffff', '#9297B3'],
        label: {
            type: 'inner',
            offset: '-50%',
            style: {
                textAlign: 'center',
                fontSize: 0
            },
            autoRotate: true,
            content: '{value}',
        },
        tooltip: {
                    customContent: (title, items) => {
                        return (
                            <></>
                        );
                    },
                },
        statistic: {
            title: {
                offsetY: 65,
                customHtml: (container, view, datum, data) => {
                    const { width, height } = container.getBoundingClientRect();
                    const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                    const text = datum ? ` ${datum.value}` : ` ${data.reduce((r, d) => r + d.value, 0)}`;
                    return renderStatistic(d, text, 45, 600);
                },
            },
            content: {
                offsetY: 70,
                customHtml: (container, view, datum,) => {
                    const { width } = container.getBoundingClientRect();
                    const text = datum ? datum.type : 'Total Member';
                    return renderStatistic(width, text, 14, 500);
                },
            },
        },
        interactions: [
        ],
    };
    return (
        <>
            {/* ' */}
            <SectionWrapper>
                <div className='bg-primary rounded-[20px] p-6'>
                    <div>
                        <h2 className='text-white text-2xl font-bold'>Members Overview</h2>
                    </div>
                    <div className='mt-12'>
                        <div className='flex flex-col xl:flex-row md:flex-row  gap-5 items-center justify-between'>
                            <div className=''>
                                <div className='w-[79px] flex flex-col gap-5'>
                                    <span className='flex flex-col'>
                                        <span className='flex items-center gap-1 text-base text-secondLightPrimary font-medium'>
                                            <span><Icon icon="ion:male" /></span>
                                            <span>Male</span>
                                        </span>
                                        <span className='text-[34px] font-bold text-white'>06</span>
                                    </span>
                                    <span className='flex flex-col'>
                                        <span className='flex items-center gap-1 text-base text-secondLightPrimary font-medium'>
                                            <span><Icon className='text-2xl' icon="material-symbols:female" /></span>
                                            <span>Female</span>
                                        </span>
                                        <span className='text-[34px] font-bold text-white'>04</span>
                                    </span>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <div id='member' className='w-[245px] lg2:w-[200px] xl:w-[245px] h-[158px] text-white '>
                                    <Pie {...config} />
                                    <div className='flex items-center justify-between mt-[-20px] px-3'>
                                        <h2 className=' text-xl font-bold text-white'>{calculatePercentage(data, "Male").toFixed(0)}%</h2>
                                        <h2 className=' text-xl font-bold text-white'>{calculatePercentage(data, "Female").toFixed(0)}%</h2>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className='mt-[56px]'>
                        <div className='mb-2.5 px-[35px] flex items-center justify-between'>
                            <span className='flex flex-col'>
                                <span className='text-[28px] font-bold text-white'>01</span>
                                <span className='font-medium text-[13px] text-secondLightPrimary'>Child</span>
                            </span>
                            <span className='flex flex-col'>
                                <span className='text-[28px] font-bold text-white'>02</span>
                                <span className='font-medium text-[13px] text-secondLightPrimary'>Adolescent</span>
                            </span>
                            <span className='flex flex-col'>
                                <span className='text-[28px] font-bold text-white'>05</span>
                                <span className='font-medium text-[13px] text-secondLightPrimary'>Adult</span>
                            </span>
                            <span className='flex flex-col'>
                                <span className='text-[28px] font-bold text-white'>02</span>
                                <span className='font-medium text-[13px] text-secondLightPrimary'>Elderly</span>
                            </span>

                        </div>
                        <div></div>
                    </div>
                    <div>
                        <MemberChat />
                    </div>
                </div>
              

            </SectionWrapper>

        </>
    );
};

export default MembersOverview;