
import React, { useState } from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import SubscriptionType from './SubscriptionType/SubscriptionType';
import {subscriptionData} from '../../../../../assets/singleElderlyData'

const Subscriptions = () => {
    const [plan, setPlan] = useState('essential');
    const handlePackage = (e) => {
        setPlan(e);
    };
    return (
        <>
            <SectionWrapper>
                <div className=' mt-[30px] mb-12 p-[22px]'>
                    <h1 className='text-2xl font-bold text-text-primary'>Subscriptions</h1>
                    <div className='mt-[22px]'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-4 gap-5'>
                            <button onClick={() => handlePackage('essential')} className={`p-5 rounded-[20px] border-[5px] bg-primary `}>
                                <div className='flex flex-col gap-[17px] text-white'>
                                    <span className='flex items-center gap-[14px]'>
                                        <span><img className='w-4 h-[25px]' src={'/images/essential.svg'} alt="icon" /></span>
                                        <span className='text-[22px] font-bold opacity-95'>Essential</span>
                                    </span>
                                    <span className='flex justify-between items-center'>
                                        <span className='flex items-center'>
                                            <span className='text-white opacity-95 font-bold text-[28px]'>$150</span>
                                            <span className='text-[13px] mt-2 text-white opacity-50'>/Per Month</span>
                                        </span>
                                        <span className='text-[13px] font-bold text-white opacity-95 bg-white/20 px-2 py-1 rounded-lg border border-white/20'>
                                            Active Plan
                                        </span>
                                    </span>
                                </div>
                            </button>
                            <button onClick={() => handlePackage('standard')} className={`p-5 rounded-[20px] ${plan === 'standard' ? 'border-[3px] border-primary' : 'border-[3px] '} `}>
                                <div className='flex flex-col gap-[17px] text-text-primary'>
                                    <span className='flex items-center gap-[14px]'>
                                        <span><img className='w-4 h-[25px]' src={'/images/standard.svg'} alt="icon" /></span>
                                        <span className='text-[22px] font-bold opacity-95'>Standard</span>
                                    </span>
                                    <span className='flex items-center'>
                                        <span className=' font-bold text-[28px]'>$150</span>
                                        <span className='text-[13px] mt-2 text-[#969BB3]'>/Per Month</span>
                                    </span>
                                </div>
                            </button>
                            <button onClick={() => handlePackage('premium')} className={`p-5 rounded-[20px] ${plan === 'premium' ? 'border-[3px] border-primary' : 'border-[3px] '} `}>
                                <div className='flex flex-col gap-[17px] text-text-primary'>
                                    <span className='flex items-center gap-[14px]'>
                                        <span><img className='w-4 h-[25px]' src={'/images/premium.svg'} alt="icon" /></span>
                                        <span className='text-[22px] font-bold opacity-95'>Premium</span>
                                    </span>
                                    <span className='flex items-center'>
                                        <span className=' font-bold text-[28px]'>$280</span>
                                        <span className='text-[13px] mt-2 text-[#969BB3]'>/Per Month</span>
                                    </span>
                                </div>
                            </button>
                            <button onClick={() => handlePackage('enterprise')} className={`p-5 rounded-[20px] ${plan === 'enterprise' ? 'border-[3px] border-primary' : 'border-[3px] '} `}>
                                <div className='flex flex-col gap-[17px] text-text-primary'>
                                    <span className='flex items-center gap-[14px]'>
                                        <span><img className='w-[30px] h-[28px]' src={'/images/enterprise.svg'} alt="icon" /></span>
                                        <span className='text-[22px] font-bold opacity-95'>Enterprise</span>
                                    </span>
                                    <span className='flex items-center'>
                                        <span className=' font-bold text-[28px]'>$490</span>
                                        <span className='text-[13px] mt-2 text-[#969BB3]'>/Per Month</span>
                                    </span>
                                </div>
                            </button>
                        </div>
                        <div>
                            {
                                plan === "essential" && <SubscriptionType plan={plan} data={subscriptionData.filter((d) => d.category === plan)} />
                            }
                            {
                                plan === "standard" && <SubscriptionType plan={plan} data={subscriptionData.filter((d) => d.category === plan)} />
                            }
                            {
                                plan === "premium" && <SubscriptionType plan={plan} data={subscriptionData.filter((d) => d.category === plan)} />
                            }
                            {
                                plan === "enterprise" && <SubscriptionType plan={plan} data={subscriptionData.filter((d) => d.category === plan)} />
                            }

                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default Subscriptions;