import React, { useEffect, useState } from 'react';
import EditInput from '../../../../../Shared/input/EditInput';
import CustomSelect from '../../../../../Shared/sort/CustomSelect';
import { Icon } from '@iconify/react';

const EditDevice = ({ editedDevice }) => {
    const rooms = ['My Living Room', 'My Dining Room', 'My Bed Room']
    const [roomName, setRoomName] = useState('');
    const [deviceName, setDeviceName] = useState('')
    const [uploadedImage, setUploadedImage] = useState(null);
    useEffect(() => {
        setDeviceName(editedDevice.name || '');
    }, [editedDevice]);

    useEffect(() => {
        if(editedDevice.img){
            setUploadedImage(null)
        }
    }, [editedDevice]);
    
    const handleImageUpload = (e) => {
        const image = e.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setUploadedImage(event.target.result);
            };
            reader.readAsDataURL(image);
        }
    }
    return (
        <div className='mt-9'>
            <div className='flex justify-center'>
                <div className='w-[92px] h-[92px] flex items-center justify-center border border-dashed rounded-full relative'>
                    <div className='bg-white rounded-full absolute -bottom-3 right-1 '>
                        <div className='bg-primary/10 hover:bg-primary hover:text-white duration-300 rounded-full p-3 flex items-center justify-center text-primary'>
                            <label for="file-input" class="file-label">
                                <Icon className='w-[19px] h-[19px] cursor-pointer' icon="akar-icons:image" />
                            </label>
                            <input
                                type="file"
                                id="file-input"
                                className='hidden'
                                onChange={handleImageUpload} />
                        </div>
                    </div>
                    {uploadedImage ? (
                        <img className='w-[60px] h-[60px]' src={uploadedImage} alt="device" />
                    ) : (
                        <img className='w-[77px] h-[77px]' src={editedDevice.img} alt="device" />
                    )}

                </div>
            </div>
            <div className='mt-[30px]'>
                <EditInput
                    label={'Device Name'}
                    type={'text'}
                    register={'deviceName'}
                    defaultValue={deviceName}
                />
                <div className='mt-4'>
                    <p className='text-text-primary text-[13px] font-medium mb-1.5'>Room Type</p>
                    <CustomSelect width={"max-w-[520px]"} className={" rounded-[16px] w-full text-base outline-none text-text-primary h-[50px] border-[1px] focus:border-primary "} selected={roomName} setSelected={setRoomName} data={rooms} />
                </div>
            </div>
        </div>
    );
};

export default EditDevice;