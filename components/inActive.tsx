import React from 'react'
import Button from './Buttons/Button'
import moment from "moment"
import { useMutation } from '@tanstack/react-query'
import { postRequest } from '@/api/apiCall'
import { STARTATTENDANCE } from '@/api/apiUrl'

export default function inActive() {
    const [schoolName, setSchoolName] = React.useState<string>()
    const [schoolLogo, setSchoolLogo] = React.useState<string>()
    const [schoolId, setSchoolId] = React.useState<string>()
    const [school, setSchool] = React.useState<string>()
    
    React.useEffect(() => {
        if(typeof window !== 'undefined'){
            setSchoolName(window.localStorage.getItem("schoolName"))
            setSchoolLogo(window.localStorage.getItem("schoolLogo"))
            setSchoolId(window.localStorage.getItem("schoolId"))
            setSchool(window.localStorage.getItem("schoolSlug"))
        }
        }, [])
        const {mutate} = useMutation({
            mutationFn: (data)=>postRequest({url:STARTATTENDANCE(schoolId), data}),
            onSuccess: ()=> {
                typeof window !== 'undefined' && window.localStorage.setItem("attendanceStatus", JSON.stringify(true))
                typeof window !== 'undefined' && window.localStorage.setItem("attendanceDate", JSON.stringify(moment(new Date()).format("LL")))
                window.location.href = `/${school}/attendance`
            },
            onError: (error: {response: any})=> {
                if(error?.response.data.message==="Attendance for the day  already created"){
                    window.location.href = `/${school}/attendance`
                }

            }
        })
        const handleStartAttendance=()=> {
            const status = typeof window!=="undefined" ? localStorage.getItem("attendanceStatus") : null
            if(status){
                window.location.href = `/${schoolId}/attendance`
            }
           else mutate()
        }
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
        <div className="mb-5 text-center flex flex-col items-center">
            <img src={schoolLogo} />
            <div className='text-lg'>
        {schoolName}
      </div>
        </div>
        <div className="">
            <Button type={'button'} size={'md'} value={'Start Attendance'} click={handleStartAttendance} location={'center'}  />
        </div>
    </div>
  )
}
