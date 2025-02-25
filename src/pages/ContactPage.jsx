import React from "react";
import FacebookIcon from "../assets/icon-components/FacebookIcon";
import InstagramIcon from "../assets/icon-components/InstagramIcon";
import YoutubeIcon from "../assets/icon-components/YoutubeIcon";
import image1 from "../assets/images/about-us-logo.png";
import image2 from "../assets/images/Devil's love 1.png";

const ContactPage = () => {
  const handleSocialLink = (link = "") => {
    if (link) {
      window.open(link, "_blank"); // Opens the link in a new tab
    }
  };

  return (
    <section className="pt-[200px] sm:pb-[70px]">
      <div className="max-width">
        <div className="flex flex-wrap sm:flex-nowrap items-stretch gap-2 sm:gap-5">
          <div className="w-full rounded-2xl">
            <img
              src={image1}
              alt="Logo"
              className="rounded-2xl w-full object-cover object-center"
            />
            <img
              src={image2}
              alt="Eagle"
              className="rounded-2xl w-full object-cover object-center lg:hidden"
            />
            <div className="border border-primary-blue p-5 sm:p-[50px] rounded-lg sm:rounded-[30px]  text-primary-blue mt-6">
              <p className="text-base sm:text-lg text-justify sm:text-start font-medium">
                নেহাজ শব্দের উৎস হইলো আরবি &quot;নাহাজ&quot;, যার থাকি মানহাজ
                শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা
                পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা,
                সাধনা,অভিনিবেশের যে &quot;বিশেষ&quot; ধরণ লালন এইটারে নেহাজ
                বলতেন। &quot;নেহাজ করে জানতে হয়&quot;। মানুষের মাঝে নিহিত যে
                অমিত সম্ভাবনা বা পটেনশিয়াল, যে &quot;ভাষাময়&quot; অস্তিত্ব
                মানুষের যাপনরে &quot;পার্টিকুলার&quot; আর সার্থক কইরা তোলে, যার
                জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়।
                এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর
                চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই &quot;নেহাজ&quot; কই
                আমরা।
              </p>
              <div className="mt-10">
                <p className="font-bold">
                  নিয়মিত আপডেট পেতে যুক্ত থাকুন আমাদের সোশ্যাল মিডিয়া
                </p>
                <div className="flex items-center gap-8 sm:gap-10 mt-5">
                  <FacebookIcon
                    className={"h-[31px] sm:h-[77px] cursor-pointer"}
                    onClick={() => handleSocialLink("https://facebook.com/")}
                  />
                  <span className="w-px h-10 sm:h-[60px] bg-[#35373A] block"></span>
                  <InstagramIcon
                    className={"h-[31px] sm:h-[77px] cursor-pointer"}
                    onClick={() => handleSocialLink("https://instagram.com/")}
                  />
                  <span className="w-px h-10 sm:h-[60px] bg-[#35373A] block"></span>
                  <YoutubeIcon
                    className={"h-[31px] sm:h-[77px] cursor-pointer"}
                    onClick={() => handleSocialLink("https://youtube.com/")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl hidden lg:block">
            <img
              src={image2}
              alt="Eagle"
              className="rounded-2xl size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
