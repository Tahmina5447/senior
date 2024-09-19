import { Icon } from '@iconify/react';
import { Steps } from 'antd';
import React, { useEffect, useState } from 'react';

const Step = ({added,setAdded,setcontinueWith}) => {
    const [syncingStatus, setSyncingStatus] = useState('wait')
    const [initializingStatus, setInitializingStatus] = useState('wait')
    

    const items = [
        {
            title: <span className='font-bold text-primary'>Scanning</span>,
            status: 'finish',
            icon: <div className='h-[25px] w-[25px] rounded-full bg-primary'><Icon className=' text-white flex items-center' icon="material-symbols:done" /></div>
        },
        {
            title: <span className={`font-bold ${syncingStatus === 'finish' ? 'text-primary' : 'text-primary/30'}`}>Syncing</span>,
            status: syncingStatus,
            icon: <div className={`h-[25px] w-[25px] rounded-full ${syncingStatus === 'finish' ? 'bg-primary' : 'bg-primary/30 '}`} > <Icon className='text-white flex items-center' icon="material-symbols:done" /></div>
        },
        {
            title: <span className={`font-bold ${initializingStatus === 'finish' ? 'text-primary' : 'text-primary/30'}`}>Initializing</span>,
            status: initializingStatus,
            icon: <div className={`h-[25px] w-[25px] rounded-full ${initializingStatus === 'finish' ? 'bg-primary' : 'bg-primary/30'}`} > <Icon className='text-white flex items-center' icon="material-symbols:done" /></div>
        }
    ];
    useEffect(() => {
        const syncingTimeout = setTimeout(() => {
            setSyncingStatus('finish');
        }, 3000);
        const initializingTimeout = setTimeout(() => {
            setInitializingStatus('finish');
        }, 5000);
        const doneTimeout = setTimeout(() => {
            setAdded(true);
            setcontinueWith(false)
        }, 7000);
        return () => {
            clearTimeout(syncingTimeout, initializingTimeout, doneTimeout);
        };
    }, []);
    return (
        <div className='ml-9  md:ml-0'>
            <Steps items={items} labelPlacement="vertical"></Steps>
        </div>
    );
};

export default Step;