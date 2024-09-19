import OverViewChart from '../OverViewChart/OverViewChart';
import OverviewTrends from '../../../../../../../../Components/OverviewTrends';
import { useState } from 'react';
const AverageOverview = ({overviewData}) => {
    const [data, setData] = useState(overviewData[0])
    const handleTrend = (e) => {
        setData(e)
    }
    const chartInfo = {
        handleTrend,
        data
    }
    return (
        <div className='lg:flex'>
            <OverviewTrends chartInfo={chartInfo} overviewData={overviewData}></OverviewTrends>
            <div className='lg:w-2/3 lg:mt-[-54px] md:mt-7 sm:mt-7'><OverViewChart data={data}></OverViewChart></div>
        </div>
    );
};

export default AverageOverview;
