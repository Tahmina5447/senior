import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LogOutModal from "../../../Shared/LogOut/LogOutModal";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const path = useLocation();
  const [show, setShow] = useState(false);

  const handelLogout = () => {
    navigate("/");
  };

  const activeStyle = {
    color: "#fff",
    borderLeft: "2px solid #FFF",
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.00) 104.88%)",
  };
  return (
    <>
      <div className="flex flex-col justify-between bg-[#252F67] h-[100vh] sticky top-0">
        <section className="w-[280px] ">
          <div className="h-[80px] flex mt-5 items-center justify-center">
            {" "}
            <img
              src="/images/sidebarlogo.svg"
              alt="logo"
              className="max-w-[143px] mx-auto"
            />
          </div>
          {/* sidebar menu bar */}
          <div className="py-4 grid gap-1">
            <NavLink
              to={"/admin/dashboard"}
              id="sidebar_hover"
              className="block p-4 duration-150 text-white/60"
              style={
                path.pathname === "/admin/dashboard" ? activeStyle : undefined
              }
            >
              <div className="flex item-center gap-2 font-bold">
                <span>
                  <Icon className=" w-5 h-5" icon="basil:chart-pie-outline" />
                </span>
                <p className="text-[16px] font-[500]">Dashboard</p>
              </div>
            </NavLink>
            <NavLink
              to={"/admin/dashboard/Support-Agents"}
              id="sidebar_hover"
              className="block p-4 duration-150 text-white/60"
              style={
                path.pathname.slice(0, 31) === "/admin/dashboard/Support-Agents"
                  ? activeStyle
                  : undefined
              }
            >
              <div className="flex item-center gap-2 font-bold">
                <span>
                  <Icon className=" w-5 h-5" icon="basil:folder-user-outline" />
                </span>
                <p className="text-[16px] font-[500]">Support Agents</p>
              </div>
            </NavLink>
            <NavLink
              to={"/admin/dashboard/elderly"}
              id="sidebar_hover"
              className="block p-4 duration-150 text-white/60"
              style={
                path.pathname.slice(0, 24) === "/admin/dashboard/elderly"
                  ? activeStyle
                  : undefined
              }
            >
              <div className="flex item-center gap-2 font-bold">
                <span>
                  <Icon className=" w-5 h-5" icon="basil:user-outline" />
                </span>
                <p className="text-[16px] font-[500]">Elderly</p>
              </div>
            </NavLink>
          </div>
        </section>

        <div>
          <div className="flex justify-between items-center group p-4">
            <button
              onClick={() => setShow(true)}
              className="flex gap-2 w-full py-1 cursor-pointer justify-between rounded-[8px] px-3 bg_color_gradient  items-center"
            >
              <p className="text-[16px] font-[500] text-white">Log out</p>
              <span className=" text-white w-[40px] flex items-center justify-center rounded-full h-[40px]">
                <Icon icon="humbleicons:logout" className=" text-[25px]" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <LogOutModal   modalOPen={show} setModalOpen={setShow} onDelete={handelLogout} />
    </>
  );
};

export default AdminSidebar;
