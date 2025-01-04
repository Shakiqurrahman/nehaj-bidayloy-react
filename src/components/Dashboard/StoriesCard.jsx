import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const StoriesCard = ({ storiesData }) => {
  return (
    <div className="p-3 bg-white rounded-lg relative group overflow-hidden">
      <div className="absolute top-4 right-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-x-[50px] group-hover:translate-x-0">
        <Link
          to={"edit"}
          className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
        >
          <FiEdit />
        </Link>
        <button className="bg-white shadow-box rounded-sm size-8 text-black hover:text-red-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300">
          <RiDeleteBin6Line />
        </button>
      </div>
      <img
        src="https://via.placeholder.com/150x150"
        className="w-full block object-cover"
        alt=""
      />
      <Link className="line-clamp-1 font-ador text-lg text-primary-blue mt-5">
        হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতি হিমুর
        প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতি
      </Link>
      <p className="line-clamp-2 my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a alias
        eveniet architecto vitae illum laboriosam harum nobis nam, quaerat
        voluptates fuga iste mollitia, perspiciatis quam eligendi saepe
        voluptate autem totam? Laboriosam quis magni veritatis saepe, vitae
        voluptate libero debitis quo ea, adipisci reiciendis possimus cumque
        minus modi doloribus! Repellendus deserunt aliquid minus similique, quae
        esse, modi alias dolorum dolore, nam atque! Iusto, quia id. Tempore,
        totam harum. Obcaecati tempore natus accusamus asperiores ipsam
        assumenda? Repudiandae commodi quos excepturi eius omnis veritatis
        laudantium corporis nisi dolore ducimus. Velit mollitia commodi facere
        aliquam, dolores, temporibus corrupti officia illo ipsum sequi
        doloribus.
      </p>
      <span className="h-px w-full bg-black/20 block my-3"></span>
      <div className="flex justify-center gap-2 items-center">
        <Link className="font-ador text-primary-blue">Shakiqur Rahman</Link>
        <span className="block w-px h-5 bg-black/20"></span>
        <Link className="font-ador  text-primary-blue">চিন্তা</Link>
      </div>
    </div>
  );
};

export default StoriesCard;
