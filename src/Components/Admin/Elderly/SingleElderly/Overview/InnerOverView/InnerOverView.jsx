import { Icon } from '@iconify/react';
import React, { useContext } from 'react';
import Trends from './Trends/Trends';
import SectionWrapper from '../../../../../../Shared/SectionWrapper';
import { SidebarContext } from '../../../../../../Context/CustomContext';

const InnerOverView = () => {

    const { setinnerOverView } = useContext(SidebarContext)
    return (
        <div id='add_zoom' className='mt-[30px] mb-5 '>
            <SectionWrapper>
                <div className='flex items-center px-[22px] pt-6 pb-[30px] gap-3 border-b '>
                    <button onClick={() => setinnerOverView(true)} className='border flex items-center justify-center rounded-full p-2 text-xl text-text-primary/60'><Icon icon="fe:arrow-left" /></button><h2 className='text-text-primary font-bold text-2xl'>Elderly Trends</h2>
                </div>
                <Trends></Trends>

            </SectionWrapper>
        </div>
    );
};
export default InnerOverView;