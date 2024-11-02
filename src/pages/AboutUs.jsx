import React from "react";
import CoverPhoto from "/nehaz-bidyalay-logo.jpg";

const AboutUs = () => {
  return (
    <div className="max-width my-20">
      <h1 className="text-2xl font-ador text-center mb-10">আমাদের কথা</h1>
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
        <div className="w-full sm:w-1/2 text-xl leading-[36px] mb-5 sm:mb-0">
          <p className="mb-5">
            যোগাযোগ। শিল্প, সাহিত্য, সংস্কৃতি, সমাজ, দর্শন, রাজনীতি, ইতিহাস ও
            ভবিষ্যৎ-ভাবনা— ইত্যকার-বিষয়ক ওয়েবজিন। নির্মোহ ও নৈর্বক্তিক পন্থায়
            আমরা সব ধরনের সৃষ্টিশীল রচনা ও শিল্পকর্ম প্রকাশ করি। এ ক্ষেত্রে লেখক
            ও শিল্পীর বয়স কিংবা পরিচয় আমাদের কাছে মুখ্য নয়। আমরা কেবল পরিশীলিত
            রচনা ও শৈল্পিক সৃষ্টিকর্মকেই বিবেচনা করি। রচনা ও শিল্পের শিল্পগুণই
            আমাদের কাছে মুখ্য।
          </p>
          <p>
            যোগাযোগ ঐতিহ্যের সাথে মেলবন্ধন ঘটাতে চায়; যোগাযোগ চায় আমাদের ভাষিক ও
            বুদ্ধিবৃত্তিক পরম্পরার উত্তরাধিকার বহন করতে। যোগাযোগ পাঠ ও পাঠকের
            সংযোগ সেতু। যোগাযোগ আমাদের পারস্পরিক যোগাযোগ-পথ। ঐতিহ্য ও পরম্পরার
            এই নতুন সিলসিলায় আপনাদের স্বাগত।
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <img
            placeholder="blur"
            src={CoverPhoto}
            alt="Nehaj-Bidyalot cover photo"
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
