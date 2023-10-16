import React, { useState } from "react";

export default function Pagination({
  studentPerPage,
  totalStudents,
  paginate,
}) {
  const pagenumbers = [];
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    clicked ? setClicked(false) : setClicked(true);
  };

  for (let i = 1; i <= Math.ceil(totalStudents / studentPerPage); i++) {
    pagenumbers.push(i);
  }
  return (
    <div>
      <ul className="flex justify-start items-center gap-2 pb-4 ">
        {pagenumbers.map((number) => (
          <li
            className={` flex justify-center items-center border-2 w-8
                h-8 rounded-full text-base font-semibold ${clicked ? ' bg-gray-300 text-purple-500' : '' }
                 `}
            key={number}
            onClick={() => {
                paginate(number);
                handleClicked();
              }}
          >
            <button 
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
