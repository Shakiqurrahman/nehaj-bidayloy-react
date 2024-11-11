import React from "react";
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const stories = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  return (
    <>
      <section className="">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] font-semibold leading-none">Categories</h1>
          <Link
            to={"create"}
            className="font-medium px-4 py-2 rounded-[30px] border-primary-500 text-primary border-2 hover:border-primary-700 duration-300 flex items-center gap-1 text-sm hover:bg-primary-700 hover:text-white"
          >
            <FiPlusCircle />
            Create new
          </Link>
        </div>
        <span className="block w-full h-px bg-black/20 my-5"></span>
        <div className="bg-white pt-2 px-5">
          <table className="table-auto w-full" cellPadding={10}>
            <thead>
              <tr className="border-b">
                <th className="w-[10%]">No</th>
                <th className="w-auto">Category Name</th>
                <th className="w-[20%] hidden sm:block">Date</th>
                <th className="w-[20%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {stories?.slice(0, 20).map((story, idx) => (
                <tr key={idx} className="text-center border-b last:border-0">
                  <td>1</td>
                  <td>Malcolm Lockyer</td>
                  <td className=" hidden sm:block">19/01/2024</td>
                  <td>
                    <div className="flex items-center gap-2 justify-center">
                      <Link
                        to={"edit"}
                        className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
                      >
                        <FiEdit />
                      </Link>
                      <button className="bg-white shadow-box rounded-sm size-8 text-black hover:text-red-600 flex items-center justify-center text-base hover:shadow-box-lg duration-300">
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AllCategories;
