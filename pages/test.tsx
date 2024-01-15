import React from 'react'

export default function test() {
    const Expensedata = [
        {
          name: "Shopping",
          bgcolour: "bg-yellow-500",
          textcolour: "text-yellow-500",
          expense: "-5120",
          image: "/aaron/dorcas"
        },
        {
          name: "Subscription",
          bgcolour: "bg-blue-500",
          textcolour: "text-blue-500",
          expense: "-1280",
        },
        {
          name: "Food",
          bgcolour: "bg-red-500",
          textcolour: "text-red-500",
          expense: "-532",
        }
      ];





  return (
    <div>
        {
            Expensedata.map((info, index) => (
                <div className="flex" key={index}>
                    <p>{info.name}</p>
                    <p>{info.expense}</p>
                    <div className={` h-3 w-11/12 ${ info.bgcolour} rounded-full `}></div>
                    <img src={info.image} alt="" />


                </div>

            ))
        }
    </div>
  )
}
