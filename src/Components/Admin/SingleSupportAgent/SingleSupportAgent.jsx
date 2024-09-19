import React from 'react';
import Profile from './Profile';
import AgentInformation from './AgentInformation';
import Overview from './Overview';

const SingleSupportAgent = () => {
    return (
        <div className="mt-[52px]">
        <Profile />
        <div className='mt-[30px] lg2:flex gap-[30px]  mb-[45px]'>
            <div className='w-full lg2:w-2/3'><Overview/></div>
            <div className='w-full mt-[30px] lg2:mt-0 lg2:w-1/3'><AgentInformation/></div>
        </div>
    </div>
    );
};

export default SingleSupportAgent;