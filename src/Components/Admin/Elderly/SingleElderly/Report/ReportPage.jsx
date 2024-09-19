import moment from 'moment/moment';
import React from 'react';

const ReportPage = ({ id, selectedTime, data }) => {
    const currentDate = new Date();
    const today = (moment(currentDate)).format('MM/DD/YYYY');
    return (
        <div id={id} className='border rounded-[20px] max-w-[1050px] mx-auto'>
            <div className=' p-[30px]'>
                <div className='lg2:flex md:flex items-center  justify-between'>
                    <div>
                        <img className='w-[138px]' src={'/images/reportLogo.svg'} alt="logo" />
                        {/* <div className='max-w-[325px] mt-5 mb-[30px]'>
                            <h1 className='font-bold text-[22px] text-text-primary'>EldersEye</h1>
                            <p className='text-[13px] text-[#666D90]'>Bracken Business Park, Bracken Rd, Sandyford Business Park, Sandyford, Dublin, 18, Ireland</p>
                        </div> */}
                    </div>
                    <div className='lg2:mt-0 md:mt-0 sm:mt-5'>
                        <p className='font-medium text-text-primary text-lg'>{selectedTime} Report</p>
                        <p><span className='font-medium text-text-primary text-lg'>Report ID: </span><span className='text-[#5D6670] text-lg'>#234234</span></p>
                        <p><span className='font-medium text-text-primary text-lg'>Date: </span><span className=' text-[#5D6670] text-lg'>{today}</span></p>
                    </div>
                </div>
                <div className='mt-5 md:mt-0'>
                    <p className='border-b font-medium text-lg text-text-primary py-2.5'>Elderly Information </p>
                    <div className='mt-5'>
                        <p><span className='font-medium text-lg text-text-primary'>ID: </span><span className='text-[#5D6670] text-lg'>#234234</span></p>
                        <p><span className='font-medium text-lg text-text-primary'>Name: </span><span className=' text-[#5D6670] text-lg'>Isabella Martinez</span></p>
                        <p><span className='font-medium text-lg text-text-primary'>Contact: </span><span className=' text-[#5D6670] text-lg'>555-123-4567</span></p>
                        <p><span className='font-medium text-lg text-text-primary'>Address: </span><span className='text-[#5D6670] text-lg'>123 Main St, Los Angeles, CA, USA</span></p>
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <p className=' font-bold text-xl text-text-primary py-2.5'>Trends Comparison</p>
                    <div className='mt-4 overflow-x-hidden'>
                        <div className='text-[13px]'>
                            <div className='grid grid-cols-3 px-[14px]  text-sm font-bold py-3 mb-3 text-[#ffffff] bg-[#49517A]' style={{ textAlign: "left" }}>
                                <p>Trends</p>
                                <p>Average </p>
                                <p>Last {(selectedTime === 'Monthly' && 'Month') || (selectedTime === 'Weekly' && 'Week')}</p>
                            </div>
                            {data?.map(trend => <div className='grid grid-cols-3 gap-2 text-sm border-b py-2 px-[14px] text-text-primary' style={{ textAlign: "left" }}>
                                <p className='font-bold '>{trend?.title}</p>
                                <p className=''>{trend?.average}</p>
                                <p>{trend?.data}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div >
            <div className='bg-[#EDEDED] rounded-b-xl text-center mt-[655px]'>
                <span className='text-medium text-sm  text-secondary my-2.5'>t: +353 1 437 0142 | e: sales@elderseue.com</span>
            </div>
        </div>

    );
};

export default ReportPage;