import React, { useState } from 'react';
import CustomSelect from '../../../../../Shared/sort/CustomSelect';

const AddRoom = () => {
    const [roomName,setRoomName]=useState()
    const [roomType,setRoomType]=useState()
    const rooms=['My Living Room','My Dining Room','My Bed Room']
    const names=['Living Room','Dining Room','Bed Room']
    return (
        <div className='mt-[38px] flex flex-col gap-4'>
            <div>
                <p className='text-text-primary text-[13px] font-medium mb-1.5'>Room Name</p>
                <CustomSelect width={"max-w-[520px]"} className={" rounded-[16px] w-full text-base outline-none text-text-primary h-[50px] border-[1px] focus:border-primary "} selected={roomName} setSelected={setRoomName} data={rooms}/>
            </div>
            <div>
            <p className='text-text-primary text-[13px] font-medium mb-1.5'>Room Type</p>
                <CustomSelect width={"max-w-[520px]"} className={" rounded-[16px] w-full text-base outline-none text-text-primary h-[50px] border-[1px] focus:border-primary "} selected={roomType} setSelected={setRoomType} data={names} />
            </div>
        </div>
    );
};

export default AddRoom;