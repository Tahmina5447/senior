import React, { useState } from "react";
import Sort from "../../Shared/sort/Sort";
import SearchInput from "../../Shared/Search/SearchInput";
import SuspendedAdminTable from "../../Components/SuperAdmin/SuspendedAdmins/SuspendedAdminTable";
import { bandUserData } from "../../assets/admin/data";
import BreadCrumb from "../../Shared/TopHeading/BreadCrumb";
import CreateSuspendModal from "../../Components/SuperAdmin/SuspendedAdmins/CreateSuspendModal";

const SuspendedSuperAdmin = () => {
    const [search, setSearch] = React.useState("");
    const [selected, setSelected] = useState("");
    const [modalOPen,setModalOpen] = useState(false)
    const data = ["Sort", "Name", "Number"]

    const setAdminData = [
        {
            title:"XYZ Solution",
            date:"7 July, 2023; 10:34 PM",
        },
        {
            title:"ABC Company",
            date:"7 July, 2023; 10:34 PM",
        },
        {
            title:"Sihad Limited",
            date:"7 July, 2023; 10:34 PM",
        },
    ]

  return (
    <>
      <BreadCrumb title={"Suspended Admin"} links={[{title:"Home",url:"/super-admin/dashboard"},{title:"Suspended Admin",url:"/super-admin/dashboard/suspended-admin"}]}/>
      <div className=" lg:mt-[-30px] mb-[30px]">
        <div className=" bg-white rounded-2xl py-6 px-[22px] relative">
    
            <div className=" relative z-30">
                <h2 className=" text-dark-black text-2xl font-bold">No admin assigned to those business account !</h2>
                <p className=" text-light-black max-w-[698px] text-base font-medium z-10">Set new admin to those business, To regain control, set a new admin promptly using the <span className=" text-text-primary">"Set New Admin"</span> button. Ensure smooth operations and oversight of the account. Thank you for your attention!</p>
            </div>
            <img src="/images/icon/suspent.svg" alt="" className=" absolute top-0 right-0 z-0"/>

            <div className="pt-8">
                <div className=" grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
                    {setAdminData.map((data,index)=>(
                        <div key={index} className=" py-6 px-6 bg-white hover:shadow-shadowOne rounded-2xl flex items-center justify-between">
                            <div>
                                <p className=" text-light-black font-medium text-[14px]">{data.date}</p>
                                <h2 className=" text-dark-black font-bold text-lg">{data.title}</h2>
                            </div>
                            <div>
                                <button onClick={()=>setModalOpen(true)} className=" py-3 px-4 text-[13px] hover:bg-primary hover:text-white duration-200 font-bold rounded-[10px] text-primary bg-primary/10">Set New Admin</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        <div className=" bg-white rounded-2xl mt-6">
        <div className=" px-[22px] py-6 flex items-start flex-col lg:flex-row justify-between gap-2">
            <div className=" flex items-center justify-between w-full">
              <h2 className=" text-2xl font-bold text-text-primary">Suspended Admins</h2>

              {/* ========show button mobile view===== */}
            </div>
            <div className=" flex items-center justify-end gap-5 w-full">
              {/* =====Search sort and add admin button===== */}
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Admin"
              />
              <Sort selected={selected} setSelected={setSelected} data={data}/>
            </div>
          </div>

          
          {/* ---------admin Data table-------- */}
          <div className=" grid grid-cols-1"> 
            <SuspendedAdminTable tableData={bandUserData} />
          </div>
        </div>
      </div>
        {/* ---------admin set modal-------- */}
      <CreateSuspendModal modalOPen={modalOPen} setModalOpen={setModalOpen}/>
    </>
  );
};

export default SuspendedSuperAdmin;
