import React from "react";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";
import DHeader from "../components/shared/Dashboard-header/DHeader";

const DashboardLayout = () => {
    return (
        <>
            <DHeader />
            <div className="lg:flex gap-10">
                {/* <DSideBar /> */}
                {/* <main className="flex-1 mt-4 p-4 md:p-8">{children}</main> */}
            </div>
            <ScrollRestoration />
            <Toaster position="top-center" />
        </>
    );
};

export default DashboardLayout;
