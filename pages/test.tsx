import Sidebar from '@/components/Sidebar'
import Des from '@/components/des'
import React from 'react'

export default function test() {

  return (
    <div className='grid grid-cols-6 pt-6 w-full'>
        <div className="cols-span 1">
            <Sidebar />
        </div>
        <div className="col-span-5">
        <Des />
        </div>
    </div>
  )
}
