import { Column } from '@ant-design/plots';
import React from 'react'

const AlertsOverviewCharts = ({ data }) => {

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    isPercent: true,
    legend: false,
    color: ['#F83333', '#F5A406', '#5C76FF'],
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
      if (data?.type === 'Problem') {
        baseStyle.radius = [0, 0, 5, 5];
      } else if (data?.type === 'Critical') {
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
                return (
                  <span
                    key={index}
                    className="flex flex-col  bg-text-primary rounded-b-[10px] mx-0"
                    data-index={index}
                  >
                    <span className='flex flex-col gap-2 mt-2'>
                      <span className='flex gap-2 items-center justify-between'>
                        <span className={`
                        ${item.data.type === 'Problem' && 'bg-[#5C76FF]'}
                        ${item.data.type === 'Critical' && 'bg-Critical'}
                        ${item.data.type === 'Warning' && 'bg-Warning'}
                         h-2 w-2 rounded-full`}></span>
                        {item.data.type === 'Problem' && <span  className='text-sm font-bold text-white/80'>Problem</span>}
                        {item.data.type === 'Critical' && <span className='text-sm font-bold text-white/80'>Critical</span>}
                        {item.data.type === 'Warning' && <span className='text-sm font-bold text-white/80'>Warning</span>}
                        <span className='text-white/80 text-sm font-bold'>{item?.value}</span>
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
    <div id='' className='h-[280px]'>
      <Column {...config} />
    </div>
  )
}

export default AlertsOverviewCharts