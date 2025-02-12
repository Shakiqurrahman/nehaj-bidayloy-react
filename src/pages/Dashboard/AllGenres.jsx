import React from "react";
import toast from "react-hot-toast";
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  useDeleteGenreMutation,
  useGetGenresQuery,
} from "../../Redux/api/genreApiSlice";
import Loading from "../../utils/Loading";
import { dateFormatter } from "../../utils/dateFormatter";

const AllGenres = () => {
  const { data: genres, isLoading } = useGetGenresQuery();
  const [deleteGenre] = useDeleteGenreMutation();

  const handleDelete = async (genreId) => {
    try {
      const res = await deleteGenre(genreId).unwrap();
      toast.success(res.message || "Genre deleted successfully");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete genre");
    }
  };
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section className="min-h-[calc(100vh_-_96px)]">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] font-semibold leading-none">Genres</h1>
          <Link
            to={"create"}
            className="font-medium px-4 py-2 rounded-[30px] border-primary-blue text-primary-blue border-2 hover:border-primary-blue duration-300 flex items-center gap-1 text-sm hover:bg-primary-blue hover:text-white"
          >
            <FiPlusCircle />
            Create new
          </Link>
        </div>
        <span className="block w-full h-px bg-black/20 my-5"></span>
        {genres && genres?.length > 0 ? (
          <div className="bg-white pt-2 px-5">
            <table className="table-auto w-full" cellPadding={10}>
              <thead>
                <tr className="border-b">
                  <th className="w-[10%]">No</th>
                  <th className="w-auto">Genre Name</th>
                  <th className="w-[20%] hidden sm:block mx-auto">Date</th>
                  <th className="w-[20%]">Action</th>
                </tr>
              </thead>
              <tbody>
                {genres?.map((genre, idx) => (
                  <tr key={idx} className="text-center border-b last:border-0">
                    <td>{idx + 1}</td>
                    <td>{genre?.genre}</td>
                    <td className=" hidden sm:block text-sm">
                      {genre?.updatedAt && dateFormatter(genre?.updatedAt)}
                    </td>
                    <td>
                      <div className="flex items-center gap-2 justify-center">
                        <Link
                          to={"edit"}
                          state={genre}
                          className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
                        >
                          <FiEdit />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(genre?._id)}
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
        ) : (
          <p className="text-center">No Data Found!</p>
        )}
      </section>
    </>
  );
};

export default AllGenres;
