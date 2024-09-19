import React, { useState } from "react";
import SectionWrapper from "../../../../../../Shared/SectionWrapper";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import CustomErrorToast from "../../../../../../Shared/Tosat/CustomErrorToast";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";

const Task = () => {
  const [message, setMessage] = useState("");
  const [open,setOpen] = useState(false)
  const [tasks, setTasks] = useState([
    {
      title: "Taking Medicine Three Times",
      description: "",
      taskType: "Medication",
      TaskPriority: "Medium Priority",
      eventOccurrences: "3",
      Recurrence: "Today",
      message: [
        {
          time: "09:25 am",
          text: "The medicine is running out of mealtime, please take the medicine quickly",
          user: "You",
        },
        {
          time: "06:25 am",
          text: "Please take the medicine before the time expires",
          user: "Papon Rabish",
        },
      ],
    }
   
  ]);

  const sentMessage = (index) => {
    if (!message) {
      toast.custom((t) => (
        <CustomErrorToast t={t} text={"Please add a message"} title={"Error"} />
      ));
    } else {
      const updateData = [...tasks];
      const newMessage = {
        time: "10:25 am",
        text: message,
        user: "You",
      };
      updateData[index].message.push(newMessage);
      setTasks(updateData);
      setMessage("")
    }
  };

  return (
    <>
      <SectionWrapper>
        <div className="p-5">
          <div className=" flex items-center justify-between">
            <h2 className=" text-2xl font-bold text-dark-black">Tasks</h2>
            <button onClick={()=>setOpen(true)} className="py-[8px] px-3 text-[13px] font-medium flex items-center justify-center gap-1 h-[37px] outline-none border-none text-primary bg-primary/10 rounded-[10px]">
              <Icon icon="ic:round-add" className=" text-[18px]" /> Add Task
            </button>
          </div>

          <div className=" mt-7">
            {tasks.map((task, index) => (
              <TaskCard key={index} task={task} message={message} setMessage={setMessage} sentMessage={sentMessage} index={index}/>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <AddTask modalOPen={open} setModalOpen={setOpen}/>
    </>
  );
};

export default Task;
