import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export default function Pagination({ paginate }) {
  const [pagenumbers, setPagenumbers] = useState([]);
  useEffect(() => {
    const pageArray = [{ num: 1, active: true }];
    for (let i = 2; i <= 21; i++) {
      pageArray.push({ num: i, active: false });
    }
    setPagenumbers(pageArray);
  }, []);

  const lastpage = pagenumbers[pagenumbers.length - 1];
  //   console.log(lastpage);

  const [currentPage, setCurrentpage] = useState(1);

  const newpagenumbers = pagenumbers.slice(currentPage - 1, currentPage + 2);
  //   console.log(newpagenumbers, pagenumbers, currentPage);

  const lastpagenumbers = pagenumbers.slice(18, 21);
  //   console.log(lastpagenumbers, pagenumbers, currentPage);

  const handleClicked = (number) => {
    const updatedPagenumbers = pagenumbers.map((page) => {
      return {
        ...page,
        active: page.num === number.num,
      };
    });
    setPagenumbers(updatedPagenumbers);
    setCurrentpage(number.num);
  };

  console.log(currentPage);

  const prev = () => {
    if (currentPage === 1) {
      return;
    } else {
      let prevpage = currentPage - 1;
      paginate(prevpage);
      setCurrentpage(prevpage);
      setPagenumbers((prevPages) => {
        const updatedPages = prevPages.map((page) => {
          if (page.num === prevpage) {
            return { ...page, active: true };
          } else {
            return { ...page, active: false };
          }
        });
        return updatedPages;
      });
    }
  };

  const next = () => {
    if (currentPage === lastpage.num) {
      return;
    } else {
      let nextpage = currentPage + 1;
      paginate(nextpage);
      setCurrentpage(nextpage);
      setPagenumbers((prevPages) => {
        const updatedPages = prevPages.map((page) => {
          if (page.num === nextpage) {
            return { ...page, active: true };
          } else {
            return { ...page, active: false };
          }
        });
        return updatedPages;
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <button className=" cursor-pointer pb-3" onClick={prev}>
          <HiOutlineArrowLeft></HiOutlineArrowLeft>
        </button>

        <ul className="flex justify-evenly items-center gap-2 pb-4 ">
          <li
            className={` flex justify-center items-center border-2 w-8
            h-8 rounded-full text-base font-semibold cursor-pointer bg-gray-200 ${
              newpagenumbers?.includes(pagenumbers[0]) ? "hidden " : " block"
            }
             `}
            onClick={() => {
              paginate(pagenumbers[0]);
              handleClicked(pagenumbers[0]);
            }}
          >
            1
          </li>
          <li
            className={` text-base font-semibold cursor-pointer ${
              newpagenumbers?.includes(pagenumbers[0]) ? "hidden " : " block"
            } ${newpagenumbers?.includes(pagenumbers[1]) ? "hidden " : " block"}
             `}
          >
            ...
          </li>
          {newpagenumbers?.includes(lastpage)
            ? lastpagenumbers.map((number) => (
                <li
                  className={` flex justify-center items-center border-2 w-8
                h-8 rounded-full text-base font-semibold cursor-pointer gap-2 ${
                  number?.active === true ? " bg-purple-500 text-white w-10  " : "bg-gray-200 "
                }
                 `}
                  key={number?.num}
                  onClick={() => {
                    paginate(number?.num);
                    handleClicked(number);
                  }}
                >
                  {number?.num}
                </li>
              ))
            : newpagenumbers.map((number) => (
                <li
                  className={` flex justify-center items-center border-2 w-8 
                h-8 rounded-full text-base font-semibold cursor-pointer gap-2 ${
                  number?.active === true ? " bg-purple-500 text-white w-10 " : "bg-gray-200"
                }
                 `}
                  key={number?.num}
                  onClick={() => {
                    paginate(number?.num);
                    handleClicked(number);
                  }}
                >
                  {number?.num}
                </li>
              ))}
          <li
            className={` text-base font-semibold cursor-pointer ${
              newpagenumbers?.includes(lastpage) ? "hidden " : " block"
            } ${newpagenumbers?.includes(pagenumbers[19]) ? "hidden " : " block"}
             `}
          >
            ...
          </li>
          <li
            className={` flex justify-center items-center border-2 w-8
            h-8 rounded-full text-base font-semibold cursor-pointer ${
              newpagenumbers?.includes(lastpage) ? "hidden" : " block"
            } 
              ${
                pagenumbers[pagenumbers.length - 1]?.active === true
                  ? " bg-purple-500 text-white w-10 h-10"
                  : "bg-gray-200"
              }
                 `}
            onClick={() => {
              paginate(lastpage?.num);
              handleClicked(lastpage);
            }}
          >
            {lastpage?.num}
          </li>
        </ul>

        <button className=" cursor-pointer pb-3 " onClick={next}>
          <HiOutlineArrowRight></HiOutlineArrowRight>
        </button>
      </div>
    </div>
  );
}
