import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import DHeader from "../components/shared/Dashboard-header/DHeader";
import DSideBar from "../components/shared/Dashboard-header/DSidebar";

const DashboardLayout = () => {
    return (
        <section className="font-poppins bg-[#f2f2f2]">
            <DHeader />
            <div className="lg:flex gap-10">
                <DSideBar />
                <div className="flex-1 mt-4 p-4 md:p-8">
                    <Outlet />
                </div>
            </div>
            <ScrollRestoration />
        </section>
    );
};

export default DashboardLayout;
