import { Column } from '@ant-design/plots';
import React from 'react'

const ElderlyCharts = ({data}) => {
    
    const config = {
      data,
      xField: 'day',
      yField: 'total',
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
        // fill: '#dec4ff',
        fill: '#9297B3',
        radius: [10, 10, 10, 10],
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
                    <span className='text-white/80 pl-2 pr-6 bg-white/10 w-full text-[13px] font-medium py-2'>{item?.data?.date}</span>
                    <span className='w-full pl-2  text-white/80 text-sm flex justify-between items-center  pr-5 my-2'>
                      <span className='flex items-center mr-5'>
                        <span className='bg-white/80 text-white h-[7px] w-1 rounded-[50px] mr-2'>
                        </span>
                        Male
                      </span>
                      <span className='font-bold'>{item?.data?.male}</span>
                    </span>
                    <span className='w-full pl-2  text-white/80 text-sm flex justify-between items-center  pr-5 mb-2'>
                      <span className='flex items-center mr-5'>
                      <span className='bg-white/80 text-white h-[7px] w-1 rounded-[50px] mr-2'>
                        </span>
                        Female
                      </span>
                      <span className='font-bold'>{item?.data?.female}</span>
                    </span>
                  </span>
                );
              })}
  
            </div>
          );
        },
      },
    };

  return (
    <div className=' h-[220px] text-white'>
        <Column {...config} />
    </div>
  )
}

export default ElderlyCharts