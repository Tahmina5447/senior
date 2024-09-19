import React from 'react'
import ElderlyTrends from './ElderlyTrends'
import Status from './Status'
import Activities from './Activities'
import Tags from './Tags'
import Task from './task/Task'
import Notes from './notes/Notes'
import ResolvingAlerms from './ResolvingAlerms/ResolvingAlerms'

const Overview = ({ userId }) => {

    return (
        <div className='mt-[30px] mb-12'>
            <div className='xl:flex gap-[30px]'>
                <div className='w-full xl:w-1/3'>
                    <div>
                        <Status userId={userId} />
                    </div>
                    <div className='mt-[30px]'>
                        <Activities />
                    </div>
                </div>
                <div className='w-full xl:w-2/3'>
                    <ElderlyTrends />
                </div>
            </div>
            <div className='xl:flex gap-[30px] mt-[30px]'>
                <div className='w-full xl:w-1/3'><ResolvingAlerms /></div>
                <div className='w-full xl:w-2/3 xl:flex gap-[30px] xl:mt-0 mt-[30px]'>
                    <div className='w-full xl:w-1/2'><Task /></div>
                    <div className='w-full xl:w-1/2'>
                        <div className='xl:mt-0 mt-[30px]'><Notes /></div>
                        <div className='mt-[30px]'><Tags /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview