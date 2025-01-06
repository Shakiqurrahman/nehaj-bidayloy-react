import React from "react";
import { Link } from "react-router-dom";
import postImage from "../../assets/images/HomeSinglePostCardImage.png";

const HomeSinglePostCard = () => {
  return (
    <div className="flex gap-5">
      <div className="w-[60%] shrink-0">
        <img
          src={postImage}
          alt="Post Thumbnail"
          className="size-full object-cover object-center rounded-[30px]"
        />
      </div>
      <div className="w-[40%] shrink-0 border border-primary-blue rounded-[30px] p-[60px]">
        <h1 className="text-3xl font-niladri text-secondary-charcoal-gray">
          চিন্তার প্রস্তচ্ছেদ কিংবা আগুনের প্রলাপ
        </h1>
        <p className="mt-[26px] mb-[40px]">
          নেহাজ শব্দের উৎস হইলো আরবি &quot;নাহাজ&quot;, যার থাকি মানহাজ শব্দ
          আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই
          সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে
          &quot;বিশেষ&quot; ধরণ লালন এইটারে নেহাজ বলতেন।
          <br />
          &quot;নেহাজ করে জানতে হয়&quot;। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা
          পটেনশিয়াল, যে &quot;ভাষাময়&quot; অস্তিত্ব মানুষের যাপনরে
          &quot;পার্টিকুলার&quot; আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত
          না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত সম্ভাবনার বরাতে যে
          অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা চর্চায়, সত্য অনুসন্ধানে,
          ওইটারেই &quot;নেহাজ&quot; কই আমরা।
        </p>
        <Link
          to={"/"}
          className="w-[180px] h-[50px] flex items-center justify-center p-[10px] rounded-[100px] border border-primary-blue text-primary-blue text-lg hover:bg-primary-blue hover:text-white duration-300 font-niladri"
        >
          পড়ুন
        </Link>
      </div>
    </div>
  );
};

export default HomeSinglePostCard;
