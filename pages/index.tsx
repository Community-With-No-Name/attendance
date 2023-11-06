import { getRequest, postRequest } from '@/api/apiCall'
import { MARKATTENDANCE, STUDENTBASIC } from '@/api/apiUrl'
import { queryKeys } from '@/api/queryKey'
import Sidebar from '@/components/Sidebar'
import Des from '@/components/des'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Button from '@/components/Buttons/Button'
import { Typography } from '@material-tailwind/react'
import { useRouter } from 'next/router'

export default function index() {
  const router = useRouter()
  const handleStartAttendance=()=> {
    const school = typeof window !== 'undefined'? window.localStorage.getItem('schoolSlug') : undefined
    router.push(`/${school}/login`, `/${school}/login`)
}
  return (

    <div className='h-screen w-full flex items-center justify-center flex-col'>
    <div className="">
    <div className="mb-5 text-center flex flex-col items-center">
        <img src={"/logo.png"} />
      <Typography variant="h3" color="blue-gray">
        Attendance Management System
      </Typography>
    </div>
    </div>
    <div className="">
        <Button type={'button'} size={'md'} value={'Proceed To Login'} click={handleStartAttendance} location={'center'} disabled={false} />
    </div>
</div>
  )
}
