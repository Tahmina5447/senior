import { Pie, measureTextWidth } from '@ant-design/plots';
import React from 'react'

const ElderliesOverviewPieCharts = ({ data }) => {

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
                    const text = datum ? datum.type : 'Total Elderly';
                    return renderStatistic(width, text, 14, 500);
                },
            },
        },
        interactions: [
        ],
        tooltip: {
            customContent: (title, items) => {
                return (
                    <></>
                );
            },
        },
    };

    return (
        <div id='elderly-overview' className='w-[309px] h-[229px] text-white'>
            <Pie {...config} />
            <div className='flex items-center justify-between mt-[-30px] px-5'>
                <h2 className=' text-xl font-bold text-white'>{calculatePercentage(data, "Male").toFixed(0)}%</h2>
                <h2 className=' text-xl font-bold text-white'>{calculatePercentage(data, "Female").toFixed(0)}%</h2>
            </div>
        </div>
    )
}

export default ElderliesOverviewPieCharts