import React from "react";
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
        </>
    );
};

export default PublicLayout;
