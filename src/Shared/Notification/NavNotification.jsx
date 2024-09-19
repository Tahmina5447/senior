import { Icon } from "@iconify/react";
import { Badge, Popover, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import { NotificationsData } from "../../assets/supportAgentData/alertsData/alerts";

const NavNotification = ({ role }) => {
  const [notificationCount, setNotificationCount] = React.useState(0);
  const [filterNotificationData, setFilterNotificationData] = useState([]);

  useEffect(() => {
    if (NotificationsData.length ) {
        const filterNotificationData = NotificationsData?.filter(notificationItem => notificationItem?.role === role)
        setNotificationCount(filterNotificationData.length)
        setFilterNotificationData(filterNotificationData)
    }
}, [NotificationsData])

  const content = (
    <div className=" ">
      <div className="md:w-[408px] w-[100%]">
        <div className="w-full px-5 py-4 flex items-center justify-between gap-2">
          <h2 className="text-[22px] font-medium text-text-primary">
            Notifications
          </h2>
          <Tooltip placement="left" title={"Mark as read"}>
          <Icon
            icon="radix-icons:envelope-open"
            className="text-[23px] text-secondary cursor-pointer"
          />
          </Tooltip>
        </div>
          <h3 className="tex-[13px] px-5 py-2 font-medium text-[#A3AED0]">Today</h3>

        {/* -------------------------here notification data filter and show ------- */}
        <Notification filterNotificationData={filterNotificationData} role={role} />
      </div>
    </div>
  );

  return (
    <div>
      <Popover content={content} placement="bottomRight" trigger="click">
        <button className=" text-sm flex  w-full items-center gap-2 rounded-[10px] font-medium text-light-black py-2 md:px-0 px-5">
          <Badge size="small" count={notificationCount} offset={[-7, 4]} className="mt-1">
            <Icon
              icon="basil:notification-solid"
              className=" text-light-black text-[25px]"
            />
          </Badge>
          <span className=" flex md:hidden">Notification</span>
        </button>
      </Popover>
    </div>
  );
};

export default NavNotification;
