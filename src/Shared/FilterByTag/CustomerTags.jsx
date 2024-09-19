import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Checkbox } from "antd";
import EditTags from "./EditTags";
import DeleteModal from "../delete/DeleteModal";

const CustomerTags = ({item}) => {
  const [edit, setEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);


  return (
    <div>
        <div  className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer">
              <Checkbox>
                <h3 className="text-[15px] font-medium text-[#666D90]">
                    {item.title.slice(0,16)}{item.title.length > 15 ? "..." :""}
                </h3>
              </Checkbox>

              <div className=" w-[25px] h-[25px] rounded-lg flex items-center justify-center bg-[#E6F1FE]">
                <span className="text-[13px] text-primary font-[500]">
                  {item.value}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-between">
                <button onClick={() => {setEdit(true)}}>
                  <Icon
                    icon="eva:edit-2-fill"
                    className="text-[20px] hover:text-[#0070F0] text-light-black"
                  />
                </button>
                <button onClick={() => setDeleteModal(true)}>
                  <Icon
                    icon="ri:delete-bin-7-fill"
                    className="text-[20px] hover:text-red-500 text-light-black"
                  />
                </button>
            </div>
          </div>

      {/* ======Edit  tags Modal======== */}
      <EditTags item={item} modalOPen={edit} setModalOpen={setEdit}/>
        
      {/* ======delete tags======== */}
      <DeleteModal modalOPen={deleteModal} onDelete={()=>setDeleteModal(false)} setModalOpen={setDeleteModal} title={"You are about to delete the tag  ‘Diabetes Mellitus’ , This"} title2={" action is irreversible!"}/>

    </div>
  );
};

export default CustomerTags;