import React from "react";
import toast from "react-hot-toast";
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
    useDeleteCategoryMutation,
    useGetCategoriesQuery,
} from "../../Redux/api/categoryApiSlice";

const AllCategories = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery();
    const [deleteCategory] = useDeleteCategoryMutation();

    const handleDelete = async (categoryId) => {
        try {
            const res = await deleteCategory(categoryId).unwrap();
            toast.success(res.message || "Category deleted successfully");
        } catch (error) {
            toast.error(error?.data?.message || "Failed to delete category");
        }
    };

    return (
        <>
            <section className="">
                <div className="flex items-center justify-between">
                    <h1 className="text-[28px] font-semibold leading-none">
                        Categories
                    </h1>
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
                                <th className="w-[20%] hidden sm:block mx-auto">
                                    Date
                                </th>
                                <th className="w-[20%]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.slice(0, 20)?.map((category, idx) => (
                                <tr
                                    key={idx}
                                    className="text-center border-b last:border-0"
                                >
                                    <td>{idx + 1}</td>
                                    <td>{category?.category}</td>
                                    <td className=" hidden sm:block text-sm">
                                        {category?.updatedAt &&
                                            new Date(
                                                category?.updatedAt
                                            ).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2 justify-center">
                                            <Link
                                                to={"edit"}
                                                state={category}
                                                className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
                                            >
                                                <FiEdit />
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(category?._id)
                                                }
                                                className="bg-white shadow-box rounded-sm size-8 text-black hover:text-red-600 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
                                            >
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
