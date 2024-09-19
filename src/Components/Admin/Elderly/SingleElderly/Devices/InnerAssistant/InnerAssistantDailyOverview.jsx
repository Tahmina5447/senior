import React from 'react'
import DailyOverviewCharts from './DailyOverviewCharts'
import DailyOverviewBar from './DailyOverviewBar'

const InnerAssistantDailyOverview = () => {
  return (
    <div className='py-[18px] px-6'>
        <h2 className='py-[10px]  text-2xl font-semibold text-text-primary'>Daily Overview</h2>
        <div className=' mt-[20px]'>
            <DailyOverviewCharts/>
        </div>
        <div className=' mt-[35px]'>
          <DailyOverviewBar/>
        </div>
    </div>
  )
}

export default InnerAssistantDailyOverview