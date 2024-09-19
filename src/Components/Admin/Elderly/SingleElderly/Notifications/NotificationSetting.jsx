import React from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import { Switch } from 'antd';
import SearchInput from '../../../../../Shared/Search/SearchInput';

const NotificationSetting = () => {
    const [search, setSearch] = React.useState("");
    return (
        <>
            <SectionWrapper>
                <div className='px-[22px]'>
                    <div className="md:flex justify-between lg2:flex gap-2 py-6">
                        <div>
                            <h1 className="text-text-primary text-2xl font-bold" >Notification Settings</h1>
                            <p className='text-text-secondary text-lg font-medium'>Select the kind of notification you want to show the customers about their activities </p>
                        </div>
                        <div className='sm:mt-4 lg2:mt-0 md:mt-0'>
                            <SearchInput
                                search={search}
                                setSearch={setSearch}
                                placeholder={'Search Notifications'}
                            />
                        </div>
                    </div>
                    <div  className='max-h-[100vh] overflow-y-auto'>
                        {/* ----------Email Notifications----------- */}
                        <div className=''>
                            <div>
                                <h1 className='text-text-primary font-bold text-xl py-[18px] border-b'>Email Notifications</h1>
                            </div>
                            <div className='mt-5'>
                                <div className='flex justify-between py-5'>
                                    <div>
                                        <h1 className='text-[#49517A] text-lg font-bold'>News and Updates</h1>
                                        <p className='text-text-secondary text-base'>News about product and feature updates</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Switch className='bg-gray-400' size="small" defaultChecked />
                                    </div>

                                </div>
                                <div className='  flex justify-between py-5'>
                                    <div>
                                        <h1 className='text-[#49517A] text-lg font-bold'>Tips and tutorials</h1>
                                        <p className='text-text-secondary text-base'>News about product and feature updates</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Switch className='bg-gray-400' size="small" defaultChecked />
                                    </div>

                                </div>
                                <div className='  flex justify-between py-5'>
                                    <div>
                                        <h1 className='text-[#49517A] text-lg font-bold'>User research</h1>
                                        <p className='text-text-secondary text-base'>Get involved in our beta testing program or participate in paid product user research.</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Switch className='bg-gray-400' size="small" defaultChecked />
                                    </div>

                                </div>
                                <div className='  flex justify-between py-5'>
                                    <div>
                                        <h1 className='text-[#49517A] text-lg font-bold'>Comments</h1>
                                        <p className='text-text-secondary text-base'>News about product and feature updates</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Switch className='bg-gray-400' size="small" defaultChecked />
                                    </div>

                                </div>
                                <div className='  flex justify-between py-5'>
                                    <div>
                                        <h1 className='text-[#49517A] text-lg font-bold'>Reminders</h1>
                                        <p className='text-text-secondary text-base'>News about product and feature updates</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Switch className='bg-gray-400' size="small" defaultChecked />
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* ----------Push Notifications----------- */}
                        <div className='mt-12'>
                            <div>
                                <h1 className='text-text-primary font-bold text-xl py-[18px] border-b'>Push Notifications</h1>
                            </div>
                            <div>
                                <div className='  flex justify-between py-5'>
                                    <div>
                                        <h1 className='text-[#49517A] text-lg font-bold'>Comments</h1>
                                        <p className='text-text-secondary text-base'>News about product and feature updates</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Switch className='bg-gray-400' size="small" defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

        </>
    );
};

export default NotificationSetting;