import React, { useState } from 'react';
import SectionWrapper from '../../../Shared/SectionWrapper';
import CustomButton from '../../../Shared/button/CustomButton';
import { Icon } from '@iconify/react';
import SupportAgentsEdit from '../AdminSupportAgent/SupportAgentsEdit';

const AgentInformation = () => {
    // -------------information adit modal--------------
    const [modalOPen, setModalOpen] = useState(false)
    const item = {
        firstName: 'Tawsif',
        lastName: 'Ahmed',
        email: 'tawsifsupport@email.com',
        contactNumber: '445-124-121',
        contactPerson: 'Lauren Thiel PhD',
        businessAdress: '7156 Appleby Line, Milton, Ontario, L9T 2Y1',
        businessName: 'Schinner, Brakus and Ziemann'
    }
    return (
        <div>
            <SectionWrapper>
                <div className='p-[22px]'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-text-primary font-bold text-2xl'>Agent Information</h2>
                        <div>
                            <button onClick={() => setModalOpen(true)} className='flex items-center font-medium text-primary bg-primary/10 px-4 py-[7px] rounded-[10px]'> <span><Icon className='text-normal md:text-[19px] mr-1' icon="uil:edit" /></span><span className='text-[14px]'>Edit</span></button>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <div className='py-[14px] flex items-center gap-2.5'>
                            <div className='w-[39px] h-[39px] rounded-[10px] bg-primary/10 flex items-center justify-center text-primary'>
                                <Icon className='w-[19px]' icon="tabler:user" />
                            </div>
                            <div>
                                <p className='text-sm text-text-secondary'>Full Name</p>
                                <p className='text-text-primary text-lg font-medium'><span>{item.firstName}</span> <span>{item.lastName}</span></p>
                            </div>
                        </div>
                        <div className='py-[14px] flex items-center gap-2.5'>
                            <div className='w-[39px] h-[39px] rounded-[10px] bg-primary/10 flex items-center justify-center text-primary'>
                                <Icon className='w-[19px]' icon="octicon:mail-16" />
                            </div>
                            <div>
                                <p className='text-sm text-text-secondary'>Email Address</p>
                                <p className='text-text-primary text-lg font-medium'>{item.email}</p>
                            </div>
                        </div>
                        <div className='py-[14px] flex items-center gap-2.5'>
                            <div className='w-[39px] h-[39px] rounded-[10px] bg-primary/10 flex items-center justify-center text-primary'>
                                <Icon className='w-[19px]' icon="lucide:contact-2" />
                            </div>
                            <div>
                                <p className='text-sm text-text-secondary'>Contact Person</p>
                                <p className='text-text-primary text-lg font-medium'> {item.contactPerson}</p>
                            </div>
                        </div>
                        <div className='py-[14px] flex items-center gap-2.5'>
                            <div className='w-[39px] h-[39px] rounded-[10px] bg-primary/10 flex items-center justify-center text-primary'>
                                <Icon className='w-[19px]' icon="ion:call-outline" />
                            </div>
                            <div>
                                <p className='text-sm text-text-secondary'>Contact Number</p>
                                <p className='text-text-primary text-lg font-medium'>{item.contactNumber}</p>
                            </div>
                        </div>
                        <div className='py-[14px] flex items-center gap-2.5'>
                            <div className='w-[39px] h-[39px] rounded-[10px] bg-primary/10 flex items-center justify-center text-primary'>
                                <Icon className='w-[19px]' icon="mingcute:building-5-line" />
                            </div>
                            <div>
                                <p className='text-sm text-text-secondary'>Business Name</p>
                                <p className='text-text-primary text-lg font-medium'>{item.businessName}</p>
                            </div>
                        </div>
                        <div className='py-[14px] flex items-center gap-2.5'>
                            <div className='w-[39px] h-[39px] rounded-[10px] bg-primary/10 flex items-center justify-center text-primary'>
                                <Icon className='w-[19px]' icon="mi:location" />
                            </div>
                            <div>
                                <p className='text-sm text-text-secondary'>Business Address</p>
                                <p className='text-text-primary text-lg font-medium'>{item.businessAdress}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            <SupportAgentsEdit item={item} modalOPen={modalOPen} setModalOpen={setModalOpen} />
        </div>
    );
};

export default AgentInformation;
