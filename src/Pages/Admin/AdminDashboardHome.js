import React from 'react';
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb';
import TopSupportAgents from '../../Components/Admin/AdminDashBoaed/TopSupportAgents';
import AlertsOverview from '../../Components/Admin/AdminDashBoaed/AlertsOverview';
import ElderliesOverview from '../../Components/Admin/AdminDashBoaed/ElderliesOverview/ElderliesOverview';
import AdminDashBoardSupportAgents from '../../Components/Admin/AdminDashBoaed/AdminDashBoardSupportAgents/AdminDashBoardSupportAgents';
import AdminDashBoardElderlies from '../../Components/Admin/AdminDashBoaed/AdminDashBoardElderlies/AdminDashBoardElderlies';

const AdminDashboardHome = () => {
    return (
        <>
            <BreadCrumb title={"Dashboard"} links={[{ title: "Home", url: "/admin/dashboard" }, { title: "Dashboard", url: "/admin/dashboard" }]} />
            <div className=" lg:mt-[-30px] mb-[30px]">
                <div className='flex items-start gap-[30px] lg:flex-row flex-col justify-between'>
                    <div className='lg:w-[65%] w-full '>
                        <div className=' bg-white py-[30px] rounded-[20px] px-[22px]'>
                            <TopSupportAgents />
                        </div>
                        <div className=' bg-white py-[30px] rounded-[20px] px-[22px] mt-[30px]'>
                            <AlertsOverview />
                        </div>
                    </div>
                    <div className='lg:w-[35%] w-full '>
                        <div id='admin-overview' className=' bg-primary py-[30px] h-[850px] rounded-[20px] px-[22px]'>
                            <ElderliesOverview />
                        </div>
                    </div>
                </div>

                <div className=' flex items-start flex-col lg2:flex-row justify-between gap-[30px]'>
                    <div className=' bg-white w-full pt-[30px] rounded-[20px] mt-[30px]'>
                        <AdminDashBoardSupportAgents />
                    </div>
                    <div className=' bg-white w-full pt-[30px] rounded-[20px]  mt-[30px]'>
                        <AdminDashBoardElderlies />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboardHome;