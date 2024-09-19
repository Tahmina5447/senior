
import { useState } from 'react';
import OverViewChart from '../OverViewChart/OverViewChart';
import OverviewTrends from '../OverviewTrends';
const AllOverview = ({ trendsData, chartData }) => {
    const [handleTrendClick, setHandleTrendClick] = useState(false)


    const scrollToSecond = () => {
        const secondElement = document.querySelector('.second');
        if (secondElement) {
            window.scrollTo({
                top: secondElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };



    return (
        <div className='xl:flex  rounded-b-[30px]'>
            <div id='add_zoom_90' className='w-full xl:w-1/3 '>
                <OverviewTrends scrollToSecond={scrollToSecond} setHandleTrendClick={setHandleTrendClick} overviewData={trendsData}></OverviewTrends>
            </div>
            <div className='md:h-[120vh] xxl:h-[95vh] xl:w-2/3  border-l mt-0 xl:-mt-[150px]  second  overflow-y-auto'>
                <OverViewChart handleTrendClick={handleTrendClick} data={chartData}></OverViewChart>
            </div>
        </div>
    );
};

export default AllOverview;
