import { Icon } from '@iconify/react';
import { Tooltip } from 'antd';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../../Shared/Table/CustomTable';
import { SidebarContext } from '../../../Context/CustomContext';


const Alerts = ({ row }) => {
    return (
        <div>
            <div className='flex items-center gap-2'>

                {
                    row.alert === "Critical" && (
                        <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#FF5959]/10`}>
                            <Icon icon="ant-design:alert-outlined" className="text-[20px] text-[#FF5959]" />
                        </div>
                    )
                }
                {
                    row.alert === "Warning" && (
                        <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-Warning/10`}>
                            <Icon icon="ri:alert-line" className="text-[20px] text-Warning" />
                        </div>
                    )
                }
                {
                    row.alert === "Problem" && (
                        <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#5973FF]/10`}>
                            <Icon icon="ant-design:bug-outlined" className="text-[20px] text-[#5973FF]" />
                        </div>
                    )
                }
                <div>
                    {/* <h3 className='text-[16px] font-[500] text-secondary hidden xl:flex'>{row.title}</h3> */}
                    <h3 className='text-[16px] font-[500] text-dark-black'>{row.title.slice(0, 35)}</h3>
                    <p className='text-[13px] font-[400] text-[#A3AED0]'>{row.name} <span className='font-[500]'>#{row.id}</span></p>
                </div>

            </div>
        </div>
    )
}

const AlertsTable = ({tableData}) => {
    const navigate = useNavigate()
    const {setBreadCrumb} = useContext(SidebarContext)
    const columns = [
        {
            title: 'ALERT',
            key: "id",
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) => (<div onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                <Alerts row={row} />
            </div>
            )
        },
        {
            title: 'ALERT TYPE',
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'> 
                <span className='text-[16px] font-[400] capitalize text-dark-black/80'>{row.alert}</span>
                </button>,
            sorter: (a, b) => a.type - b.type,
        },
        {
            title: 'DATE',
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'> 
            <span className='text-[16px] font-[400] text-dark-black/80'>{row.DATE}</span>
            </button>,
            sorter: (a, b) => a.DATE - b.DATE,
        },
        {
            title: 'ACTION',
            key: "id",
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) => (
                <Tooltip title="View">
                    <button onClick={() => {navigate(`/support-agent/dashboard/elderly/${row.id}`);setBreadCrumb({title:"Alerts",url:"/support-agent/dashboard"})}}>
                        <Icon icon="ph:eye" className='text-[20px] text-secondary hover:text-[#0070F0]' />
                    </button>
                </Tooltip>
            )
        },
    ];

    const handelClick = (record) => {
        navigate(`/support-agent/dashboard/elderly/${record.id}`)
        setBreadCrumb({title:"Alerts",url:"/support-agent/dashboard"})
    }

  return (
    <div>
        <CustomTable tableData={tableData} columns={columns} scroll={{x:"500px"}}/>
    </div>
  )
}

export default AlertsTable