import React, { useState } from 'react'
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb'
import CustomButton from '../../Shared/button/CustomButton'
import { Icon } from '@iconify/react';
import SearchInput from '../../Shared/Search/SearchInput';
import Sort from '../../Shared/sort/Sort';
import AdminSupportAgentTable from '../../Components/Admin/AdminSupportAgent/AdminSupportAgentTable';
import { SupportAgents } from '../../assets/admin/data';
import CreateAdminSupportAgent from '../../Components/Admin/AdminSupportAgent/CreateAdminSupportAgent';

const AdminSupportAgents = () => {
  const [search, setSearch] = React.useState("");
  const [modalOPen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState("");
  const data = ["Sort", "Name", "Number"]


  const handelOpenModal = () => {
    setModalOpen(true)
  }
  return (
    <>
      <BreadCrumb title={"Support Agents"} links={[{ title: "Home", url: "/admin/dashboard" }, { title: "Support Agents", url: "/admin/dashboard/Support-Agents" }]} />

      <div className=" lg:mt-[-30px] mb-[30px]">
        <div className=" bg-white rounded-2xl">
          <div className=" px-[22px] py-6 flex items-start flex-col lg:flex-row justify-between gap-2">
            <div className=" flex items-center justify-between w-full">
              <h2 className=" text-2xl font-bold text-text-primary">Support Agents</h2>

              {/* ========show button mobile view===== */}
              <CustomButton onClick={() => handelOpenModal()} className={" lg:hidden flex"}>
                <Icon icon="ic:baseline-add" className=" text-xl mr-1" />{" "}
                Create
              </CustomButton>
            </div>
            <div className=" flex items-center justify-end gap-5 w-full">
              {/* =====Search sort and add admin button===== */}
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Support Agent"
              />
              <Sort selected={selected} setSelected={setSelected} data={data} />
              <CustomButton onClick={() => handelOpenModal()} className={" hidden lg:flex min-w-[80px]"}>
                <Icon icon="ic:baseline-add" className=" text-xl mr-1" />{" "}
                Create
              </CustomButton>
            </div>
          </div>

          {/* =============Admin Support Agent data table============== */}
          <div className=" grid grid-cols-1">
            <AdminSupportAgentTable tableData={SupportAgents} />
          </div>
        </div>
      </div>
      {/* ---------Create new Support Agent-------- */}
      <CreateAdminSupportAgent modalOPen={modalOPen} setModalOpen={setModalOpen} />
    </>
  )
}

export default AdminSupportAgents