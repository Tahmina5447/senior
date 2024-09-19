import React, { useContext } from 'react';
import SectionWrapper from '../../../../../../Shared/SectionWrapper';
import { SidebarContext } from '../../../../../../Context/CustomContext';
import { Icon } from '@iconify/react';
import { waveData } from '../../../../../../assets/singleElderlyData'
import DailyOverView from './DailyOverView/DailyOverView';
import Analysis from './Analysis/Analysis';
const InnerWave = () => {

    const { setDeviceInner } = useContext(SidebarContext)
    return (
        <div className='mt-[30px] mb-12'>
            <SectionWrapper>
                <div className='flex items-center px-[22px] pt-6 pb-[30px] gap-3 border-b'>
                    <button onClick={() => setDeviceInner('')} className='border flex items-center justify-center rounded-full p-2 text-xl text-text-primary/60'><Icon icon="fe:arrow-left" /></button><h2 className='text-[#2B3674] font-bold text-2xl'>Wave – Vital Signs Monitor</h2>
                </div>
                <div className='xl:flex'>
                    <div className='xl:w-1/3 w-full px-6 border-r'>
                        <DailyOverView waveData={waveData} />
                    </div>
                    <div className='xl:w-2/3 w-full'>
                        <Analysis waveData={waveData}/>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default InnerWave;