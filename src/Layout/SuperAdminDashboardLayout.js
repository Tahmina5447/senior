import React, { useContext } from 'react';
import SuperAdminSidebar from '../Components/SuperAdmin/SuperAdminSidebar/SuperAdminSidebar';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../Components/DashboardNav/DashboardNav';
import CustomDrawer from '../Shared/Drawer/CustomDrawer';
import { SidebarContext } from '../Context/CustomContext';

const SuperAdminDashboardLayout = () => {
    const { sidebarShow, setSidebarShow } = useContext(SidebarContext)
    return (
        <div className="flex bg-[#F4F7FE]">
            <div className='xl:w-[280px] w-[240px] lg:block hidden'>
                {/* ----------------admin Dashboard sidebar here----------------- */}
                <SuperAdminSidebar />
                <CustomDrawer open={sidebarShow} setOpen={setSidebarShow}>
                    <SuperAdminSidebar />
                </CustomDrawer>
            </div>
            <div className='bg-[#F4F7FE] w-full min-h-[100vh] '>
                {/* Admin dashboard outlet create */}
                <DashboardNav name={"Jeos Sola"} user="Super Admin" role={"superAdmin"} />
                <div className='xl:px-[30px] px-4 '>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default SuperAdminDashboardLayout;