import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKey";
import { getRequest } from "@/api/apiCall";
import { HOMEROOMS, STUDENTS } from "@/api/apiUrl";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



export default function StudentList({students, isLoading, paginate}) {
  
    // const [off, setOff] = useState(1);


  return (
    <div>
      <div className=" my-6 border rou rounded-md shadow-lg px-6">
        <div className=" text-sm font-semibold py-4">Student List</div>
        <div className=" grid grid-cols-5 text-gray-500 text-base pb-8 ">
          <div className=" col-span-2">Name</div>
          <div className=" col-span-1">Class</div>
          <div className=" col-span-1">Check In</div>
          <div className=" col-span-1">Check out</div>
        </div>
  { isLoading ? <Skeleton count={20} borderRadius={'0.5rem'} ></Skeleton>  : students && students.map((pupil) => (
          <div
            key={pupil.id}
            className=" grid grid-cols-5 text-purple-600 font-semibold text-sm pb-8"
          >
            <div className=" col-span-2 flex items-center gap-6">
              <div className=" border h-8 w-8 rounded-full overflow-hidden">
                <img src={pupil.image} alt="" className=" object-cover " />
              </div>
              <div>{pupil.full_name}</div>
            </div>
            <div className="col-span-1">{pupil.current_class.name}</div>
            <div className="col-span-1">
              <input type="checkbox" name="" id="" className=" h-5 w-5" />
            </div>
            <div className="col-span-1">
              <input type="checkbox" name="" id="" className=" h-5 w-5" />
            </div>
          </div>
        )) }
        <Pagination
          paginate={paginate}
        ></Pagination>
      </div>
    </div>
  );
}
