import React, { useContext } from 'react';
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import ElderlyTableAction from './ElderlyTableAction';
import CustomTable from '../../../../Shared/Table/CustomTable';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../../../Context/CustomContext';

const ElderlyTable = ({tableData,role}) => {
    const navigate = useNavigate()
    const {setBreadCrumb} = useContext(SidebarContext)

    const columns = [
        {
            title: 'ELDERLY',
            key: "id",
            render: (row) => (
                    <button className='w-full  cursor-pointer'>
                        <AdminFiled data={row} />
                    </button>
            ),
            onCell:(record, rowIndex) => {
                return {
                  onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
              }
        },
        {
            title: 'CONTACT NUMBER',
            render: (row) =><button className='w-full  cursor-pointer'>
                <span className=' text-base font-normal text-text-secondary'>{row.contactNumber}</span>
                </button>,
                onCell:(record, rowIndex) => {
                    return {
                        onClick: (event) => {handelClick(record, rowIndex)}, // click row
                    };
                    }
        },
        {
            title: 'ADDRESS',
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                <span className=' text-base font-normal text-text-secondary'>{row.businessAdress}</span>
                </button>
        },
        {
            title: 'CRITICAL',
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                <span className=' text-base font-normal text-text-secondary'>{row.CRITICAL}</span>,
                </button>,
                responsive: ['xl'],
        },
        {
            title: 'WARNING',
            responsive: ['xl'],
            innerHeight:"200px",
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full cursor-pointer'>
                 <span className=' text-base font-normal text-text-secondary'>{row.WARNING}</span>
                 </button>
        },
        {
            title: 'PROBLEM',
            responsive: ['xl'],
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full h-full cursor-pointer'>
                 <span className=' text-base font-normal text-text-secondary'>{row.PROBLEM}</span>
                 </button>
        },
        {
            title: "ACTIONS",
            key: "id",
            render: (row) => (
                <ElderlyTableAction data={row} role={role}/>
            )
        }
    ];

    const handelClick = (record,rowIndex) => {
        navigate(role==="support-agent" ? `/support-agent/dashboard/elderly/${record?.id}`: `/admin/dashboard/elderly/${record?.id}`)
        setBreadCrumb(role==="support-agent" ? {title:"Elderly",url:"/support-agent/dashboard/elderly"} : {title:"Elderly",url:"/admin/dashboard/elderly"})
    }




    return (
        <div>
            <CustomTable tableData={tableData} columns={columns} scroll={{x:"750px"}}/>
        </div>
    );
};

export default ElderlyTable;