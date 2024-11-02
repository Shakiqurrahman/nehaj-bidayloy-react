import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import DHeader from "../components/shared/Dashboard-header/DHeader";
import DSideBar from "../components/shared/Dashboard-header/DSidebar";

const DashboardLayout = () => {
    return (
        <>
            <DHeader />
            <div className="lg:flex gap-10">
                <DSideBar />
                <div className="flex-grow mt-4 p-4 md:p-8">
                    <Outlet />
                </div>
            </div>
            <ScrollRestoration />
            <Toaster position="top-center" />
        </>
    );
};

export default DashboardLayout;
