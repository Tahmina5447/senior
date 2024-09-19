import React from 'react'
import { toast } from "react-hot-toast";
import image from "../../../src/assets/icon/tostIcon.svg"
import image2 from "../../../src/assets/icon/alertsCross.svg"

const AlertsToast = ({ t,text,title }) => {
  console.log("this is id rtt",t)
  return (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-shadowOne border-l-8 border-[#F79724] relative overflow-hidden rounded-lg pointer-events-auto flex items-start justify-between ring-1 ring-black ring-opacity-5`}
    >
        <div className="flex-1 w-0 p-4">
        <div className="flex items-start gap-1">
          <div className="flex-shrink-0 pt-0.5 mt-2 h-[20px] w-[20px] rounded-[16px] flex items-center justify-center">
            <img src={image} alt="" className=' w-[20px] h-[20px]'/>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-[19px] mb-[-5px] font-medium text-text-primary">
              {title}
            </p>
            <p className="text-[13px] font-[400] text-secondary">
              {text}
            </p>
          </div>
        </div>
      </div>
        <button
          className='py-2 px-3 mt-4'
          onClick={() =>toast.remove(t.id)}
        >
          <img onClick={() => toast.dismiss(t.id)} src={image2} alt="" />
        </button>
    </div>
  )
}

export default AlertsToast