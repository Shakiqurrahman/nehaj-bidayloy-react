import React from "react";
import AuthorCard from "../components/Cards/AuthorCard";

const AuthorsPage = () => {
  return (
    <section className="pt-[180px] pb-[70px] max-width">
      <div>
        <h1 className="font-niladri text-[22px] sm:text-[30px] text-primary-blue mb-5">
          নেহাজের লেখকবৃন্দ
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <AuthorCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsPage;
