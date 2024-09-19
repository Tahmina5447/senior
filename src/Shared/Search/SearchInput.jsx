import { Icon } from '@iconify/react'
import React from 'react'

const SearchInput = ({search,setSearch,style,placeholder}) => {
  return (
    <div className=' relative w-full lg:w-[220px]'>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={placeholder ? placeholder : "Search..."} className='text-[13px] font-medium outline-none w-full  py-[9px] px-3 pr-10 flex items-center justify-between border-[1px] focus:border-primary rounded-[10px]'/>
        <Icon icon="material-symbols:search" className=' text-2xl text-[#E8E9EE] absolute top-[8px] right-[7px]' />
    </div>
  )
}

export default SearchInput