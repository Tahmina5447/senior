import React, { useState } from 'react';
import { customerTable } from "../../../../../assets/singleElderlyData";
import { Icon } from '@iconify/react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import CustomButton from '../../../../../Shared/button/CustomButton';
import TableActions from './TableActions';
import CustomModal from '../../../../../Shared/modal/CustomModal';
import AddFamilyMember from './AddFamilyMember';
import CustomNotHoverTable from '../../../../../Shared/Table/CustomNotHoverTable';
const FamilyMember = () => {
    const [tableData, setTableData] = useState(customerTable);
    const [memberId, setMemberId] = useState(null)
    // ------------modal for add member-----------------
    const [modalOpen, setModalOpen] = useState(false)
    const removeMember = () => {
        const updatedTableData = tableData.filter(member => member.id !== memberId);
        setTableData(updatedTableData);
    };
    const columns = [
        {
            title: 'NAME',
            render: (row) => <span className=' text-base font-normal text-text-secondary flex items-center gap-2.5'><span>{row.name}</span>{row?.role && <span className='text-primary bg-primary/10 text-[13px] py-[3px] px-1.5 rounded-lg'>Admin</span>}</span>
        },
        {
            title: 'RELATION',
            render: (row) => <span className=' text-base font-normal text-text-secondary'>{row.relation}</span>,
        },
        {
            title: 'CONTACT NUMBER',
            render: (row) => <span className='text-base font-normal text-text-secondary'>{row.contact}</span>,
        },
        {
            title: 'AGE',
            render: (row) => <span className='text-base font-normal text-text-secondary'>{row.age}</span>,
        },
        {
            title: 'BLOOD GROUP',
            render: (row) => <span className=' text-base font-normal text-text-secondary'>{row.blood}</span>
        },
        {
            title: '',
            key: 'id',
            render: (row) => (
                <TableActions setMemberId={setMemberId} removeMember={removeMember} data={row} />
            )
            // render: (row) => <span className=' text-base font-normal text-text-secondary'><Icon icon="bi:three-dots-vertical" /></span>
        }
    ];
    return (
        <>
            <SectionWrapper>
                <div className='flex items-center justify-between px-[22px] pt-[22px] pb-5'>
                    <span className='text-2xl font-bold text-text-primary'>Family Members</span>
                    <CustomButton onClick={() => setModalOpen(true)}>
                        <span className='flex gap-1 items-center'>
                            <span><Icon icon="ic:twotone-add" /></span>
                            <span>Add Member</span>
                        </span>
                    </CustomButton>
                </div>
                <CustomNotHoverTable tableData={tableData} columns={columns} scroll={{ x: "750px" }} show={8} />
            </SectionWrapper>
            <CustomModal
                modalOPen={modalOpen}
                setModalOpen={setModalOpen}
                width='590px'
                className=''
                title={"Add Member"}
                buttonText={'Add Member'}
            >
                <AddFamilyMember />
            </CustomModal>
        </>
    );
};

export default FamilyMember;