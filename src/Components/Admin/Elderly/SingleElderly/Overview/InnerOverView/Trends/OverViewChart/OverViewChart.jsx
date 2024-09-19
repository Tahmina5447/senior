import React, { useEffect, useRef, useState } from 'react';
import { Table, Progress, DatePicker, Space } from 'antd';
import { Icon } from '@iconify/react';
import { Area, G2 } from '@ant-design/plots';
import { configuration } from '../../../../../../../../Shared/areaChartThemeConfiguration';
const { RangePicker } = DatePicker;

const OverViewChart = ({ data, handleTrendClick }) => {
    const [chartData, setChartData] = useState(data?.table)
    const ref = useRef(null);
    useEffect(() => {
        setChartData(data?.table);
    }, [data?.table]);

    const scrollToTop = () => {
        if (ref.current) {
            ref.current.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        if (handleTrendClick) {
            scrollToTop()
        }
    }, [handleTrendClick])

    const handleDate = (date) => {
        // const startDate = start.format('MMM DD, YYYY');
        //     const endDate = end.format('MMM DD, YYYY');
        if (date) {
            const [start, end] = date;
            const startDate = new Date(start);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(end);
            endDate.setHours(23, 59, 59, 999);

            const filteredData = data.table.filter(entry => {
                const entryDate = new Date(entry.alert);
                return entryDate >= startDate && entryDate <= endDate;

            });
            setChartData(filteredData);
        } else {
            setChartData(data.table)
        }

    }

    const [start, setStart] = React.useState(1)
    const [end, setEnd] = React.useState(10)
    const handlePaginationChange = (page, pageSize) => {
        setStart((pre) => page === 1 ? 1 : page * 10 - 9)
        setEnd((pre) => page * 10 > chartData.length ? chartData.length : page * 10)
    };

    const paginationConfig = {
        onChange: handlePaginationChange,
        pageSize: 10
    };
    const { registerTheme } = G2;
    registerTheme('custom-theme', configuration)
    const config = {
        data: chartData,
        xField: 'alert',
        yField: 'value',
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
        areaStyle: () => ({
            // fill: 'l(270) 1:#D3D5E1 0.2:#fff',
        fill: 'l(270) 0:#ffffff 0.5:#D3D5E1 1:#252F67',
        }),
        tooltip: {
            customContent: (title, items) => {
                return (
                    <div>
                        {items?.map((item, index) => {
                            const { data, title } = item;
                            return (
                                <span
                                    key={index}
                                    className="flex flex-col  bg-text-primary rounded-[10px] mx-0"
                                    data-index={index}
                                >
                                    <span className='text-white pl-2 pr-6 bg-white/10 w-full text-[13px] font-medium py-2'>{title}</span>
                                    <span className="text-white pl-2   font-bold text-xl py-2">{data.tableValue}</span>
                                </span>
                            );
                        })}

                    </div>
                );
            },
        },
        theme: 'custom-theme'
    };

    const columns = [
        {
            title: 'ALERT',
            dataIndex: 'alert'
        },
        {
            title: 'VALUE',
            dataIndex: 'tableValue',
        },
        {
            title: 'ALERT TYPE',
            dataIndex: 'type',
            render: (row) => <span className={`flex w-24 items-center gap-2 rounded-[19px] px-[5px] py-[1px]
            ${row === 'Average' && 'text-success bg-success/10'}
            ${row === 'Critical' && 'text-Critical bg-Critical/10'}
            ${row === 'Warning' && 'text-Warning bg-Warning/10'}

            `}>
                <span className='text-xl'>
                    {
                        row === "Average" ? <Icon icon="icon-park-outline:dot" /> : <Icon icon="iwwa:arrow-up" />
                    }
                </span>
                <span className={`text-sm font-medium`}>{row}</span>
            </span>
        },
        {
            title: 'ACTION',
            dataIndex: 'action'
        }
    ]


    return (
        <div id='top-scroll' ref={ref} className=''>
            {/* --------------title--------------------- */}
            <div className='lg2:flex justify-between md:flex py-6 px-8 border-b'>
                <div className='flex flex-wrap items-center mr-2'>
                    <h1 className='text-[22px] mr-2.5 font-bold text-text-primary'>{data?.title}</h1>
                    <div className={`rounded-xl px-1.5  flex items-center 
                        ${(data?.category) === 'Critical' && 'bg-[#FF5959] '}
                        ${(data?.category) === 'Average' && 'bg-Average'}
                        ${(data?.category) === 'Warning' && 'bg-[#EF9D00]'}
                    `}>
                        <span className='mr-1 text-white'>
                            {
                                data?.category === 'Average' ? <Icon className={`my-2`} icon="ion:ellipse-sharp" /> : <Icon className={`text-3xl
                            
                        `} icon="octicon:triangle-up-24" />
                            }
                        </span>
                        <span className='text-white font-medium'>{data?.category}</span>
                    </div>
                </div>

                <div id='overView' className='lg2:my-0 md:my-0 sm:my-5 '>
                    <Space direction="horizontal">
                        <RangePicker format='MM-DD-YYYY' onChange={handleDate} />
                    </Space>
                </div>
            </div>
            {/* -------------------chart-------------------- */}
            <div className='px-6 h-[483px] mt-6'>
                <Area {...config} />
            </div>
            {/* ----------------average box----------------- */}
            <div className='flex items-center pr-7 border-b border-t justify-between  my-7'>
                <div className='flex items-center'>
                    <div className='bg-primary px-5 py-2 mr-4 text-center'>
                        <h2 className='text-white font-bold text-2xl'>{data.target}

                            {
                                data.type === 'x' && <span>x</span>
                            }
                            {
                                data.type === 's' && <span>s</span>
                            }
                            {
                                data.type === 'bpm' && <span>bpm</span>
                            }
                            {
                                data.type === 'hr' && <span>hr</span>
                            }
                            {
                                data.type === 'percent' && <span>%</span>
                            }
                            {
                                data.type === 'm' && <span>m</span>
                            }
                        </h2>
                        <p className='text-white/90 text-base font-bold -mt-1'>Target</p>
                    </div>
                    <div className='  py-2'>
                        <h1 className='text-2xl font-bold text-text-primary'>{data?.average}</h1>
                        <p className='text-text-secondary text-base font-medium'>Average {data?.title}</p>

                    </div>
                </div>

                <div className='lg2:flex items-center md:flex  py-2'>
                    {/* ----------average-------------- */}
                    <div className='flex items-center gap-3'>
                        <div className='w-3 h-6 justify-center bg-Average/30 rounded-xl flex items-center'>
                            <div className='w-1.5 h-4 rounded-2xl bg-Average'></div>
                        </div>
                        <div className='flex items-center lg2:mr-7 md:mr-7'>
                            <div>
                                <p className='  text-text-secondary text-base font-medium'>Average</p>
                                <p className='text-2xl font-bold text-text-primary'>17%</p>
                            </div>
                            <Progress className='mr-2.5' type="circle" percent={16} showInfo={false} size={40} strokeWidth={13} strokeColor={'#4cb585'} />

                        </div>
                    </div>
                    {/* -----------warning----------- */}
                    <div className='flex items-center gap-3 '>
                        <div className='w-3 h-6 justify-center bg-Warning/30 rounded-xl flex items-center'>
                            <div className='w-1.5 h-4 rounded-2xl bg-Warning'></div>
                        </div>
                        <div className='flex items-center lg2:mr-7 md:mr-7 lg2:my-0 md:my-0 sm:my-2'>
                            <div>
                                <p className=' text-text-secondary text-base font-medium'>Warning</p>
                                <p className='text-2xl font-bold text-text-primary'>35%</p>
                            </div>
                            <Progress className='mr-2.5' type="circle" percent={45} showInfo={false} size={40} strokeWidth={13} strokeColor={'#FAB515'} />

                        </div>
                    </div>
                    {/* "------------critical-------------" */}
                    <div className='flex items-center gap-3 '>
                        <div className='w-3 h-6 justify-center bg-[#FF5959]/30 rounded-xl flex items-center'>
                            <div className='w-1.5 h-4 rounded-2xl bg-[#FF5959]'></div>
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <p className='  text-text-secondary text-base font-medium'>Critical</p>
                                <p className='text-2xl font-bold text-text-primary'>17%</p>
                            </div>
                            <Progress className='mr-2.5' type="circle" percent={39} showInfo={false} size={40} strokeWidth={13} strokeColor={'#FF5959'} />

                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------table------------------- */}
            <div className='border mx-6 relative'>
                <Table id="chart-table" columns={columns} dataSource={chartData} pagination={paginationConfig} />
                <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing {start} to {end} of {chartData?.length} entries</div>
            </div>
        </div>
    );
};

export default OverViewChart;