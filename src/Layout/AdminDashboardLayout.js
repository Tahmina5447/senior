import React, { useContext } from 'react';
import AdminSidebar from '../Components/Admin/adminSidebar/AdminSidebar';
import DashboardNav from '../Components/DashboardNav/DashboardNav';
import { Outlet } from 'react-router-dom';
import { SidebarContext } from '../Context/CustomContext';
import CustomDrawer from '../Shared/Drawer/CustomDrawer';

const AdminDashboardLayout = () => {
    const { sidebarShow, setSidebarShow } = useContext(SidebarContext)
    return (
        <div className=" flex bg-[#F4F7FE]">
            <div className='xl:w-[280px] w-[240px] lg:block hidden'>
                {/* ----------------admin Dashboard sidebar here----------------- */}
                <AdminSidebar />
                <CustomDrawer open={sidebarShow} setOpen={setSidebarShow}>
                    <AdminSidebar />
                </CustomDrawer>

            </div>
            <div className='bg-[#F4F7FE] w-full min-h-[100vh]'>
                {/* Admin dashboard outlet create */}
                <DashboardNav name={"Liam Ketla"} user="Admin" role={"admin"} />
                <div className='xl:px-[30px] px-4 '>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;