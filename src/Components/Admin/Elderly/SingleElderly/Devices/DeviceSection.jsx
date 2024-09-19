import React, { useState } from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import { Icon } from '@iconify/react';
import { Tabs } from 'antd';
import AllDevices from './AllDevices';
import { devicesData } from '../../../../../assets/singleElderlyData'
import AddDevice from './AddDevice';

const DeviceSection = () => {
    let All = <span>All {devicesData.length < 10 ? <span className='text-[13px] px-1 rounded-full bg-gray-300'>
        0{devicesData.length}
    </span> : <span className='text-[13px] px-1 rounded-full bg-gray-300'>
        {devicesData.length}
    </span>} </span>
    // ----------modal for add device----------------
    const [modalOpen, setModalOpen] = useState(false)

    const tabData = [
        {
            id: 1,
            icon: <Icon icon="lucide:bar-chart" />,
            title: All,
            children: <AllDevices data={devicesData} />
        },
        {
            id: 2,
            icon: <Icon icon="basil:explore-outline" />,
            title: 'Living Room',
            children: <AllDevices data={devicesData.filter((living) => living.room.includes('living'))} />
        },
        {
            id: 3,
            icon: <Icon icon="tabler:device-tv" />,
            title: 'Dining Room',
            children:  <AllDevices data={devicesData.filter((living)=>living.room.includes('dining'))} />
        },
        {
            id: 4,
            icon: <Icon icon="quill:creditcard" />,
            title: 'Bed Room',
            children: <AllDevices data={devicesData.filter((living)=>living.room.includes('bed'))} />
        },
        {
            id: 5,
            icon: <Icon icon="ion:notifications-outline" />,
            title: 'Kitchen Room',
            children: <AllDevices data={devicesData.filter((living)=>living.room.includes('kitchen'))} />
        },
        {
            id: 6,
            icon: <Icon icon="majesticons:users-line" />,
            title: 'Bathroom',
            children: <AllDevices data={devicesData.filter((living)=>living.room.includes('bath'))} />
        },
        {
            id: 7,
            icon: <Icon className='' icon="fluent:history-20-filled" />,
            title: 'Garage',
            children: <AllDevices data={devicesData.filter((data)=>data.room.includes('garage'))} />
        },
        {
            id: 8,
            icon: <Icon className='' icon="fluent:history-20-filled" />,
            title: 'Children',
            children:<AllDevices data={devicesData.filter((data)=>data.room.includes('children'))} />
        },
    ]

    return (
        <>
            <SectionWrapper>
                <div className='px-[22px] py-6'>
                    <div className='mb-5 flex items-center justify-between'>
                        <span className='text-dark-black text-[23px] font-bold'>Devices</span>
                        <button onClick={() => setModalOpen(true)} className='flex items-center font-medium text-primary bg-primary/10 px-4 py-[7px] rounded-[10px]'><span className='text-[19px]'><Icon icon="ic:sharp-add" /></span> <span className='text-[13px]'>Add Device</span></button>
                    </div>
                    <div className='p-[18px] rounded-[30px] bg-[#F6F8FF]'>
                        {/* ---------tabs------------ */}
                        <div className=''>
                            <div id='device'>
                                <Tabs
                                    defaultActiveKey="1"
                                    items={tabData.map((tab) => {
                                        return {
                                            label: (
                                                <span className={`flex items-center`}>
                                                    {tab.title}
                                                </span>
                                            ),
                                            key: `${tab.id}`,
                                            children: tab.children,
                                        };
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </SectionWrapper>
            {/* --------------------modal for add device--------------------- */}
            <AddDevice setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </>
    );
};

export default DeviceSection;