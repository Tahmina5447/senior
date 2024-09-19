import React, { useState } from 'react'
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb';
import SearchInput from '../../Shared/Search/SearchInput';
import ElderlyTable from '../../Components/Admin/Elderly/ElderlyTable/ElderlyTable';
import { Elderlies } from '../../assets/admin/data';
import FilterByTag from '../../Shared/FilterByTag/FilterByTag';
import Sort from '../../Shared/sort/Sort';

const SupportAgentsElderly = () => {
    const [search, setSearch] = React.useState("");
    const [selected, setSelected] = useState("");
    const data = ["Sort", "name", "type"]
  
  return (
    <>
    <BreadCrumb title={"Elderly"} links={[{title:"Home",url:"/support-agent/dashboard"},{title:"Elderly",url:"/support-agent/dashboard/elderly"}]}/>

    <div className=" lg:mt-[-30px] mb-[30px]">
    <div className=" bg-white rounded-2xl">
      <div className=" px-[22px] py-6 flex items-start flex-col lg:flex-row justify-between gap-2">
        <div className=" flex items-center justify-between w-full">
          <h2 className=" text-2xl font-bold text-text-primary">Elderlies</h2>
            <div className=' md:hidden block'>
             <Sort selected={selected} setSelected={setSelected} data={data}/>
            </div>
          {/* ========show button mobile view===== */}
        </div>
        <div className=" flex items-center justify-end gap-5 w-full">
          {/* =====Search sort and add admin button===== */}
          <SearchInput
            search={search}
            setSearch={setSearch}
            placeholder="Search Elderly Profiles"
          />
            <div className='hidden md:block'>
             <Sort selected={selected} setSelected={setSelected} data={data}/>
            </div>
          <FilterByTag/>
        </div>
      </div>

      {/* =============Admin Support Agent data table============== */}
      <div className=" grid grid-cols-1"> 
        <ElderlyTable tableData={Elderlies} role={"support-agent"}/>
      </div>
    </div>
  </div>

</>
  )
}

export default SupportAgentsElderly