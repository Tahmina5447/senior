import React, { useEffect, useState } from "react";
import SearchInput from "../../../Shared/Search/SearchInput";
import AlertsTable from "./AlertsTable";
import { alertsData } from "../../../assets/admin/data";
import AlartsSort from "../../../Shared/sort/AlartsSort";

const AllAlerts = () => {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = useState("All Alert");
  const [alerts,setAlerts] = useState(alertsData)
  const data = ["All Alert", "Problem","Warning","Critical"];

  useEffect(()=>{

    if(selected==="All Alert"){
      setAlerts(alertsData)
    }else{
      const filterData = alertsData.filter(alert =>alert.alert===selected)
      setAlerts(filterData)
    }

  },[selected])

  return (
    <div>
      <div className="px-[22px] flex md:items-center md:flex-row flex-col gap-3 justify-between">
        <h2 className=" text-2xl font-bold text-dark-black">
            Alerts
        </h2>
        <div className=" flex items-center gap-5">
          <SearchInput
            search={search}
            setSearch={setSearch}
            placeholder="Search Support Agent"
          />
          <AlartsSort
            width="140px"
            selected={selected}
            setSelected={setSelected}
            data={data}
          />
        </div>
      </div>

      <div className=" grid grid-cols-1 mt-6">
        <AlertsTable tableData={alerts}/>
      </div>
    </div>
  );
};

export default AllAlerts;
