import {GrUserNew, GrUserExpert} from "react-icons/gr"
import React from "react";
import { FaUsers, FaUserCheck } from "react-icons/fa";
import { BiSolidUserX } from "react-icons/bi"

   
  export default function Sidebar({total, absent, present}) {
    const [schoolName, setSchoolName] = React.useState("")
    const [schoolLogo, setSchoolLogo] = React.useState("")
    
    React.useEffect(() => {
            setSchoolName(typeof window !== undefined && localStorage.getItem("schoolName"))
            setSchoolLogo(typeof window !== undefined && localStorage.getItem("schoolLogo"))
        }, [])
    return (
      <div className="md:h-[calc(100vh-2rem)] w-full md:max-w-[20rem] p-4">
        <div className="mb-5 text-center flex flex-col items-center">
            <img src={schoolLogo} />
            {schoolName}
        </div>
        <div className="flex flex-col gap-3">
            <div className="w-full p-4 flex gap-6 items-center shadow bg-white rounded-[12px]">
                <div className="h-11 w-11 flex items-center justify-center bg-[#3498DB]/20 rounded-full">
                    <FaUsers className='h-6 w-6 text-[#3498DB]'></FaUsers>
                </div>
                <div className="flex flex-col">
                    <div className="text-lg font-medium leading-10 text-black/75">{total ? total : 0}</div>
                    <div className="text-black/50 font-medium text-sm leading-6">Total Students</div>
                </div>
            </div>
            <div className="w-full p-4 flex gap-6 items-center shadow bg-white rounded-[12px]">
                <div className="h-11 w-11 flex items-center justify-center bg-[#3498DB]/20 rounded-full">
                    <FaUserCheck className='h-6 w-6 text-[#3498DB]'></FaUserCheck>
                </div>
                <div className="flex flex-col">
                    <div className="text-lg font-medium leading-10 text-black/75">{present ? present : 0}</div>
                    <div className="text-black/50 font-medium text-sm leading-6">Students Present</div>
                </div>
            </div>
            <div className="w-full p-4 flex gap-6 items-center shadow bg-white rounded-[12px]">
                <div className="h-11 w-11 flex items-center justify-center bg-[#3498DB]/20 rounded-full">
                    <BiSolidUserX className='h-6 w-6 text-[#3498DB]'></BiSolidUserX>
                </div>
                <div className="flex flex-col">
                    <div className="text-lg font-medium leading-10 text-black/75">{absent ? absent : 0}</div>
                    <div className="text-black/50 font-medium text-sm leading-6">Students Absent</div>
                </div>
            </div>
            
        </div>
        </div>
    );
  }