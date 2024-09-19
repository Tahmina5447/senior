import React from 'react';

const ResolvingMessageModal = () => {
    return (
        <div className='mt-9'>
            <p className='text-[13px] font-medium text-text-primary '>Message</p>
            <textarea name="messase" placeholder='Write Message' className='h-[100px] w-full focus:border-primary outline-none p-4 rounded-[16px] border mt-1.5' ></textarea>
        </div>
    );
};

export default ResolvingMessageModal;