import { getRequest, postRequest } from '@/api/apiCall'
import { MARKATTENDANCE, STUDENTBASIC } from '@/api/apiUrl'
import { queryKeys } from '@/api/queryKey'
import Sidebar from '@/components/Sidebar'
import Des from '@/components/des'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Button from '@/components/Buttons/Button'

export default function attendance() {

  const [schoolId, setSchoolId] =useState(typeof window !== "undefined" && window.localStorage.getItem("schoolId"))

  useEffect(() => {
      setSchoolId(typeof window !== "undefined" && window.localStorage.getItem("schoolId"))
  
  }, [])
  
    const { data } = useQuery({
      queryKey:[queryKeys.getStudents, schoolId] ,
      queryFn:async () => await getRequest({ url:STUDENTBASIC( schoolId)}),
      retry: 2,
      enabled: !!schoolId
    });
    const [students, setStudents] = useState(data?.data?.map(student =>{
      return {
        ...student,
        current_class: student.current_class,
        student_name: student.student_name,
      }
    }));
    const [count, setCount] = React.useState(data?.pagination?.count)
    const [present, setPresent] = React.useState(data?.pagination?.count)
    const [absent, setAbsent] = React.useState(data?.pagination?.count)
    React.useEffect(() => {
      setStudents(data?.data?.map(student =>{
        return {
          ...student,
          current_class: student.current_class,
          student_name: student.student_name,
        }
      }));
      setCount(data?.pagination?.count)
    }, [data?.data]);4
  
  
  const [filterOption, setFilterOption] = useState('all')
  const [filteredStudents, setFilteredStudents] = useState(students);
useEffect(()=> {
  setFilteredStudents(students)
},[students])

  const mutation = useMutation(postRequest,{
    onSuccess(data){
      setStudents(data?.data)
    }
  })
  const [search, setSearch] = React.useState("")
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleAttendance = (id: any, type: string) => {
    const data = {
      student_id: id,
      attendance_type: type
    }
    mutation.mutate({data, url:MARKATTENDANCE(schoolId)})

  }
  React.useEffect(()=>{
    if(typeof window !== 'undefined'){
        const status = window.localStorage?.getItem("attendanceStatus")
        if(status){
        }
        else {
            window.location.href = "/inactive"
        }
    }
}, [])
React.useEffect(()=>{
  setPresent(students?.filter(student => student.time_in!==null)?.length)
  setAbsent(students?.filter(student => student.time_in===null)?.length)
}, [students])
  return (

      <div className='grid lg:grid-cols-6 md:grid-cols-5 grid-cols-1 pt-6 w-full h-full  bg-white'>
        <div className="lg:cols-span-1 md:grid-cols-2">
            <Sidebar total={count} absent={absent} present={present} />
        </div>
        <div className="lg:col-span-5 md:col-span-3 md:px-6 h-full px-4">
        <form onSubmit={(e)=>{
          e.preventDefault()
                   setFilteredStudents(students.filter(std=>std.student_name.toLowerCase()?.includes(search.toLowerCase())))
        }} className="flex items-center pt-5 gap-[6px] pb-4 w-full">
            <div className="w-full flex-grow">
                <input type='search' onChange={handleSearch} placeholder={"Search Students"} className='px-4 py-2 rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full focus:border-[#5F30E2] outline-none ' />
            </div>
            <div className="">
            <Button type={'submit'} size={'md'} value={'Search'} click={()=>{}} location={'end'} />
            </div>
        </form>
        <div className="md:block hidden">
        <Des students={filteredStudents} mark={handleAttendance} />
        </div>
        <div className="md:hidden">
          <div className="grid-cols-1 grid gap-2">
            {
              filteredStudents?.map((student, i)=>(
            <div className="p-4 rounded-lg flex flex-col gap-2 border bg-white" key={i}>
              <div className="text-lg font-semibold">
                {student.student_name}
              </div>
              <hr />
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-1 items-center">
                  <div className="">Check In</div>
                  <div className="">
                    <input className='outline-none border-[#D9D9D9] border w-4 h-4 rounded-lg' type="checkbox" name="" id="" disabled={student.time_in ? true : false} checked={student.time_in ? true : false} onChange={()=>handleAttendance(student.student_id, "time_in")} />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                <div className="">Check Out</div>
                  <div className="">
                    <input className='outline-none border-[#D9D9D9] border w-4 h-4 rounded-lg' type="checkbox" name="" id="" disabled={student.time_out ? true : false} checked={student.time_out ? true : false} onChange={()=>handleAttendance(student.student_id, "time_out")} />
                  </div>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
        </div>
    </div>
  )
}
