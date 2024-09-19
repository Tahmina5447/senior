import React from 'react'
import AdminFiled from '../../../Shared/AdminFiled/AdminFiled';
import CustomNotHoverTable from '../../../Shared/Table/CustomNotHoverTable';

const SuspendedAdminTable = ({tableData}) => {
    const columns = [
        {
            title: 'ADMIN',
            key: "id",
            render: (row) => (
                <AdminFiled data={row} />
            )
        },
        {
            title: 'CONTACT NUMBER',
            render: (row) => <span className='text-[14px] xl:text-basefont-normal text-text-secondary'>{row.contactNumber}</span>,
        },
        {
            title: 'SUSPENDED BY',
            render: (row) => <span className='text-[14px] xl:text-base font-normal text-text-secondary'>{row.suspendBy}</span>,
        },
        {
            title: 'BUSINESS NAME',
            render: (row) => <span className='text-[14px] xl:text-base font-normal text-text-secondary'>{row.businessName}</span>,
        },
        {
            title: 'SUSPENDED DATE',
            render: (row) => <span className='text-[14px] xl:text-base font-normal text-text-secondary'>{row.suspendData}</span>,
        },
        // {
        //     title: 'ACTION',
        //     render: (row) => (
        //         <button className='py-2 px-3 text-[13px] font-[500] bg-primary rounded-[10px] text-white'>Unsuspend</button>
        //     ),
        // },
    ];


  return (
    <div>
        <CustomNotHoverTable tableData={tableData} columns={columns} scroll={{x:"800px"}}/>
    </div>
  )
}

export default SuspendedAdminTable