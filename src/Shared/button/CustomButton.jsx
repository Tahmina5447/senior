import React from 'react'

const CustomButton = ({type="submit",style,children,className,onClick=()=>{}}) => {
  return (
    <button style={style} type={type} onClick={onClick}  className={` px-3.5 h-[40px] bg-primary hover:bg-primary/70 duration-300 rounded-[10px]  font-medium text-[13px] text-white flex items-center justify-center ${className}`}>
        {children}
    </button>
  )
}

export default CustomButton