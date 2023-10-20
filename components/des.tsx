import { list } from 'postcss'
import React from 'react'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"

export default function Des() {
    const items =  ["", "", "", "", "", "", "", "","", "", "", "", "", "", ""]
  return (
    <div className='w-full px-6'>
    <div className="grid w-full py-3 text-sm font-semibold rounded-lg bg-[#000000]/20 pl-11 grid-cols-4 + arrLength(columns)">
  <div className="flex items-start justify-start gap-4 cursor-pointer">
    Full Name
  </div>
  <div className="cursor-pointer" >
    <div className="col === 'amount' ? 'text-right w-[125px]' : 'text-left'">
      Class
    </div>
  </div>
  <div className="cursor-pointer" >
    <div className="w-full flex justify-center">
      Check In
    </div>
  </div>
  <div className="cursor-pointer" >
    <div className="w-full flex justify-center">
      Check Out
    </div>
  </div>
</div>
 <div className="flex flex-col w-full">
    <div className="flex items-center justify-between w-full py-3 text-xs font-normal bg-white border-b border-[#e8e8e8]">
        <div className="grid w-full pl-11 grid-cols-4">
            <div className="">Jubril Musa</div>
            <div className="">SS 3</div>
            <div className="w-full flex justify-center">
                <input type="checkbox" name="" id="" />
            </div>
            <div className="w-full flex justify-center">
                <input type="checkbox" name="" id="" />
            </div>
        </div>
    </div>
    </div>           
    </div>
  )
}
