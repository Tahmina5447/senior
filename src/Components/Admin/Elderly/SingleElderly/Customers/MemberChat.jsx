import { Column } from '@ant-design/plots';
import { Icon } from '@iconify/react';
import React from 'react';

const MemberChat = () => {
  const data = [
    {
      id: '01',
      age: 10,
      name: 'Khan',
      title: 'Child'
    },
    {
      id: '02',
      age: 50,
      name: 'Sahed Khan',
      title: 'Elderly'
    },
    {
      id: '03',
      age: 20,
      name: 'Ddjd',
      title: 'Adult'
    },
    {
      id: '04',
      age: 28,
      name: 'Rahim',
      title: 'Adult'
    },
    {
      id: '05',
      age: 20,
      name: 'Karim',
      title: 'Adult'
    },
    {
      id: '06',
      age: 70,
      name: 'Rahima',
      title: 'Elderly'
    },
    {
      id: '07',
      age: 25,
      name: 'Sahed Khan',
      title: 'Adult'
    },
    {
      id: '08',
      age: 20,
      name: 'Bikash',
      title: 'Adult'
    },
    {
      id: '09',
      age: 40,
      name: 'Kdin',
      title: 'Adolescent'
    },
    {
      id: '10',
      age: 35,
      name: 'Sahed Khan',
      title: 'Adolescent'
    },


  ];
  const config = {
    data,
    xField: 'id',
    yField: 'age',
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
    minColumnWidth: 10,
    maxColumnWidth: 22,
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
                  <span className='text-white/80 pl-2 pr-6 bg-white/10 w-full text-[13px] font-medium py-2'>{item?.data?.title}</span>
                  <span className="text-white pl-2  pr-5 font-bold text-xl py-2">{item?.data?.name}</span>
                  <span className='w-full text-white/80 text-sm flex justify-between items-center  pr-5 mb-2'>
                    <span className='flex items-center mr-5'>
                      <span>
                        <Icon className='text-lg' icon="radix-icons:dot-filled" />
                      </span>
                      Age
                    </span>
                    <span className='font-bold'>{item?.data?.age}</span>
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
    <div className='h-[355px]'>
      <Column {...config} />
    </div>
  );
};

export default MemberChat;