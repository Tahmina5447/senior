import { Icon } from "@iconify/react";
import React, { useState } from "react";
import EditNotes from "./EditNotes";
import DeleteModal from "../../../../../../Shared/delete/DeleteModal";

const NotesCard = ({ note, deleteNotes }) => {
    const [edit,setEdit] = useState(false)
    const [deleteShow,setDeleteShow] = useState(false)


  return (
    <>
      <div>
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[35px] h-[35px] overflow-hidden rounded-full">
              <img src="/images/user1.png" alt="" className="w-full h-full" />
            </div>
            <div className="">
              <span className=" text-[13px] font-medium text-light-black">
                {note.time}
              </span>
              <h2 className=" text-[15px] mt-[-3px] font-medium text-text-primary">
                {note.user}
              </h2>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <button onClick={()=>setEdit(true)} className=" text-[20px] text-primary">
              <Icon icon="eva:edit-2-outline" />
            </button>
            <button onClick={()=>setDeleteShow(true)} className=" text-[20px] text-danger">
              <Icon icon="eva:trash-2-outline" />
            </button>
          </div>
        </div>
        <p className=" text-sm font-normal text-[#666D90] mt-1">{note.text}</p>
      </div>

      {/* =======edit Notes modal======= */}
      <EditNotes note={note} modalOPen={edit} setModalOpen={setEdit}/>
       {/* ====== Delete Notes modal ======= */}
       <DeleteModal onDelete={()=>{deleteNotes(note.id);setDeleteShow(false)}} modalOPen={deleteShow} setModalOpen={setDeleteShow} title={"Are you sure to delete this Nots account? This"} title2={" process can be undo."}/>
    </>
  );
};

export default NotesCard;
