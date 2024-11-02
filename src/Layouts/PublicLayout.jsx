import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header/Header";
import Navbar from "../components/shared/Header/Navbar";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
      <Toaster position="top-center" />
    </>
  );
};

export default PublicLayout;
