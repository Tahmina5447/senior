import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import SectionWrapper from '../../../../../../Shared/SectionWrapper';
import Alarms from './Alarms';
import AlarmHistory from './AlarmHistory';

const ResolvingAlerms = () => {
    // ----------history modal-----------
    const [modalOpen, setModalOpen] = useState(false)
    const data = [
        {
            id: 1,
            type:'bed',alarm: {
                title: 'Bedtime: Hasn’t gone to bed yet',
                description: 'It seems bedtime has eluded you tonight, reminding you to rest and rejuvenate for a brighter tomorrow.',
            },
            time: '06:26 am',
            date: 'June 01, 2023; 06:26',
            resolvedBy: 'Rased'
        },
        {
            id: 2,
            time: '06:26 am',
            type:'out',alarm:{
                
            title: 'Elderly Out The Room More Then Target',
            description: 'It seems bedtime has eluded you tonight, reminding you to rest and rejuvenate for a brighter tomorrow.',
            },
            date: 'June 02, 2023; 06:26',
            resolvedBy: 'You'
        },
        {
            id: 3,
            time: '06:26 am',
            type:'out',alarm:{
                
            title: 'Bedtime: Hasn’t gone to bed yet',
            description: 'It seems bedtime has eluded you tonight, reminding you to rest and rejuvenate for a brighter tomorrow.',
            },
            date: 'June 03, 2023; 06:26',
            resolvedBy: 'You'
        },
        {
            id: 4,
            time: '06:26 am',
            type:'bed',alarm:{
                
            title: 'Elderly Out The Room More Then Target',
            description: 'It seems bedtime has eluded you tonight, reminding you to rest and rejuvenate for a brighter tomorrow.',
            },
            date: 'June 04, 2023; 06:26',
            resolvedBy: 'Rased'
        },
        {
            id: 5,
            time: '06:26 am',
            type:'bed',alarm:{
                
            title: 'Bedtime: Hasn’t gone to bed yet',
            description: 'It seems bedtime has eluded you tonight, reminding you to rest and rejuvenate for a brighter tomorrow.',
            },
            date: 'June 05, 2023; 06:26',
            resolvedBy: 'Rased'
        },
        {
            id: 6,
            time: '06:26 am',
            type:'out',alarm:{
                
            title: 'Elderly Out The Room More Then Target',
            description: 'It seems bedtime has eluded you tonight, reminding you to rest and rejuvenate for a brighter tomorrow.',
            },
            date: 'June 06, 2023; 06:26',
            resolvedBy: 'You'
        },
        {
            id: 7,
            time: '06:26 am',
            type:'out',alarm:{
                
            title: 'Elderly Out The Room More Then Target',
            description: 'It seems bedtime has eluded you tonight, reminding you to rest and rejuvenate for a brighter tomorrow.',
            },
            date: 'June 07, 2023; 06:26',
            resolvedBy: 'You'
        },
    ]
    return (
        <>
            <SectionWrapper>
                <div className='px-[22px] pt-[25px] pb-[22px]'>
                    <div className='flex items-center justify-between'>
                        <h2 className=" text-2xl font-bold text-dark-black">Resolving Alarms</h2>
                        <button onClick={() => setModalOpen(true)} className='p-[7px] bg-primary/10 text-primary rounded-[10px] text-[19px]'><Icon icon="material-symbols:history" /></button>
                    </div>
                    <div>
                        <Alarms data={data} />
                    </div>
                </div>
            </SectionWrapper>
            <AlarmHistory setModalOpen={setModalOpen} modalOPen={modalOpen} data={data} />
        </>
    );
};

export default ResolvingAlerms;