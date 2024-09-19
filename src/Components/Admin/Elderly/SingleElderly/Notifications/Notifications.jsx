import React from 'react';
import AllNotifications from './AllNotifications';
import NotificationSetting from './NotificationSetting';

const Notifications = () => {
    return (
        <div className=' grid grid-cols-1 lg2:grid-cols-2 gap-[30px] mb-[45px] mt-7'>
            <div className='w-full'><AllNotifications/></div>
            <div className='w-full'><NotificationSetting/></div>
        </div>
    );
};

export default Notifications;