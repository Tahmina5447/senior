import React, { useState } from "react";
import CustomModal from "../../../../../../Shared/modal/CustomModal";
import toast from "react-hot-toast";
import CustomToast from "../../../../../../Shared/Tosat/CustomToast";
import { useForm } from "react-hook-form";
import CustomInput from "../../../../../../Shared/input/CustomInput";
import { Icon } from "@iconify/react";
import CustomSelect from "../../../../../../Shared/sort/CustomSelect";

const AddTask = ({ modalOPen, setModalOpen,task }) => {
  const [priorityActive, setPriorityActive] = useState("Medium Priority");
  const [activeRecurrence, setActiveRecurrence] = useState("One Time");
  const [selected, setSelected] = useState("");
  const data = ["Medication", "Food"];
  const [activeDay, setActiveDay] = useState([]);
  const Recurrence = ["One Time", "Daily", "Weekly"];
  const dayData = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const [repet, setRepet] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues:{
        title:task.title,
        description:task.description,
        eventOccurrences:task.eventOccurrences,
        taskType:task.taskType,
      }
  });
  const onSubmit = (data) => {
    try {
      // Simulate an API call
      // Replace this with your actual API call
      // await apiCallFunction(data);

      reset();
      setModalOpen(false);

      // Display the success toast
      setTimeout(() => {
        toast.custom((t) => (
          <CustomToast
            t={t}
            text="New Support Agent has been created Successfully!"
          />
        ));
      }, 900);
    } catch (error) {
      // Handle API call or other errors
      console.error("An error occurred:", error);
      toast.error("An error occurred while creating a new admin.");
    }
  };

  const handelDay = (day) => {
    setActiveRecurrence("");
    const isSelected = Boolean(activeDay.find((grpStud) => grpStud === day));
    if (isSelected) {
      setActiveDay(activeDay.filter((item) => item !== day));
    } else {
      setActiveDay((pre) => [...pre, day]);
    }
  };


  return (
    <CustomModal
      modalOPen={modalOPen}
      setModalOpen={setModalOpen}
      handleSubmit={handleSubmit(onSubmit)}
      width={600}
      title="Edit Task"
      buttonText={"Create Task"}
    >
      <div className=" mt-5">
        <CustomInput
          label={"Title"}
          type={"text"}
          register={register("title", {
            required: {
              value: true,
              message: "Please enter Task Title",
            },
          })}
          error={errors.title}
          placeholder={"Task Title"}
        />
      </div>

      <div className="flex flex-col items-start w-full mt-3">
        <label
          htmlFor="otp"
          className="mb-1 font-medium text-[13px] text-[#1B2559]"
        >
          Description (optional)
        </label>
        <textarea
          className="py-[18px] px-4 text-text-primary placeholder:text-[#A3AED0] h-[85px]  rounded-[16px] w-full text-base outline-none   border-[1px] focus:border-primary"
          name=""
          id=""
          register={register("description")}
        ></textarea>
      </div>

      <div className=" flex items-center flex-col md:flex-row gap-[18px] justify-between">
        <div className="flex flex-col items-start w-full mt-3">
          <label
            htmlFor="otp"
            className="mb-1 font-medium text-[13px] text-[#1B2559]"
          >
            Task Type
          </label>
          <CustomSelect
            width={"max-w-[520px]"}
            className={
              " rounded-[16px] w-full text-base outline-none text-text-primary h-[50px] border-[1px] focus:border-primary "
            }
            selected={selected}
            setSelected={setSelected}
            data={data}
          />
        </div>
        <CustomInput
          label={"Event Occurrences"}
          type={"number"}
          register={register("eventOccurrences", {
            required: {
              value: true,
              message: "Please enter Event Occurrences",
            },
          })}
          error={errors.eventOccurrences}
          placeholder={"3"}
        />
      </div>

      <div className=" mt-[15px]">
        <label
          htmlFor="otp"
          className="mb-1 font-medium text-[13px] text-[#1B2559]"
        >
          Task Priority
        </label>

        <div className=" flex itemc justify-between mt-2">
          <button
            onClick={() => setPriorityActive("Low Priority")}
            type="button"
            className={`text-Average text-[16px] py-2 px-3 rounded-full
            font-medium flex items-center gap-2 hover:bg-Average hover:text-white group ${
              priorityActive === "Low Priority"
                ? "bg-Average text-white"
                : "bg-Average/20 text-Average"
            }`}
          >
            <div
              className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-dashed  group-hover:border-white ${
                priorityActive === "Low Priority"
                  ? " border-white"
                  : "border-Average"
              }`}
            ></div>
            <h2 className="mt-[-3px]">Low Priority</h2>
          </button>

          <button
            onClick={() => setPriorityActive("Medium Priority")}
            type="button"
            className={`text-Warning text-[16px] py-2 px-3 rounded-full
            font-medium flex items-center gap-2 hover:bg-Warning hover:text-white group ${
              priorityActive === "Medium Priority"
                ? "bg-Warning text-white"
                : "bg-Warning/20 text-Warning"
            }`}
          >
            <div
              className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-dashed  group-hover:border-white ${
                priorityActive === "Medium Priority"
                  ? " border-white"
                  : "border-Warning"
              }`}
            >
              <div
                className={`w-[5px] h-[5px] rounded-full  group-hover:bg-white ${
                  priorityActive === "Medium Priority"
                    ? " bg-white"
                    : "bg-Warning"
                }`}
              ></div>
            </div>
            <h2 className="mt-[-3px]">Medium Priority</h2>
          </button>

          <button
            type="button"
            onClick={() => setPriorityActive("High Priority")}
            className={`text-[#FF5959] text-[16px] py-2 px-3 rounded-full
            font-medium flex items-center gap-2 hover:bg-[#FF5959] hover:text-white group ${
              priorityActive === "High Priority"
                ? "bg-[#FF5959] text-white"
                : "bg-[#FF5959]/20 text-[#FF5959]"
            }`}
          >
            <div
              className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 group-hover:border-white ${
                priorityActive === "High Priority"
                  ? " border-white"
                  : "border-[#FF5959]"
              }`}
            >
              <div
                className={`w-[5px] h-[5px] rounded-full  group-hover:bg-white ${
                  priorityActive === "High Priority"
                    ? " bg-white"
                    : "bg-[#FF5959]"
                }`}
              ></div>
            </div>
            <h2 className="mt-[-3px]">High Priority</h2>
          </button>
        </div>
      </div>
      <div className=" mt-[15px]">
        <label
          htmlFor="otp"
          className="mb-1 font-medium text-[13px] text-[#1B2559]"
        >
          Task Type
        </label>

        <div className=" flex items-center gap-[14px] mt-2">
          {Recurrence.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveRecurrence(item);
                setActiveDay([]);
              }}
              type="button"
              className={`  text-[16px] py-2 px-3 rounded-full
                    font-medium flex items-center gap-2 hover:bg-primary hover:text-white group ${
                      item === activeRecurrence
                        ? " bg-primary text-white"
                        : " bg-primary/10 text-primary"
                    }`}
            >
              <div
                className={`w-[14px] h-[14px] rounded-full flex items-center justify-center border-[3px] group-hover:border-white ${
                  item === activeRecurrence
                    ? " border-white"
                    : " border-primary"
                }`}
              ></div>
              <h2 className="mt-[-3px]">{item}</h2>
            </button>
          ))}
        </div>

        <div className=" flex items-center gap-[10px] mt-5">
          {dayData.map((item, index) => {
            const isSelected = Boolean(
              activeDay.find((grpStud) => grpStud === item)
            );
            return (
              <button
                key={index}
                onClick={() => handelDay(item)}
                type="button"
                className={` w-[47px]  text-[16px] py-2 px-4 rounded-full
                                          font-medium flex items-center justify-center h-[35px] gap-2 hover:bg-primary hover:text-white group ${
                                            isSelected
                                              ? " bg-primary text-white"
                                              : " bg-primary/10 text-primary"
                                          }`}
              >
                <h2 className="mt-[-3px]">{item}</h2>
              </button>
            );
          })}

          <div className="w-[10px] h-[10px] rounded-full bg-primary/10"></div>
          <button
            type="button"
            onClick={() => setRepet((pre) => !pre)}
            className={`  text-[16px] py-2 px-4 rounded-full
                    font-medium flex items-center gap-2 hover:bg-primary hover:text-white gro  text-primary ${
                      repet ? " bg-primary text-white" : "bg-primary/10"
                    }`}
          >
            <h2 className=" flex items-center gap-2">
              <Icon icon="lucide:repeat-2" /> Repeat
            </h2>
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default AddTask;
