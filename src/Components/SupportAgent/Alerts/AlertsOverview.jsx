import React from "react";
import SUpportAgentAlertChart from "./SUpportAgentAlertChart";

const AlertsOverview = () => {
  return (
    <div>
      <h2  className=" text-2xl font-bold text-text-primary">Alerts Overview</h2>
      <div>
        <SUpportAgentAlertChart/>
      </div>
    </div>
  );
};

export default AlertsOverview;
