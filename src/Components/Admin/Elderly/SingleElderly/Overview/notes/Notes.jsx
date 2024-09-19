import React, { useState } from "react";
import SectionWrapper from "../../../../../../Shared/SectionWrapper";
import { Icon } from "@iconify/react";
import NotesCard from "./NotesCard";
import AddNotes from "./AddNotes";

const Notes = () => {
  const [addNote, setAddNote] = useState(false)
  const [notes, setNotes] = useState([
    {
      id: 1,
      time: "09:25 am",
      text: "Please manage IoT devices and ensure efficient home security system operation. Familiarize yourself, troubleshoot, collaborate, and report",
      user: "You",
    },
  ]);


  const deleteNotes = (id) => {
    const newNote = notes.filter((note) => note.id !== id)
    setNotes(newNote)
  }

  return (
    <>
      <SectionWrapper>
        <div className="p-5">
          <div className=" flex items-center justify-between">
            <h2 className=" text-2xl font-bold text-dark-black">Notes</h2>
            <button onClick={() => setAddNote(true)} className="py-[8px] px-3 text-[13px] font-medium flex items-center justify-center gap-1 h-[37px] outline-none border-none text-primary bg-primary/10 rounded-[10px]">
              <Icon icon="ic:round-add" className=" text-[18px]" /> Add Note
            </button>
          </div>

          <div className="mt-7 flex flex-col gap-1 max-h-[365px] overflow-y-auto">
            {notes.map((note, index) => (
              <NotesCard key={index} note={note} deleteNotes={deleteNotes} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* add mote modal */}
      <AddNotes setNotes={setNotes} modalOPen={addNote} setModalOpen={setAddNote} />
    </>
  );
};

export default Notes;
