import React, { useState } from "react";
import SearchInput from "../../../../Shared/Search/SearchInput";
import Sort from "../../../../Shared/sort/Sort";
import AdminDashBoardSupportAgentsTable from "./AdminDashBoardSupportAgentsTable";
import { SupportAgents } from "../../../../assets/admin/data";

const AdminDashBoardSupportAgents = () => {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = useState("");
  const data = ["Top Rated", "Top Name",];
  return (
    <div>
      <div className="px-[22px] flex md:items-center md:flex-row flex-col gap-3 justify-between">
        <h2 className=" text-2xl font-bold text-text-primary">
          Support Agents
        </h2>
        <div className=" flex items-center gap-5">
          <SearchInput
            search={search}
            setSearch={setSearch}
            placeholder="Search Support Agents"
          />
          <Sort width="140px" selected={selected} setSelected={setSelected} data={data} />
        </div>
      </div>

      <div id='add_zoom'   className=" grid grid-cols-1 mt-6">
          <AdminDashBoardSupportAgentsTable tableData={SupportAgents}/>
      </div>
    </div>
  );
};

export default AdminDashBoardSupportAgents;
