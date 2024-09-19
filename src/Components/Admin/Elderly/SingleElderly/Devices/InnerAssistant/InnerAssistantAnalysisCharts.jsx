import { Column } from '@ant-design/plots';
import React from 'react'

const InnerAssistantAnalysisCharts = ({ data }) => {
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    isPercent: true,
    legend: false,
    color: ['#9A4BFF', '#00D192', '#888888', '#FF8A35'],
    isStack: true,
    minColumnWidth: 10,
    maxColumnWidth: 20,
    yAxis: {
      label: {
        formatter: (v) => `${v}%`,
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
      if (data?.type === 'NormalActivity') {
        baseStyle.radius = [0, 0, 5, 5];
      } else if (data?.type === 'WanderingNight') {
        baseStyle.radius = [5, 5, 0, 0];
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
                console.log("from chart", item)
                return (
                  <span
                    key={index}
                    className="flex flex-col  bg-text-primary rounded-b-[10px] mx-0"
                    data-index={index}
                  >
                    <span className='flex flex-col gap-2 mt-2'>
                      <span className='flex gap-3 items-center'>
                        <span className={`
                            ${item.data.type === 'WanderingNight' && 'bg-[#888888]'}
                            ${item.data.type === 'NormalActivity' && ' bg-[#9A4BFF]'}
                            ${item.data.type === 'Sedentary' && 'bg-[#00D192]'}
                            ${item.data.type === 'WanderingDay' && ' bg-[#FF8A35]'}
                             h-2 w-2 rounded-full`}></span>
                        <span className='text-sm font-bold text-white/80'>{item.name}</span>
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
    <div className='h-[280px]'>
      <Column {...config} />
    </div>
  )
}

export default InnerAssistantAnalysisCharts