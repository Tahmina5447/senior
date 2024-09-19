import React from 'react'
import SearchInput from '../../../../Shared/Search/SearchInput';
import FilterByTag from '../../../../Shared/FilterByTag/FilterByTag';
import AdminDashBoardElderliesTables from './AdminDashBoardElderliesTables';
import { Elderlies } from '../../../../assets/admin/data';

const AdminDashBoardElderlies = () => {
    const [search, setSearch] = React.useState("");

  return (
    <div>
      <div className="px-[22px] flex md:items-center md:flex-row flex-col gap-3 justify-between">
        <h2 className=" text-2xl font-bold text-text-primary">
            Elderlies
        </h2>
        <div className=" flex items-center gap-5">
          <SearchInput
            search={search}
            setSearch={setSearch}
            placeholder="Search Support Agent"
          />
          <FilterByTag/>
        </div>
      </div>

      <div id='add_zoom' className=" grid grid-cols-1 mt-6">
          <AdminDashBoardElderliesTables tableData={Elderlies}/>
      </div>
    </div>
  )
}

export default AdminDashBoardElderlies