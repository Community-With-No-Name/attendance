import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKey";
import { getRequest } from "@/api/apiCall";
import { STUDENTS } from "@/api/apiUrl";


export default function StudentList() {
  

let schoolId ='';

useEffect(() => {
    schoolId = localStorage.getItem("schoolId");

}, [])

  const off = 2;
  const { data } = useQuery({
    queryKey:[queryKeys.getStudents, schoolId] ,
    queryFn:async () => await getRequest({ url:STUDENTS( schoolId, off)}),
    retry: 2,
  });
  const [students, setStudents] = useState(data?.data);
  React.useEffect(() => {
    setStudents(data?.data);
  }, [data?.data]);

console.log(students)

//   const [currentPage, setCurrentPage] = useState(1);
//   const [studentPerPage, setStudentPerPage] = useState(5);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber)
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//       setStudents(res.data);
//     };
//     fetchData();
//   }, []);

//   const indexOfLastStudents = currentPage * studentPerPage;
//   const indexofFirstStudents = indexOfLastStudents - studentPerPage;
//   const currentStudents = students.slice(
//     indexofFirstStudents,
//     indexOfLastStudents
//   );

  return (
    <div>
      <div className=" my-6 border rounded-md shadow-lg px-6">
        <div className=" text-sm font-semibold py-4">Student List</div>
        <div className=" grid grid-cols-5 text-gray-500 text-base pb-8 ">
          <div className=" col-span-2">Name</div>
          <div className=" col-span-1">Class</div>
          <div className=" col-span-1">Check In</div>
          <div className=" col-span-1">Check out</div>
        </div>
        {students && students.map((pupil) => (
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
        ))}
        {/* <Pagination
          studentPerPage={studentPerPage}
          totalStudents={students.length}
          paginate={paginate}
        ></Pagination> */}
      </div>
    </div>
  );
}
