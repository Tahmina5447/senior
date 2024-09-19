import { Popover } from 'antd';
import React, { useState } from 'react';
import DeleteModal from '../../../../../Shared/delete/DeleteModal';
import { Icon } from '@iconify/react';

const TableActions = ({ data, removeMember, setMemberId }) => {
    const [popupShow, setPopupShow] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const handleOpenChange = (newOpen) => {
        setPopupShow(newOpen);
    };
    const content = (
        <div className=" w-[190px]">
            <button disabled={data.role === 'admin'} className={`${data.role==='admin'&&'cursor-not-allowed'} text-sm flex  w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#252F67] py-3 px-5`}>Make Admin</button>
            <button disabled={data.role === 'admin'} onClick={() => { setDeleteModal(true);; setPopupShow(false); setMemberId(data?.id) }} className={`${data.role==='admin'&&'cursor-not-allowed'} text-sm w-full flex  items-start rounded-[10px] font-medium text-light-black hover:bg-danger/10 hover:text-danger py-3 px-5`}>Delete Member</button>
        </div>
    );

    return (
        <>
            <div>
                <div>
                    <Popover open={popupShow} onOpenChange={handleOpenChange} content={content} placement="leftTop" trigger="click">
                        <button disabled={data?.role==='admin'} className={` hover:bg-primary/10 rounded-full w-[40px] h-[40px] flex items-center justify-center ${data?.role==='admin'&&'cursor-not-allowed'}`}><Icon icon="basil:other-2-outline" className=" text-[35px]" /></button>
                    </Popover>
                </div>
            </div>
            <DeleteModal onDelete={() => removeMember()} modalOPen={deleteModal} setModalOpen={setDeleteModal} title={"Are you sure to delete this member?"} title2={" Process can be undo."} />
        </>
    );
};

export default TableActions;