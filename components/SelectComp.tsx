import React from 'react'

export default function SelectComp() {
  
  return (
    <div>
        <select className='px-4 py-[10px] h-10 rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full focus:border-[#5F30E2] outline-none '>
            <option value="">JSS 1</option>
            <option value="">JSS 2</option>
            <option value="">JSS 3</option>
        </select> 
        {/* <input list="data" />
        <datalist id='data'>
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
          <option value="">four</option>
          <option value="">five</option>
        </datalist> */}
    </div>
  )
}
