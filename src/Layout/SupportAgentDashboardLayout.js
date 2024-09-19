import React, { useContext } from 'react';
import DashboardNav from '../Components/DashboardNav/DashboardNav';
import { Outlet } from 'react-router-dom';
import SupportAgentSidebar from '../Components/SupportAgent/SupportAgentSidebar/SupportAgentSidebar';
import { SidebarContext } from '../Context/CustomContext';
import CustomDrawer from '../Shared/Drawer/CustomDrawer';

const SupportAgentDashboardLayout = () => {
    const { sidebarShow, setSidebarShow } = useContext(SidebarContext)
    return (
        <div className="flex bg-[#F4F7FE]">
            <div className='xl:w-[280px] w-[240px] lg:block hidden'>
                {/* ----------------admin Dashboard sidebar here----------------- */}
                <SupportAgentSidebar />
                <CustomDrawer open={sidebarShow} setOpen={setSidebarShow}>
                    <SupportAgentSidebar />
                </CustomDrawer>

            </div>
            <div className='bg-[#F4F7FE] w-full min-h-[100vh] '>
                {/* Admin dashboard outlet create */}
                <DashboardNav name={"Liam Ketla"} user="Support Agent" role={"supportAgent"} />
                <div className='xl:px-[30px] px-4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default SupportAgentDashboardLayout;