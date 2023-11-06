import React from 'react'
import Button from '@/components/Buttons/Button'
import { useRouter } from 'next/router'

export default function index() {
  const router = useRouter()
  const handleStartAttendance=()=> {
    const school = typeof window !== 'undefined'? localStorage.getItem('schoolSlug') : ""
    router.push(`/${school}/login`, `/${school}/login`)
}
  return (

    <div className='h-screen w-full flex items-center justify-center flex-col'>
    <div className="">
    <div className="mb-5 text-center flex flex-col items-center">
        <img src={"/logo.png"} />
      <div>
        Attendance Management System
      </div>
    </div>
    </div>
    <div className="">
        <Button type={'button'} size={'md'} value={'Proceed To Login'} click={handleStartAttendance} location={'center'} />
    </div>
</div>
  )
}
