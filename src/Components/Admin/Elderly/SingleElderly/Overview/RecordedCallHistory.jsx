import { Icon } from '@iconify/react';
import { Modal, Table } from 'antd';
import React from 'react';
import AudioSurfer from './AudioSurfer';

const RecordedCallHistory = ({ setModalOpen, modalOPen }) => {
    const data = [
        {
            id: 1,
            type: '911',
            date: 'June 01, 2023; 12:15',
            record: ''
        },
        {
            id: 2,
            type: '911',
            date: 'June 02, 2023; 12:15',
            record: ''
        },
        {
            id: 3,
            type: 'Family',
            date: 'June 03, 2023; 12:15',
            record: ''
        },
        {
            id: 4,
            type: 'Family',
            date: 'June 04, 2023; 12:15',
            record: ''
        },
        {
            id: 5,
            type: '911',
            date: 'June 05, 2023; 12:15',
            record: ''
        },
        {
            id: 6,
            type: '911',
            date: 'June 06, 2023; 12:15',
            record: ''
        },
        {
            id: 7,
            type: '911',
            date: 'June 07, 2023; 12:15',
            record: ''
        },
    ]


    const [start, setStart] = React.useState(1)
    const [end, setEnd] = React.useState(6)
    const handlePaginationChange = (page, pageSize) => {
        setStart((pre) => page === 1 ? 1 : page * 6 - 5)
        setEnd((pre) => page * 6 > data.length ? data.length : page * 6)
    };

    const paginationConfig = {
        onChange: handlePaginationChange,
        pageSize: 6
    };
    const columns = [

        {
            title: 'DATE',
            width:'250px',
            dataIndex: 'date',
            sorter: (a, b) => {
                const dateA = new Date(a.date.replace(';', ''));
                const dateB = new Date(b.date.replace(';', ''));
                return dateA - dateB;
            },
        },
        {
            title: 'CALL TO',
            width:'150px',
            dataIndex: 'type',
        },
        {
            title: 'CALL RECORD',
            dataIndex: 'record',
            render: (row) => <div>
                <AudioSurfer/>
            </div>
        }

    ]

    return (
        <div>
            <div>
                <Modal
                    centered
                    cancelText
                    cancelButtonProps
                    footer={null}
                    open={modalOPen}
                    closeIcon={null}
                    onOk={() => setModalOpen(false)}
                    onCancel={() => setModalOpen(false)}
                    width={755}
                >

                    <div className="z-[50000000]">
                        <div className=" flex items-center justify-between px-9 pt-6 pb-5 border-b">
                            <h2 className=" text-[24px] font-[700] text-text-primary">
                                Call Recorded History
                            </h2>
                            <button
                                onClick={() => setModalOpen(false)}
                                className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
                            >
                                <Icon icon="material-symbols:close" />
                            </button>
                        </div>
                        <div className="w-full relative  bg-[#ffffff] mt-5 rounded-b-[30px]">
                            <div id='modal-table' className=' relative bg-white  rounded-b-[30px] pb-3'>
                                <Table id="chart-table" columns={columns} dataSource={data} pagination={paginationConfig} />
                                <div className='lg:block bg-white text-[#90969D] font-medium text-[13px] lg:absolute bottom-[28px] left-6 hidden '>Showing {start} to {end} of {data?.length} entries</div>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default RecordedCallHistory;