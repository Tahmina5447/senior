import { Icon } from '@iconify/react';
import { Switch } from 'antd';
import React from 'react';

const SubscriptionType = ({ data, plan }) => {
    const handleToggle = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <div>
            {plan === 'essential' ? ''
                :
                <div className='px-7 py-5 mt-5 flex justify-between border border-primary rounded-[20px] bg-primary/10'>
                    <div className='flex items-center gap-[14px]'>
                        {plan==='standard'&&<img className='w-4 h-[25px]' src={'/images/standard.svg'} alt="icon" />}
                        {plan==='premium'&& <img className='w-4 h-[25px]' src={'/images/premium.svg'} alt="icon" />}
                        {plan==='enterprise'&&<img className='w-[30px] h-[28px]' src={'/images/enterprise.svg'} alt="icon" />}
                        <h1 className="text-[#252F67] font-bold text-lg flex items-center">Upgrade to {plan} and Unleash Powerful New Features!</h1>
                    </div>
                    <button className='bg-primary gap-[10px] flex items-center text-white px-3 rounded-[10px] py-2'><Icon icon="basil:lightning-outline" />Upgrade</button>
                </div>}
            <div className='my-5'>
                <h1 className='text-text-primary font-bold text-xl'>Features</h1>
                <p className='text-[#666D90] text-[13px]'>Everything in our {plan} Plan</p>
            </div>
            <div className='grid lg2:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 gap-x-[30px]'>
                {data?.map(d => <div className='flex justify-between text-text-primary text-base items-center py-4 border-b'>
                    <div className='mr-2'>{d?.title}</div>
                    <div className='flex items-center'>
                        {/* <Switch defaultChecked={d.value} onChange={handleToggle} color="primary" disabled={d.category !== 'essential Plan'} /> */}
                        <Switch className='bg-gray-400' defaultChecked={true} onChange={handleToggle} color={"primary"} size={'small'} />
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default SubscriptionType;