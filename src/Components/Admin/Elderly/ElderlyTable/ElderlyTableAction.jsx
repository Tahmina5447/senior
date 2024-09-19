import { Icon } from '@iconify/react'
import { Tooltip } from 'antd'
import React, { useContext, useState } from 'react'
import AdminElderlyEdit from './AdminElderlyEdit'
import DeleteModal from '../../../../Shared/delete/DeleteModal'
import toast from 'react-hot-toast'
import CustomToast from '../../../../Shared/Tosat/CustomToast'
import { useNavigate } from 'react-router-dom'
import { SidebarContext } from '../../../../Context/CustomContext'

const ElderlyTableAction = ({data,role}) => {
  const{setShowNotificationTab,setBreadCrumb}=useContext(SidebarContext)
    const [edit,setEdit] = useState(false)
    const [deleteModal,setDeleteModal] = useState(false)
    const navigate = useNavigate()

    const deleteElderly = () => {
        try {
          // Simulate an API call
          // Replace this with your actual API call
          // await apiCallFunction(data);
          setDeleteModal(false)
          // Display the success toast
          setTimeout(()=>{
            toast.custom((t) => <CustomToast t={t} text="Elderly profile has been successfully deleted" />);
      
          },900)
        } catch (error) {
          // Handle API call or other errors
          console.error('An error occurred:', error);
          toast.error('An error occurred while creating a new admin.');
        }
      }
  return (
    <>
    <div className=' flex items-center justify-center gap-2'>
        <Tooltip placement="topLeft" title="Edit">
        <button onClick={()=>setEdit(true)}>
            <Icon icon="eva:edit-2-fill" className='text-[20px] hover:text-[#0070F0] text-light-black' />
        </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Delete">
        <button onClick={()=>setDeleteModal(true)}>
            <Icon icon="ri:delete-bin-7-fill" className='text-[20px] hover:text-red-500 text-light-black' />
        </button>
        </Tooltip>

        <Tooltip placement="topLeft" title="View">
        <button onClick={()=>{
          navigate(role==="support-agent" ? `/support-agent/dashboard/elderly/${data?.id}`: `/admin/dashboard/elderly/${data?.id}`);
          setShowNotificationTab(false);
          setBreadCrumb(role==="support-agent" ? {title:"Elderly",url:"/support-agent/dashboard/elderly"} : {title:"Elderly",url:"/admin/dashboard/elderly"})
          }}>
             <Icon icon="carbon:view-filled" className='text-[20px] text-light-black hover:text-[#0070F0]' />
        </button>
        </Tooltip>
    </div>

       {/* ============= admin edit Modal============ */}
       <AdminElderlyEdit item={data} modalOPen={edit} setModalOpen={setEdit}/>

    {/* ============= admin delete Modal============ */}
    <DeleteModal modalOPen={deleteModal} onDelete={()=>deleteElderly()} setModalOpen={setDeleteModal} title={"Are you sure to delete this Elderly account? This process"} title2={"can be undo."}/>

    </>
  )
}

export default ElderlyTableAction