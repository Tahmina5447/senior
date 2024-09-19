import React from 'react';
import DeviceSection from './DeviceSection';
import RoomSection from './RoomSection';

const Devices = () => {
    return (
        <div className='lg2:flex  gap-[30px] mt-9 mb-[45px]' >
            <div className='w-full lg2:w-2/3'><DeviceSection/></div>
            <div className='w-full lg2:w-1/3'><RoomSection/></div>
        </div>
    );
};

export default Devices;