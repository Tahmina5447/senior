import React from 'react';
import { Column } from '@ant-design/plots';

const ElderlyConditionsChart = ({ data }) => {
    const config = {
        data: data,
        xField: 'day',
        yField: 'value',
        color: "#ffffff",
        interactions: [{ type: 'element-active' }],
        state: {
            active: {
                animate: { duration: 100, easing: 'easeLinear' },
                style: {
                    lineWidth: 3,
                    fill: '#FFFFFF', // Set the fill color to white when active (hovered)
                    stroke: '#ffffff',
                },
            },
        },
        minColumnWidth: 20,
        maxColumnWidth: 45,
        columnStyle: {
            fill: '#9297B3',
            // fill: '#dec4ff',
            radius: [10, 10, 10, 10], // Set the radius for rounded corners
        },
        yAxis: {
            label: {
                style: {
                    fill: '#252F67',
                },
            },
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
        xAxis: {
            label: {
                style: {
                    fill: '#FFFFFF',
                },
            },
            tickLine: {
                style: {
                    stroke: '#252F67', // Set the tick line color to white
                },
            },
            line: {
                style: {
                    stroke: '#252F67', // Set the axis line color to white
                },
            },
        },
        tooltip: {
            customContent: (title, items) => {
                return (
                    <div>
                        {items?.map((item, index) => {

                            const { value, title } = item;
                            return (
                                <span
                                    key={index}
                                    className="flex flex-col  bg-text-primary rounded-[10px] mx-0"
                                    data-index={index}
                                >
                                    <span className='text-white pl-2 pr-6 bg-white/10 w-full text-[13px] font-medium py-2'>{title}</span>
                                    <span className="text-white pl-2 pr-5  font-bold text-xl py-2">{value} Visits</span>
                                </span>
                            );
                        })}

                    </div>
                );
            },
        },

    };
    return (
        <div className=' h-[220px]'><Column {...config} /></div>
    );
};

export default ElderlyConditionsChart;