import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header/Header";

const PublicLayout = () => {
  return (
    <section className="bg-primary-white p-[30px]">
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </section>
  );
};

export default PublicLayout;
