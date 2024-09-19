import React from 'react';

import { Progress } from 'antd';
import { Icon } from '@iconify/react';
const ProgressOverView = ({waveData}) => {
    const overview = waveData?.overView
    return (
        <div className='py-[18px]'>
            <h1 className='font-semibold text-text-primary text-2xl mb-9'>Daily Overview</h1>
            <div className='grid grid-cols-2 gap-y-6'>
                <div className='flex items-center gap-2'>
                    <div className='relative'>
                        <div className='flex justify-center text-[#4683C4] '><Icon className='absolute top-4 text-2xl' icon="solar:moon-sleep-bold" /></div>
                        <Progress type="circle" showInfo={false} percent={overview.sleepTime.score} size={55} strokeWidth={13} strokeColor={'#4683C4'} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#969BB3] text-base font-medium'>Sleep Time</span>
                        <span className='text-[#4683C4] text-[22px] font-semibold -mt-1'>{overview.sleepTime.main}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='relative'>
                        <div className='flex justify-center text-[#88DB00] '><Icon className='absolute top-4 text-2xl' icon="solar:ranking-bold" /></div>
                        <Progress type="circle" showInfo={false} percent={overview.sleepScore.score} size={55} strokeWidth={13} strokeColor={'#88DB00'} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#969BB3] text-base font-medium'>Sleep Score</span>
                        <span className='text-[#88DB00] text-[22px] font-semibold -mt-1'>{overview.sleepScore.score}%</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='relative'>
                        <div className='flex justify-center text-[#FF5959] '><Icon className='absolute top-4 text-2xl' icon="material-symbols:ecg-heart" /></div>
                        <Progress type="circle" showInfo={false} percent={overview.avgHeartRate.score} size={55} strokeWidth={13} strokeColor={'#FF5959'} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#969BB3] text-base font-medium'>Avg. Heart Rate</span>
                        <span className='text-[#FF5959] text-[22px] font-semibold -mt-1'>{overview.avgHeartRate.main}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='relative'>
                        <div className='flex justify-center text-[#FFBB3E] '><Icon className='absolute top-4 text-2xl' icon="healthicons:lungs" /></div>
                        <Progress type="circle" showInfo={false} percent={overview.avgBreathingRate.score} size={55} strokeWidth={13} strokeColor={'#FFBB3E'} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#969BB3] text-base font-medium'>Avg. Breathing Rate</span>
                        <span className='text-[#FFBB3E] text-[22px] font-semibold -mt-1'>{overview.avgBreathingRate.main}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressOverView;