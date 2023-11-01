import {GrUserNew, GrUserExpert} from "react-icons/gr"
import React from "react";

   
  export default function Sidebar() {
    const [schoolName, setSchoolName] = React.useState(typeof window !== undefined ? window.localStorage.getItem("schoolName"): "")
    const [schoolLogo, setSchoolLogo] = React.useState(typeof window !== undefined ? window.localStorage.getItem("schoolLogo"): "")
    
    React.useEffect(() => {
            setSchoolName(typeof window !== undefined && window.localStorage.getItem("schoolName"))
            setSchoolLogo(typeof window !== undefined && window.localStorage.getItem("schoolLogo"))
        }, [])
    return (
      <div className="md:h-[calc(100vh-2rem)] w-full md:max-w-[20rem] p-4 md:shadow-xl shadow-blue-gray-900/5">
        <div className="mb-5 text-center flex flex-col items-center">
            <img src={schoolLogo} />
            {schoolName}
        </div>
            <div className="w-full p-7 flex gap-6 items-center shadow bg-white rounded-[12px]">
                <div className="h-11 w-11 flex items-center justify-center bg-[#3498DB]/20 rounded-full">
                    <GrUserExpert className='h-6 w-6 text-[#3498DB]'></GrUserExpert>
                </div>
                <div className="flex flex-col">
                    <div className="text-[34px] font-medium leading-10 text-black/75">500</div>
                    <div className="text-black/50 font-medium text-sm leading-6">Total Students</div>
                </div>
            </div>
        </div>
    );
  }