import React, { useContext, useState } from 'react'
import SectionWrapper from '../../../../../Shared/SectionWrapper'
import { trendsData } from '../../../../../assets/singleElderlyData'
import { Icon } from '@iconify/react'
import { SidebarContext } from '../../../../../Context/CustomContext'

const ElderlyTrends = () => {
  const { setinnerOverView, setActiveTrend } = useContext(SidebarContext)
  const averageTrends = trendsData.filter((data) => data.category === 'Average')
  const warningTrends = trendsData.filter((data) => data.category === 'Warning')
  const criticalTrends = trendsData.filter((data) => data.category === 'Critical')
  const [loadAverage, setLoadAverage] = useState(4)
  const [loadwarning, setLoadwarning] = useState(4)
  const [loadCritical, setLoadCritical] = useState(4)

  const handleTrend = (title) => {
    setActiveTrend(title)
    setinnerOverView(false)

  }
  return (
    <>
      <SectionWrapper>
        <div className='py-6 px-4'>
          <h2 className='px-[22px] text-text-primary font-bold text-2xl mb-5'>Elderly Trends</h2>
          <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
            {/* -----------------------average trends---------------------- */}
            <div className=''>
              <div className=' bg-Average w-full h-[4px] rounded-[18px]'></div>
              <div className='mt-[8px]'>
                <h2 className=' text-[19px] font-bold text-text-primary'>Average</h2>
                <p className=' text-[13px] font-normal text-text-primary/60 min-h-[40px]'>Everything is stable with elderly trends.</p>
              </div>
              <div className='mt-6 '>
                <div className='flex flex-col gap-[14px] max-h-[610px] overflow-y-auto'>
                  {
                    averageTrends.slice(0, loadAverage).map((trend, index) => <>
                      <button onClick={() => handleTrend({ title: trend?.title, index: trend.id })}>
                        <div className='border rounded-[18px] p-[14px]'>
                          <div className='flex items-center gap-2 pb-2.5 border-b'>
                            <span className='bg-Average text-white p-2.5 rounded-[10px] text-[19px]'>
                              {trend.title === 'Fall Detection' && (<Icon icon="material-symbols:falling-rounded" />)}
                              {trend.title === 'Sleep Score' && (<Icon icon="icon-park-solid:sleep" />)}
                              {trend.title === 'Abnormal Sleep' && (<Icon icon="material-symbols-light:respiratory-rate-rounded" />)}
                              {trend.title === 'Abnormal Biorhythm' && (<Icon icon="material-symbols-light:respiratory-rate-rounded" />)}
                              {trend.title === 'Not in bed' && (<Icon icon="lets-icons:bed" />)}
                              {trend.title === 'Sleep Monitoring' && (<Icon icon="fa6-solid:bed-pulse" />)}
                              {trend.title === 'Breath Rate' && (<Icon icon="healthicons:lungs" />)}
                              {trend.title === 'Heart Rate' && (<img className='h-[19px] w-[19px]' src={'/images/heart2.svg'} alt='icon' />)}
                              {trend.title === 'Nutrition' && (<Icon icon="icon-park-solid:cook" />)}
                              {trend.title === 'Frequent Toileting' && (<img className='h-[19px] w-[19px]' src={'/images/toilet2.svg'} alt='icon' />)}
                              {trend.title === 'Extended Toileting' && (<Icon icon="ph:toilet-fill" />)}
                              {trend.title === 'Wandering at Day' && (<img className='h-[19px] w-[19px]' src={'/images/dayWork2.svg'} alt='icon' />)}
                              {trend.title === 'Bedtime' && (<Icon icon="lets-icons:bed-light" />)}
                              {trend.title === 'Sedentary' && (<img className='h-[19px] w-[19px]' src={'/images/sitting2.svg'} alt='icon' />)}
                              {trend.title === 'Wandering at Night' && (<img className='h-[19px] w-[19px]' src={'/images/nightRun2.svg'} alt='icon' />)}
                              {trend.title === 'Frequent Night Activity' && (<img className='h-[19px] w-[19px]' src={'/images/nightAcitivity2.svg'} alt='icon' />)}
                              {trend.title === 'Oversleeping' && (<Icon icon="solar:sleeping-bold" />)}
                              {trend.title === 'Surveillance Mode' && (<Icon icon="mdi:camera-party-mode" />)}
                              {trend.title === 'Device Offline' && (<Icon icon="heroicons-outline:status-offline" />)}
                            </span>
                            <div className=' text-start'>
                              <p className='text-text-primary font-medium text-[19px]'>{trend.title}</p>
                              <p className='text-[13px] -mt-1 text-text-primary/60'>{trend.subTitle}</p>
                            </div>
                          </div>
                          <div className='mt-2.5 flex items-center justify-between flex-wrap gap-4'>
                            <span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-base'><Icon icon="streamline:target-solid" /></span>
                                <span className='text-[15px] font-medium '>{trend.target}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 's' && <span>s</span>
                                  }
                                  {
                                    trend.type === 'bpm' && <span>bpm</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  {
                                    trend.type === 'm' && <span>m</span>
                                  }
                                  <span className='ml-1'>Target</span></span>
                              </span>
                              <span className='flex items-center gap-1 text-text-secondary'>
                                <img src={'/images/avrg.svg'} alt="" />
                                <span className='text-[15px] font-medium '>{trend.present}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 's' && <span>s</span>
                                  }
                                  {
                                    trend.type === 'bpm' && <span>bpm</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  {
                                    trend.type === 'm' && <span>m</span>
                                  }
                                </span>
                              </span>
                            </span>
                            <span className='flex flex-col'>
                              <span className='flex items-center justify-center text-Average text-xl font-bold gap-1'>
                                <img src={'/images/avrg2.svg'} alt="" />
                                <span>
                                  {Number(trend.present) > Number(trend.target) ? '+' : '-'}
                                  {trend.diff}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 's' && <span>s</span>
                                  }
                                  {
                                    trend.type === 'bpm' && <span>bpm</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  {
                                    trend.type === 'm' && <span>m</span>
                                  }
                                </span>
                              </span>
                              <span className='text-[13px] font-normal text-text-primary/50'>
                                {Number(trend.present) > Number(trend.target) ? 'More ' : 'Less '}
                                Than Target
                              </span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </>)
                  }
                </div>
                {
                  (averageTrends.length > 4 && averageTrends.length > loadAverage) && <>
                    <button onClick={() => setLoadAverage(averageTrends.length)} className='border mt-[14px] rounded-lg p-2.5 w-full flex items-center justify-center gap-1 text-[13px] font-normal text-text-primary/50'>Load More <span><Icon className='text-lg' icon="ant-design:arrow-down-outlined" /></span></button>
                  </>
                }
              </div>
            </div>
            {/* -------------------------warning trends-------------------- */}
            <div className=''>
              <div className=' bg-Warning w-full h-[4px] rounded-[18px]'></div>
              <div className='mt-[8px]'>
                <h2 className=' text-[19px] font-bold text-text-primary'>Warning</h2>
                <p className=' text-[13px] font-normal text-text-primary/60 min-h-[40px]'>Emerging concerns in elderly trends, monitor closely.</p>
              </div>
              <div className='mt-6 '>
                <div className='flex flex-col gap-[14px] max-h-[610px] overflow-y-auto'>
                  {
                    warningTrends.slice(0, loadwarning).map((trend, index) => <>
                      <button onClick={() => handleTrend({ title: trend?.title, index: trend.id })}>
                        <div className='border rounded-[18px] p-[14px]'>
                          <div className='flex items-center gap-2 border-b pb-2.5'>
                            <span className='bg-Warning text-white p-2.5 rounded-[10px] text-[19px]'>
                              {trend.title === 'Fall Detection' && (<Icon icon="material-symbols:falling-rounded" />)}
                              {trend.title === 'Sleep Score' && (<Icon icon="icon-park-solid:sleep" />)}
                              {trend.title === 'Abnormal Sleep' && (<Icon icon="material-symbols-light:respiratory-rate-rounded" />)}
                              {trend.title === 'Abnormal Biorhythm' && (<Icon icon="material-symbols-light:respiratory-rate-rounded" />)}
                              {trend.title === 'Not in bed' && (<Icon icon="lets-icons:bed" />)}
                              {trend.title === 'Sleep Monitoring' && (<Icon icon="fa6-solid:bed-pulse" />)}
                              {trend.title === 'Breath Rate' && (<Icon icon="healthicons:lungs" />)}
                              {trend.title === 'Heart Rate' && (<img className='h-[19px] w-[19px]' src={'/images/heart2.svg'} alt='icon' />)}
                              {trend.title === 'Nutrition' && (<Icon icon="icon-park-solid:cook" />)}
                              {trend.title === 'Frequent Toileting' && (<img className='h-[19px] w-[19px]' src={'/images/toilet2.svg'} alt='icon' />)}
                              {trend.title === 'Extended Toileting' && (<Icon icon="ph:toilet-fill" />)}
                              {trend.title === 'Wandering at Day' && (<img className='h-[19px] w-[19px]' src={'/images/dayWork2.svg'} alt='icon' />)}
                              {trend.title === 'Bedtime' && (<Icon icon="lets-icons:bed-light" />)}
                              {trend.title === 'Sedentary' && (<img className='h-[19px] w-[19px]' src={'/images/sitting2.svg'} alt='icon' />)}
                              {trend.title === 'Wandering at Night' && (<img className='h-[19px] w-[19px]' src={'/images/nightRun2.svg'} alt='icon' />)}
                              {trend.title === 'Frequent Night Activity' && (<img className='h-[19px] w-[19px]' src={'/images/nightAcitivity2.svg'} alt='icon' />)}
                              {trend.title === 'Oversleeping' && (<Icon icon="solar:sleeping-bold" />)}
                              {trend.title === 'Surveillance Mode' && (<Icon icon="mdi:camera-party-mode" />)}
                              {trend.title === 'Device Offline' && (<Icon icon="heroicons-outline:status-offline" />)}
                            </span>
                            <div className=' text-start'>
                              <p className='text-text-primary font-medium text-[19px]'>{trend.title}</p>
                              <p className='text-[13px] -mt-1 text-text-primary/60'>{trend.subTitle}</p>
                            </div>
                          </div>
                          <div className='mt-2.5 flex items-center justify-between flex-wrap gap-4'>
                            <span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-base'><Icon icon="streamline:target-solid" /></span>
                                <span className='text-[15px] font-medium '>{trend.target}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 's' && <span>s</span>
                                  }
                                  {
                                    trend.type === 'bpm' && <span>bpm</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  {
                                    trend.type === 'm' && <span>m</span>
                                  }
                                  <span className='ml-1'>
                                    Target</span></span>
                              </span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-lg text-Warning'>
                                  {Number(trend.present) > Number(trend.target) ? <Icon icon="emojione-monotone:up-arrow" /> : <Icon icon="emojione-monotone:down-arrow" />}

                                </span>
                                <span className='text-[15px] font-medium '>{trend.present}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 's' && <span>s</span>
                                  }
                                  {
                                    trend.type === 'bpm' && <span>bpm</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  {
                                    trend.type === 'm' && <span>m</span>
                                  }
                                </span>
                              </span>
                            </span>
                            <span className='flex flex-col'>
                              <span className='flex items-center justify-center text-Warning text-xl font-bold gap-1'>
                                <span>
                                  {Number(trend.present) > Number(trend.target) ? <Icon icon="material-symbols:trending-up" /> : <Icon icon="uil:chart-down" />}
                                </span>
                                <span>
                                  {Number(trend.present) > Number(trend.target) ? '+' : '-'}
                                  {trend.diff}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 's' && <span>s</span>
                                  }
                                  {
                                    trend.type === 'bpm' && <span>bpm</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  {
                                    trend.type === 'm' && <span>m</span>
                                  }
                                </span>
                              </span>
                              <span className='text-[13px] font-normal text-text-primary/50'>{Number(trend.present) > Number(trend.target) ? 'More ' : 'Less '}
                                Than Target</span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </>)
                  }

                </div>
                {
                  (warningTrends.length > 4 && warningTrends.length > loadwarning) && <>
                    <button onClick={() => setLoadwarning(averageTrends.length)} className='border mt-[14px] rounded-lg p-2.5 w-full flex items-center justify-center gap-1 text-[13px] font-normal text-text-primary/50'>Load More <span><Icon className='text-lg' icon="ant-design:arrow-down-outlined" /></span></button>
                  </>
                }
              </div>
            </div>
            {/* -------------------Critical trends----------------- */}
            <div className=''>
              <div className=' bg-Critical w-full h-[4px] rounded-[18px]'></div>
              <div className='mt-[8px]'>
                <h2 className=' text-[19px] font-bold text-text-primary'>Critical</h2>
                <p className=' text-[13px] font-normal text-text-primary/60 min-h-[40px]'>Urgent action required, elderly trends have reached a critical point.</p>
              </div>
              <div className='mt-6 '>
                <div className='flex flex-col gap-[14px] max-h-[610px] overflow-y-auto'>
                  {
                    criticalTrends.slice(0, loadCritical).map((trend, index) => <>
                      <button onClick={() => handleTrend({ title: trend?.title, index: trend.id })}>
                        <div className='border rounded-[18px] p-[14px]'>
                          <div className='flex items-center gap-2 border-b pb-2.5'>
                            <span className='bg-Critical text-white p-2.5 rounded-[10px] text-[19px]'>
                              {trend.title === 'Fall Detection' && (<Icon icon="material-symbols:falling-rounded" />)}
                              {trend.title === 'Sleep Score' && (<Icon icon="icon-park-solid:sleep" />)}
                              {trend.title === 'Abnormal Sleep' && (<Icon icon="material-symbols-light:respiratory-rate-rounded" />)}
                              {trend.title === 'Abnormal Biorhythm' && (<Icon icon="material-symbols-light:respiratory-rate-rounded" />)}
                              {trend.title === 'Not in bed' && (<Icon icon="lets-icons:bed" />)}
                              {trend.title === 'Sleep Monitoring' && (<Icon icon="fa6-solid:bed-pulse" />)}
                              {trend.title === 'Breath Rate' && (<Icon icon="healthicons:lungs" />)}
                              {trend.title === 'Heart Rate' && (<img className='h-[19px] w-[19px]' src={'/images/heart2.svg'} alt='icon' />)}
                              {trend.title === 'Nutrition' && (<Icon icon="icon-park-solid:cook" />)}
                              {trend.title === 'Frequent Toileting' && (<img className='h-[19px] w-[19px]' src={'/images/toilet2.svg'} alt='icon' />)}
                              {trend.title === 'Extended Toileting' && (<Icon icon="ph:toilet-fill" />)}
                              {trend.title === 'Wandering at Day' && (<img className='h-[19px] w-[19px]' src={'/images/dayWork2.svg'} alt='icon' />)}
                              {trend.title === 'Bedtime' && (<Icon icon="lets-icons:bed-light" />)}
                              {trend.title === 'Sedentary' && (<img className='h-[19px] w-[19px]' src={'/images/sitting2.svg'} alt='icon' />)}
                              {trend.title === 'Wandering at Night' && (<img className='h-[19px] w-[19px]' src={'/images/nightRun2.svg'} alt='icon' />)}
                              {trend.title === 'Frequent Night Activity' && (<img className='h-[19px] w-[19px]' src={'/images/nightAcitivity2.svg'} alt='icon' />)}
                              {trend.title === 'Oversleeping' && (<Icon icon="solar:sleeping-bold" />)}
                              {trend.title === 'Surveillance Mode' && (<Icon icon="mdi:camera-party-mode" />)}
                              {trend.title === 'Device Offline' && (<Icon icon="heroicons-outline:status-offline" />)}
                            </span>
                            <div className=' text-start'>
                              <p className='text-text-primary font-medium text-[19px]'>{trend.title}</p>
                              <p className='text-[13px] -mt-1 text-text-primary/60'>{trend.subTitle}</p>
                            </div>
                          </div>
                          <div className='mt-2.5 flex items-center justify-between flex-wrap gap-4'>
                            <span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-base'><Icon icon="streamline:target-solid" /></span>
                                <span className='text-[15px] font-medium '>{trend.target}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 's' && <span>s</span>
                                  }
                                  {
                                    trend.type === 'bpm' && <span>bpm</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  {
                                    trend.type === 'm' && <span>m</span>
                                  }
                                  <span className='ml-1'>Target</span></span>
                              </span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-lg text-Critical'>
                                  {Number(trend.present) > Number(trend.target) ? <Icon icon="emojione-monotone:up-arrow" /> : <Icon icon="emojione-monotone:down-arrow" />}

                                </span>
                                <span className='text-[15px] font-medium '>{trend.present}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 's' && <span>s</span>
                                  }
                                  {
                                    trend.type === 'bpm' && <span>bpm</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  {
                                    trend.type === 'm' && <span>m</span>
                                  }
                                </span>
                              </span>
                            </span>
                            <span className='flex flex-col'>
                              <span className='flex items-center justify-center text-Critical text-xl font-bold gap-1'>
                                <span><span>
                                  {Number(trend.present) > Number(trend.target) ? <Icon icon="material-symbols:trending-up" /> : <Icon icon="uil:chart-down" />}
                                </span></span>
                                <span>
                                  {Number(trend.present) > Number(trend.target) ? '+' : '-'}
                                  {(trend.diff)}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 's' && <span>s</span>
                                  }
                                  {
                                    trend.type === 'bpm' && <span>bpm</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  {
                                    trend.type === 'm' && <span>m</span>
                                  }
                                </span>
                              </span>
                              <span className='text-[13px] font-normal text-text-primary/50'>{Number(trend.present) > Number(trend.target) ? 'More ' : 'Less '}
                                Than Target</span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </>)
                  }
                  
                </div>
                {
                    (criticalTrends.length > 4 && criticalTrends.length > loadCritical) && <>
                      <button onClick={() => setLoadCritical(averageTrends.length)} className='border mt-[14px] rounded-lg p-2.5 w-full flex items-center justify-center gap-1 text-[13px] font-normal text-text-primary/50'>Load More <span><Icon className='text-lg' icon="ant-design:arrow-down-outlined" /></span></button>
                    </>
                  }
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

export default ElderlyTrends