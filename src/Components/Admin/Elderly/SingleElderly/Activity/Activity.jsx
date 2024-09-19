import React from 'react';
import Trends from '../Overview/InnerOverView/Trends/Trends';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import Video from './Video/Video';
import Chart from './Chart';
import ElderlyFallDetected from './ElderlyFallDetected';

const Activity = () => {
    return (
        <div>
            <div>
                <ElderlyFallDetected/>
            </div>
            <div className='flex flex-col xl:flex-row gap-[30px] mt-5'>
                {/* ------------video-------------- */}
                <div className='w-full xl:w-2/3'>
                    <div className='w-full'>
                        <Video />
                    </div>
                </div>
                {/* ------------elderly conditions chart-------------- */}
                <div className='w-full xl:w-1/3'>
                    <div className='w-full'>
                        <Chart />
                    </div>
                </div>
            </div>
            {/* ------------trends-------------- */}
            <div className='mt-[30px] mb-12'>
                <SectionWrapper>
                    <div className='flex items-center px-[22px] pt-6 pb-[30px] gap-3 border-b'>
                        <h2 className='text-text-primary font-bold text-2xl'>Elderly Trends</h2>
                    </div>
                    <Trends></Trends>

                </SectionWrapper>
            </div>
        </div>
    );
};

export default Activity;