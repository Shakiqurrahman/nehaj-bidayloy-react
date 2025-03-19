import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({
  totalPages,
  // totalItems,
  // itemsPerPage,
  currentPage,
  onPageChange,
  scrollRef,
}) => {
  // Calculate total number of pages
  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  // Handle page click
  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);

      // Scroll to the target element after page change
      setTimeout(() => {
        if (scrollRef?.current) {
          scrollRef?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Align to the top of the element
          });
        }
      }, 100); // 100ms delay
    }
  };

  // Create page numbers array with ellipsis logic
  const pageNumbers = [];

  const generatePageNumbers = () => {
    if (totalPages <= 5) {
      // If total pages are less than or equal to 5, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show first page, last page, and some middle pages
      if (currentPage <= 3) {
        // Show first 3 pages
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages - 2);
        pageNumbers.push(totalPages - 1);
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show last 5 pages
        pageNumbers.push(1);
        pageNumbers.push(2);
        pageNumbers.push(3);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Show the current page in the middle
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
  };

  generatePageNumbers();

  return (
    <div className="flex gap-3 items-center justify-between">
      {/* Previous Button */}
      <button
        className="text-sm flex gap-2 items-center text-[#667085] hover:text-primary-blue duration-300 disabled:text-[#667085]/50"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft /> Prev
      </button>

      {/* Page Numbers with Ellipsis */}
      <div className="hidden sm:flex items-center">
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            className={`size-8 text-sm rounded-full flex items-center justify-center duration-300 hover:bg-[#B3B3B3] hover:text-primary-blue disabled:bg-transparent ${
              page === currentPage
                ? "bg-[#B3B3B3] text-primary-blue"
                : "text-[#667085]"
            }`}
            onClick={() => typeof page === "number" && handlePageClick(page)}
            disabled={page === "..." || typeof page !== "number"}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="text-sm flex gap-2 items-center text-[#667085] hover:text-primary-blue duration-300 disabled:text-[#667085]/50"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
