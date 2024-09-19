import React from 'react';
import ProgressOverView from './ProgressOverView';
import SleepTimeline from './SleepTimeline';
import BioVitaSammary from './BioVitaSammary';

const DailyOverView = ({waveData}) => {
    return (
        <div>
            <ProgressOverView waveData={waveData} />
            <SleepTimeline waveData={waveData} />
            <BioVitaSammary waveData={waveData} />
        </div>
    );
};

export default DailyOverView;