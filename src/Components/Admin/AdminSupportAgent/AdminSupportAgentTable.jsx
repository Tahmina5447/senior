import React, { useContext } from 'react'
import AdminSupportAgentTableAction from './AdminSupportAgentTableAction';
import AdminFiled from '../../../Shared/AdminFiled/AdminFiled';
import CustomTable from '../../../Shared/Table/CustomTable';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../../Context/CustomContext';

const AdminSupportAgentTable = ({ tableData }) => {
    const navigate = useNavigate()
    const {setBreadCrumb} = useContext(SidebarContext)
    const columns = [
        {
            title: 'SUPPORT AGENT',
            key: "id",
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) => (
                <button >
                    <AdminFiled data={row} />
                </button>
            )
        },
        {
            title: 'CONTACT NUMBER',
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) => <button>
                <span className=' text-[14px] xl:text-base  font-normal text-text-secondary'>{row.contactNumber}</span>
            </button>,
        },
        {
            title: 'CONTACT PERSON',
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) => <button>
                <span className=' text-[14px] xl:text-base  font-normal text-text-secondary'>{row.contactPerson}</span>
            </button>
        },
        {
            title: 'BUSINESS ADDRESS',
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            render: (row) => <>
                <button >
                    <span className=' text-[14px] xl:text-base xl:block hidden font-normal text-text-secondary'>{row.businessAdress}</span>
                    <span className=' text-[14px] xl:text-base block xl:hidden font-normal text-text-secondary'>{row.businessAdress.slice(0, 15) + "..."}</span>
                </button>
            </>

        },
        {
            title: 'STATUS',
            onCell:(record, rowIndex) => {
                return {
                    onClick: (event) => {handelClick(record, rowIndex)}, // click row
                };
                },
            key: "id",
            render: (row) => (
                <div className={`py-1 px-1 rounded-full cursor-pointer  h-[28px] flex items-center justify-center gap-1 ${row.status === "Active" ? " bg-success w-[80px]" : "bg-[#666D90] w-[88px]"}`}>
                    <div className={`w-[13px] h-[13px] rounded-full border-[3px] border-white bg-transparent`}>

                    </div>
                    <span className=' text-white font-medium text-[13px]'>{row.status}</span>
                </div>
            ),
            sorter: (a, b) => a.status - b.status,
        },
        {
            title: "",
            key: "id",
            render: (row) => (
                <AdminSupportAgentTableAction data={row} />
            )
        }
    ];
    const handelClick = (record) => {
        navigate(`${record.id}`)
        setBreadCrumb({title:"Support Agents",url:"/admin/dashboard/Support-Agents"})
    }
    return (
        <div>
            <CustomTable tableData={tableData} columns={columns} scroll={{ x: "750px" }} />
        </div>
    )
}

export default AdminSupportAgentTable