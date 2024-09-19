import React from 'react';
import Profile from './Profile';
import FamilyMember from './FamilyMember';
import MembersOverview from './MembersOverview';

const Customers = () => {
    return (
        <div className="mt-[52px]">
            <Profile />
            <div className='mt-[30px] lg2:flex gap-[30px]  mb-[45px]'>
                <div className='w-full lg2:w-2/3'><FamilyMember /></div>
                <div className='w-full mt-[30px] lg2:mt-0 lg2:w-1/3'><MembersOverview/></div>
            </div>

        </div>
    );
};

export default Customers;