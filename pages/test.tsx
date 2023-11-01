import { getRequest, postRequest } from '@/api/apiCall'
import { MARKATTENDANCE, STUDENTBASIC, STUDENTS } from '@/api/apiUrl'
import { queryKeys } from '@/api/queryKey'
import Input from '@/components/FormFields/Input'
import SelectComp from '@/components/SelectComp'
import Sidebar from '@/components/Sidebar'
import Des from '@/components/des'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import InActive from '../components/inActive';

export default function test() {

const fuseOptions = {
	isCaseSensitive: false,
	// includeScore: false,
	shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	// threshold: 0.6,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"student_name",
    "current_class"
		// "author.firstName"
	]
};
const   removeAccents = (str?: string) => {
  if (!str) return str;
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
  const [schoolId, setSchoolId] =useState(typeof window !== "undefined" && window.localStorage.getItem("schoolId"))

  useEffect(() => {
      setSchoolId(typeof window !== "undefined" && window.localStorage.getItem("schoolId"))
  
  }, [])
  
  const[off, setOff] = useState(1)
    // const off = 2;
    const { data, isLoading } = useQuery({
      queryKey:[queryKeys.getStudents, schoolId, off] ,
      queryFn:async () => await getRequest({ url:STUDENTBASIC( schoolId)}),
      retry: 2,
      enabled: !!schoolId
    });
    const [students, setStudents] = useState(data?.data?.map(student =>{
      return {
        ...student,
        current_class: removeAccents(student.current_class),
        student_name: removeAccents(student.student_name),
      }
    }));
    React.useEffect(() => {
      setStudents(data?.data?.map(student =>{
        return {
          ...student,
          current_class: removeAccents(student.current_class),
          student_name: removeAccents(student.student_name),
        }
      }));
    }, [data?.data]);4
  
  // console.log(students)
  
  const [filterOption, setFilterOption] = useState('all')
  const [filteredStudents, setFilteredStudents] = useState(filterOption==="all" ? students : []);
useEffect(()=> {
  setFilteredStudents(filterOption==="all" ? students : [])
},[students])
useEffect(()=>{
  console.log(filterOption)
  setFilteredStudents(
    filterOption==='all' ? students :
    students?.filter(std=> std.current_class.name===filterOption)
  )
}, [filterOption])
const [fuse, setFuse] = React.useState(new Fuse(students, fuseOptions))
React.useEffect(()=>{
  setFuse(new Fuse(students, fuseOptions))
},[students])
console.log(filteredStudents)
  const handleChange =(e) =>{
    console.log(e.value)
  };
  const paginate = (pageNumber) => {
    setOff(pageNumber)
  };
  const mutation = useMutation(postRequest,{
    onSuccess(data){
      console.log(data)
      setStudents(data?.data)
    }
  })
  const [search, setSearch] = React.useState("")
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleAttendance = (id: any, type: "string") => {
    const data = {
      student_id: id,
      attendance_type: type
    }
    mutation.mutate({data, url:MARKATTENDANCE(schoolId)})

  }
  const [isActive, setIsActive] = React.useState(typeof window!=='undefined' && JSON.parse(window.localStorage.getItem('attendanceStatus')))
  React.useEffect(()=>{
    setIsActive(typeof window!=='undefined' && JSON.parse(window.localStorage.getItem('attendanceStatus')))
    console.log(typeof window!=='undefined' && JSON.parse(window.localStorage.getItem('attendanceStatus')))
  },[typeof window!== 'undefined'])
  return (
    <>
    {
      isActive ?
      <div className='grid lg:grid-cols-6 md:grid-cols-5 grid-cols-1 pt-6 w-full h-full  bg-gray-100'>
        <div className="lg:cols-span-1 md:grid-cols-2">
            <Sidebar />
        </div>
        <div className="lg:col-span-5 md:col-span-3 md:px-6 h-full">
        <div className=" flex justify-between items-center mt-5">
          <div>
          <div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          const newSearch = fuse?.search(removeAccents(search))
          console.log(newSearch)
        }} className="flex-col flex gap-[6px]">
            <div className="h-10 relative">
                <input type='search' onChange={handleSearch} placeholder={"Search Students"} className='px-4 py-[10px] h-10 rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full focus:border-[#5F30E2] outline-none ' />
            </div>
            <button type="submit">search</button>
        </form>
    </div>
          </div>
        </div>
        <div className="md:block hidden">
        <Des students={students} mark={handleAttendance} />
        </div>
        <div className="md:hidden px-3">
          <div className="grid-cols-1 grid gap-2">
            <div className="p-4 rounded-lg flex flex-col gap-2 border bg-white">
              <div className="text-xl font-semibold">
                Musa Jubril
              </div>
              <hr />
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-1 items-center">
                  <div className="">Check In</div>
                  <div className="">
                    <input type="checkbox" name="" id="" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                <div className="">Check Out</div>
                  <div className="">
                    <input type="checkbox" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    :
    <InActive />
            }
              </>
  )
}
