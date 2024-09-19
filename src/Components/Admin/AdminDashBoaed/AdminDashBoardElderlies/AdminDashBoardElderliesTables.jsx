import { Icon } from '@iconify/react';
import React, { useContext } from 'react'
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import CustomTable2 from '../../../../Shared/Table/CustomTable2';
import AdminDashBoardElderliesTablesAlerts from './AdminDashBoardElderliesTablesAlerts';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../../../Context/CustomContext';

const AdminDashBoardElderliesTables = ({ tableData: EldersTableData }) => {
    const { setBreadCrumb } = useContext(SidebarContext)
    const navigate = useNavigate()
    const columns = [
        {
            title: 'ELDERLY',
            key: "id",
            onCell: (record, rowIndex) => {
                return {
                    onClick: (event) => { handelTableRowData(record, rowIndex) }, // click row
                };
            },
            render: (row) => (
                <button onClick={() => handelTableRowData(row)} className='w-full  cursor-pointer'>

                    <AdminFiled data={row} />
                </button>
            )
        },
        {
            title: 'MANAGED BY ',
            onCell: (record, rowIndex) => {
                return {
                    onClick: (event) => { handelTableRowData(record, rowIndex) }, // click row
                };
            },
            render: (row) => <button onClick={() => handelTableRowData(row)} className='w-full  cursor-pointer'>
                <span className='text-[16px] font-[400] text-secondary2'>{row.MANAGEDBY}</span>,
            </button>

        },
        {
            title: 'ALERTS',
            onCell: (record, rowIndex) => {
                return {
                    onClick: (event) => { handelTableRowData(record, rowIndex) }, // click row
                };
            },
            key: "id",
            render: (row) => (<button onClick={() => handelTableRowData(row)} className='w-full  cursor-pointer'>
                <AdminDashBoardElderliesTablesAlerts data={row} />
            </button>
            )
        },
        {
            title: '',
            key: "id",
            onCell: (record, rowIndex) => {
                return {
                    onClick: (event) => { handelTableRowData(record, rowIndex) }, // click row
                };
            },
            render: (row) => (<button onClick={() => handelTableRowData(row)} className='w-full  cursor-pointer'>
                <Icon icon="basil:share-box-outline" className='text-[20px] cursor-pointer text-secondary2 hover:text-[#0070F0]' />
            </button>
            )
        },
    ];

    const handelTableRowData = (record) => {
        navigate(`/admin/dashboard/elderly/${record?.id}`)
        setBreadCrumb({ title: "Dashboard", url: "/admin/dashboard" })
    }
    return (
        <div>
            <CustomTable2 tableData={EldersTableData} columns={columns} scroll={{ x: "500px" }} />
        </div>
    )
}

export default AdminDashBoardElderliesTables