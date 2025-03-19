import React from "react";
import toast from "react-hot-toast";
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  useDeleteQuoteMutation,
  useFetchQuotesQuery,
} from "../../Redux/api/quotesApiSlice";
import Loading from "../../utils/Loading";

const AllQuotes = () => {
  const { data: quotesResponse, isLoading } = useFetchQuotesQuery();
  const { quotes } = quotesResponse || {};
  const [DeleteQuote] = useDeleteQuoteMutation();

  // const [currentPage, setCurrentPage] = useState(1);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  const handleDelete = async (quoteId) => {
    if (quoteId) {
      try {
        const res = await DeleteQuote(quoteId).unwrap();
        if (res?.success) {
          toast.success(res?.message);
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to delete quote!");
      }
    }
  };

  return isLoading ? (
    <div className="min-h-[calc(100vh_-_96px)]">
      <Loading />
    </div>
  ) : (
    <section className="min-h-[calc(100vh_-_96px)]">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-semibold leading-none">Quotes</h1>
        <Link
          to={"create"}
          className="font-medium px-4 py-2 rounded-[30px] border-primary-blue text-primary-blue border-2 hover:border-primary-blue duration-300 flex items-center gap-1 text-sm hover:bg-primary-blue hover:text-white"
        >
          <FiPlusCircle />
          Create new
        </Link>
      </div>
      <span className="block w-full h-px bg-black/20 my-5"></span>
      {quotes && quotes?.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {quotes?.map((quote, i) => {
            const thumbnail = quote?.thumbnail?.url;
            const authorImage = quote?.authorImage?.url;
            return (
              <div key={i}>
                <div
                  className="rounded-[30px] text-white py-10 text-center px-5 sm:px-10 bg-cover relative group overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,46,93,0.8), rgba(0,46,93,0.8)), url(${thumbnail})`,
                  }}
                >
                  <div className="absolute top-4 right-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-x-[50px] group-hover:translate-x-0">
                    <Link
                      to={"edit"}
                      state={quote}
                      className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
                    >
                      <FiEdit />
                    </Link>
                    <button
                      type="button"
                      className="bg-white shadow-box rounded-sm size-8 text-black hover:text-red-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
                      onClick={() => handleDelete(quote?._id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                  <div className="max-width font-mainak-signature text-lg md:text-xl">
                    <img
                      src={authorImage}
                      alt="Avatar Image"
                      className="block size-[100px] rounded-full mx-auto object-cover"
                    />
                    <p className="line-clamp-4 my-10 leading-[2]">
                      {quote?.quotes}
                    </p>
                    <h1>{quote?.authorName}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center">No Data Found!</p>
      )}
      {/* <hr className="bg-[#EAECF0] mb-5 mt-10" />
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      /> */}
    </section>
  );
};

export default AllQuotes;
