import React from 'react';
import CustomInput from '../../../../../Shared/input/CustomInput';

const AddFamilyMember = () => {
    return (
        <div className='mt-9 flex flex-col gap-2'>
            <div className='flex items-center gap-4'>
                <CustomInput
                    label={'First Name'}
                    type={'text'}
                    register={'firstName'}
                    error={'Please Enter Your First Name'}
                    placeholder={'Enter First Name'} />

                <CustomInput
                    label={'Last Name'}
                    type={'text'}
                    register={'lastName'}
                    error={'Please Enter Your Last Name'}
                    placeholder={'Enter Last Name'} />
            </div>
            <CustomInput
                label={'Members E-Mail'}
                type={'email'}
                register={'email'}
                error={`Please Enter Member's Email`}
                placeholder={`Enter Member's Email`} />
            <CustomInput
                label={'Members Phone Number'}
                type={'text'}
                register={'phone'}
                error={`Please Enter Member's Phone Number`}
                placeholder={`Enter Member's Name`} />
            <CustomInput
                label={'Members Address'}
                type={'text'}
                register={'firstName'}
                error={`Please Enter Member's Address`}
                placeholder={`Enter Member's Address`} />
        </div>
    );
};

export default AddFamilyMember;