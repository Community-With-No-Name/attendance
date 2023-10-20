import { getRequest } from "@/api/apiCall";
import { STUDENTS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import AuthPages from "@/components/Auth/AuthPages";
import Input from "@/components/FormFields/Input";
import SelectComp from "@/components/SelectComp";
import StudentList from "@/components/UserList";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

export default function Home() {

  const [schoolId, setSchoolId] =useState(typeof window !== "undefined" && window.localStorage.getItem("schoolId"))

  useEffect(() => {
      setSchoolId(typeof window !== "undefined" && window.localStorage.getItem("schoolId"))
  
  }, [])
  
    // const off = 2;
    const { data, isLoading } = useQuery({
      queryKey:[queryKeys.getStudents, schoolId] ,
      queryFn:async () => await getRequest({ url:STUDENTS( schoolId, off)}),
      retry: 2,
    });
    const [students, setStudents] = useState(data?.data);
    React.useEffect(() => {
      setStudents(data?.data);
    }, [data?.data]);
  
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
const[off, setOff] = useState(1)
console.log(filteredStudents)
  const handleChange =(e) =>{
    console.log(e.value)
  };
  const paginate = (pageNumber) => {
    setOff(pageNumber)
  };
  return (
    <AuthPages>
      <div>
        <div className=" flex flex-col justify-start gap-2  border-b-2 py-4 ">
          <div className=" text-xl font-bold ">
            Welcome Back to Musa-School{" "}
          </div>
          <div className=" text-lg font-normal">
            Here are some insights into your daily activities
          </div>
        </div>
        <div className=" flex justify-between mt-5">
          <div>
            {" "}
            <Input
              label=""
              type="name"
              value={""}
              change={handleChange}
              id="1"
              placeholder="Search Students"
              description=""
              disabled={false}
              required
            ></Input>
          </div>
          <div> <SelectComp setFilterOption={setFilterOption}/></div>
        </div>
        <div className=" pb-2">
          <StudentList students={filteredStudents} paginate={paginate} isLoading={isLoading} />
        </div>
        <div>
          
        </div>
      </div>
    </AuthPages>
  );
}
