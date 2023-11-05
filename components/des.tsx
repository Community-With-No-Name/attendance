import { list } from 'postcss'
import React from 'react'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"

export default function Des({students, mark}) {
  console.log(students)
  return (
    <div className='w-full overflow-y-scroll'>
    <div className="grid w-full py-3 text-sm font-semibold rounded-lg bg-[#000000]/20 pl-11 grid-cols-4 + arrLength(columns)">
  <div className="flex items-start justify-start gap-4 cursor-pointer">
    Full Name
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
      {
        students?.map((std, i)=>(
    <div className="flex items-center justify-between w-full py-3 text-xs font-normal bg-white border-b border-[#e8e8e8]"  key={std.student_id}>
        <div className="grid w-full pl-11 grid-cols-4">
            <div className="">{std.student_name}</div>
            <div className="w-full flex justify-center">
                <input className='outline-none border-[#D9D9D9] border w-5 h-5 rounded-lg' type="checkbox" name="" id="" disabled={std.time_in ? true : false} checked={std.time_in ? true : false} onChange={()=>mark(std.student_id, "time_in")} />
            </div>
            <div className="w-full flex justify-center">
                <input className='outline-none border-[#D9D9D9] border w-5 h-5 rounded-lg' type="checkbox" name="" id="" disabled={std.time_out ? true : false} checked={std.time_out ? true : false} onChange={()=>mark(std.student_id, "time_out")} />
            </div>
        </div>
    </div>
        ))
      }
    </div>           
    </div>
  )
}
