import { Area, G2 } from '@ant-design/plots';
import React from 'react'
import { configuration } from '../../../Shared/areaChartThemeConfiguration';
import { Icon } from '@iconify/react';

const TopSupportAgentsCharts = ({ data }) => {

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
        fill: 'l(270) 0:#ffffff 0.5:#D3D5E1 1:#252F67',
        // fill: 'l(270) 0:#ffffff 0.5:#8f39ff67 1:#252F67',
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
                  <span className="text-white pl-2  pr-5 font-bold text-xl py-2">{item?.data?.name}</span>
                  <span className='w-full text-white text-sm flex justify-between items-center  pr-5 mb-2'>
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
    <div className='mt-[35px]'>
      <div className='w-full md:h-[270px] h-[270px] text-secondary'>
        <Area {...config} />
      </div>
    </div>
  )
}

export default TopSupportAgentsCharts